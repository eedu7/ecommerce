"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import FormInputField from "../components/FormInputField";
import { LoginFormSchema, loginFormScheme } from "../scheme";

const SignInForm = () => {
    const form = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormScheme),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        criteriaMode: "all",
        mode: "onChange",
    });

    const onSubmit = (values: LoginFormSchema) => {
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
