"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "./useAuth";

const formScheme = z
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

type FormSchema = z.infer<typeof formScheme>;

const FormInputField = ({
    name,
    label,
    placeholder,
    form,
}: {
    name: keyof FormSchema;
    label: string;
    placeholder: string;
    form: ReturnType<typeof useForm<FormSchema>>;
}) => (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

const SignUpForm = () => {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        criteriaMode: "all",
        mode: "onChange",
    });

    const { Register } = useAuth();

    const onSubmit = (values: FormSchema) => {
        const { email, password, username } = values;
        Register.mutate({ email, password, username });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-8">
                <FormInputField
                    name="username"
                    label="Username"
                    placeholder="Enter your username"
                    form={form}
                />
                <FormInputField
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    form={form}
                />
                <FormInputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    form={form}
                />
                <FormInputField
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    form={form}
                />
                <div className="w-full">
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SignUpForm;
