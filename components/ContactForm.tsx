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

  //test validity onBlur
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleBlur = (field: string) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
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
    <div className="form-container flex h-full w-full items-center justify-center px-4 py-20 md:p-10">
      <form
        className="outline-gray-400z flex h-full w-full max-w-[600px] flex-col justify-center gap-2 rounded px-2 py-6 text-base shadow-lg outline outline-1 sm:p-6 md:gap-4"
        action=""
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-center text-3xl font-semibold md:text-6xl">
          Let&apos;s Connect!
        </h2>
        <div className="flex flex-col gap-2">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className={`form__input peer ${
              touchedFields.name && !formData.name ? "border-red-500" : ""
            }`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            required
            maxLength={35}
          />
          <p
            className={`text-sm text-red-500 ${touchedFields.name && !formData.name ? "visible" : "invisible"} md:text-lg`}
          >
            Please enter your name
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className={`form__input peer ${
              touchedFields.email && !formData.email.match(/^\S+@\S+\.\S+$/)
                ? "border-red-500"
                : ""
            }`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            required
            maxLength={100}
          />
          <p
            className={`text-sm text-red-500 md:text-lg ${touchedFields.email && !formData.email.match(/^\S+@\S+\.\S+$/) ? "visible" : "invisible"} `}
          >
            Please enter a valid email address
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="form__label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`form__input peer ${touchedFields.message && !formData.message ? "border-red-500" : ""}`}
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
            required
            maxLength={400}
            rows={6}
          />
          <p
            className={`text-sm text-red-500 md:text-lg ${touchedFields.message && !formData.message ? "visible" : "invisible"}`}
          >
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
