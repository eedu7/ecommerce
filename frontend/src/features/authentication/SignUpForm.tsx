"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInputField } from "./components/FormInputField";
import { registerFormScheme, type RegisterFormScheme } from "./scheme";
import useAuth from "./useAuth";

const SignUpForm = () => {
    const form = useForm<RegisterFormScheme>({
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

    const { Register } = useAuth();

    const onSubmit = (values: RegisterFormScheme) => {
        const { email, password, username } = values;
        Register.mutate({ email, password, username });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-4">
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
