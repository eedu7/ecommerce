import { z } from "zod";

export const registerFormScheme = z
    .object({
        username: z
            .string()
            .min(3, { message: "Username must be at least 3 characters." })
            .max(32, { message: "Username must be at most 32 characters." }),
        email: z.string().email({ message: "Invalid email address." }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." })
            .max(16, {
                message: "Password must be at most 16 characters long.",
            }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const loginFormScheme = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters." })
        .max(16, {
            message: "Password must be at most 16 characters long.",
        }),
});

export type RegisterFormSchema = z.infer<typeof registerFormScheme>;
export type LoginFormSchema = z.infer<typeof loginFormScheme>;
