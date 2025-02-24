import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, { message: "First Name must be at least 2 characters long" })
    .max(35),

  lastName: z.string()
    .min(2, { message: "First Name must be at least 2 characters long" })
    .max(35),

  email: z.string()
    .email({ message: "Invalid email format" })
    .max(100),

  phone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" })
    .optional(),

  company: z.string()
    .max(100, { message: "Company name cannot exceed 100 characters" })
    .optional(),

  inquiryType: z.enum(['general', 'quote', 'employment', 'contract'], {
    message: 'Please select a valid inquiry type',
  }),

  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(400, { message: 'Message cannot exceed 400 characters' }),

});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
