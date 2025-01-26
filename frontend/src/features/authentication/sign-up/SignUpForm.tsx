"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import FormInputField from "../components/FormInputField";
import { useAuth } from "../hooks/useAuth";
import { RegisterFormSchema, registerFormScheme } from "../scheme";

const SignUpForm = () => {
    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormScheme),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        criteriaMode: "all",
        mode: "onChange",
    });

    const { register } = useAuth();

    const onSubmit = (formData: RegisterFormSchema) => {
        const { email, password, username } = formData;
        register.mutate({ username, email, password });
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
                <div>
                    <Button type="submit">Register</Button>
                    <Button
                        variant="link"
                        className="float-end text-xs text-blue-400">
                        <Link href="/sign-in">Already have an account?</Link>
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SignUpForm;
