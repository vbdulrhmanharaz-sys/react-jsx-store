import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9+\s-]{7,15}$/, "Enter a valid phone number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().min(3, "Postal code is required"),
  country: z.string().min(2, "Country is required"),
  cardName: z.string().min(2, "Name on card is required"),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, "Card number must be exactly 16 digits"),
  cardExpiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry must be in MM/YY format"),
  cardCvc: z.string().regex(/^\d{3,4}$/, "CVC must be 3 or 4 digits"),
});