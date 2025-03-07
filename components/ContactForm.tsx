"use client";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormValues, contactFormSchema } from "@/lib/validation";
import CustomButton from "./CustomButton";
import Modal from "./Modal";

const ContactForm: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="flex justify-center bg-gray-100 py-16 dark:bg-gray-900">
      <form
        className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 md:p-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white page-heading">
          Let&apos;s Connect!
        </h2>

        {/* Grid Layout - Two Columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label className="form__label block text-gray-700 dark:text-gray-300">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName")}
              className="w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="form__label block text-gray-700 dark:text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName")}
              className="w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="form__label block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* new input phone */}
          <div>
            <label className="form__label block text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <PatternFormat
                  getInputRef={ref}
                  onValueChange={(values) => onChange(values.formattedValue)}
                  onBlur={onBlur}
                  value={value}
                  format="+1 (###) ###-####"
                  mask="_"
                  type="tel"
                  className={`w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 ${errors.phone ? "border-red-500" : ""}`}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className="form__label block text-gray-700 dark:text-gray-300">
              Company Name
            </label>
            <input
              type="text"
              {...register("company")}
              className="w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Inquiry Type */}
          <div>
            <label className="form__label block text-gray-700 dark:text-gray-300">
              Inquiry Type
            </label>
            <select
              {...register("inquiryType")}
              defaultValue=""
              className="w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 bg-neutral-200 cursor-pointer"
            >
              <option value="" disabled>
                --- Select an option ---
              </option>
              <option className="" value="quote">Request a Quote</option>
              <option value="general">General Inquiry</option>
              <option value="employment">Employment Opportunity</option>
              <option value="contract">Contract Work</option>
            </select>
            {errors.inquiryType && (
              <p className="mt-1 text-sm text-red-500">
                {errors.inquiryType.message}
              </p>
            )}
          </div>
          
          {/* Message - Full Width */}
          <div className="md:col-span-2">
            <label className="form__label block text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows={6}
              {...register("message")}
              className="form__textarea max-h-48 w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <CustomButton
            type="submit"
            text="Send Message"
            loading={isSubmitting}
          />
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactForm;
