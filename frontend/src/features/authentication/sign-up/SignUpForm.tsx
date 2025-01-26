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
                <FormInputField name="username" form={form} />
                <FormInputField name="email" form={form} />
                <FormInputField name="password" form={form} />
                <FormInputField name="confirmPassword" form={form} />
                <div>
                    <Button type="submit">Register</Button>
                    <Button
                        type="button"
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
