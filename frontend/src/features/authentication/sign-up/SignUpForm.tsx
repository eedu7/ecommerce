"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInputField from "../components/FormInputField";
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

    const onSubmit = (values: RegisterFormSchema) => {
        console.log("Form Submitted:", values);
        alert("Form submitted successfully!");
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
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default SignUpForm;
