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
import Link from "next/link";

const loginFormScheme = z.object({
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
});

type FormSchema = z.infer<typeof loginFormScheme>;

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

const SignInForm = () => {
    const form = useForm<FormSchema>({
        resolver: zodResolver(loginFormScheme),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        criteriaMode: "all",
        mode: "onChange",
    });

    const onSubmit = (values: FormSchema) => {
        console.log("Form Submitted:", values);
        alert("Login Form submitted successfully!");
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
                <div className="">
                    <Button type="submit">Submit</Button>
                    <Button
                        variant="link"
                        className="float-end text-xs text-blue-400">
                        <Link href="/sign-up">Register here</Link>
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SignInForm;
