"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import FormInputField from "../components/FormInputField";
import { useAuth } from "../hooks/useAuth";
import { LoginFormSchema, loginFormScheme } from "../scheme";

const SignInForm = () => {
    const form = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormScheme),
        defaultValues: {
            email: "",
            password: "",
        },
        criteriaMode: "all",
        mode: "onChange",
    });

    const { login } = useAuth();

    const onSubmit = (formData: LoginFormSchema) => {
        console.table(formData);
        login.mutate(formData);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-8">
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
                <div>
                    <Button type="submit">Log In</Button>
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
