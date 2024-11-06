"use client";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/email", {
        // Corrected path
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add Content-Type header
        },
        body: JSON.stringify({
          firstName: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        // Handle error case
        const errorData = await response.json();
        console.error("Error:", errorData);
      } else {
        const data = await response.json();
        console.log("Success:", data);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="form-container flex h-full w-full items-center justify-center p-10">
      <form
        className="flex h-full w-full max-w-[600px] flex-col justify-center gap-4 rounded p-4 text-base shadow-lg outline outline-1 outline-gray-200"
        action=""
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-center text-5xl font-semibold md:text-6xl">
          Reach Out!
        </h2>
        <div className="flex flex-col gap-2">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form__input peer"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={35}
          />
          <p className="invisible text-lg text-red-500 peer-invalid:peer-focus:visible">
            Please enter your name
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input peer"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={100}
          />
          <p className="invisible text-lg text-red-500 peer-invalid:peer-focus:visible">
            Please enter a valid email address
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="form__label" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="form__input peer"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={400}
            rows={6}
          />
          <p className="invisible text-lg text-red-500 peer-invalid:peer-focus:visible">
            Please enter your message
          </p>
        </div>
        {/* <button
          className="mt-3 w-52 self-center rounded-3xl bg-slate-600 p-2 text-white transition duration-200 hover:bg-slate-500 active:translate-y-1"
          type="submit"
        >
          Send Message
        </button> */}
        <CustomButton type="submit" text="Send Message" loading={loading} />
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactForm;
