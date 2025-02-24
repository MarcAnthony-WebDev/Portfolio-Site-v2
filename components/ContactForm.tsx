"use client";
import { useState } from "react";

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormValues, contactFormSchema } from "@/lib/validation";
import CustomButton from "./CustomButton";
import Modal from "./Modal";

const ContactForm: React.FC = () => {

  console.log('vercel log')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Error submitting form");
        return;
      }

      console.log("Success:", await response.json());
      setIsModalOpen(true);
      reset();
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="flex justify-center py-16 bg-gray-100 dark:bg-gray-900">
      <form
        className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Let&apos;s Connect!
        </h2>

        {/* Grid Layout - Two Columns */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">

          {/* First Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">First Name</label>
            <input
              type="text"
              {...register("firstName")}
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Last Name</label>
            <input
              type="text"
              {...register("lastName")}
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Company Name</label>
            <input
              type="text"
              {...register("company")}
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
          </div>

          {/* Inquiry Type */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Inquiry Type</label>
            <select {...register("inquiryType")} defaultValue="" className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              <option value="" disabled>--- Select an option ---</option>
              <option value="quote">Request a Quote</option>
              <option value="general">General Inquiry</option>
              <option value="employment">Employment Opportunity</option>
              <option value="contract">Contract Work</option>
            </select>
            {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType.message}</p>}
          </div>

          {/* Message - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              rows={6}
              {...register("message")}
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 max-h-48"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <CustomButton type="submit" text="Send Message" loading={isSubmitting} />
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactForm;
