"use client";

import { useForm } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { RegisterFormScheme } from "../scheme";
import EmailInputField from "./EmailInputField";
import PasswordInputField from "./PasswordInputField";
import UserNameInputField from "./UserNameInputField";

export const FormInputField = ({
    name,
    label,
    placeholder,
    form,
}: {
    name: keyof RegisterFormScheme;
    label: string;
    placeholder: string;
    form: ReturnType<typeof useForm<RegisterFormScheme>>;
}) => (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormControl>
                    {name === "email" ? (
                        <EmailInputField
                            field={field}
                            placeholder={placeholder}
                        />
                    ) : name === "password" || name === "confirmPassword" ? (
                        <PasswordInputField
                            field={field}
                            placeholder={placeholder}
                            label={label}
                        />
                    ) : name === "username" ? (
                        <UserNameInputField
                            placeholder="Username"
                            field={field}
                        />
                    ) : (
                        <Input placeholder={placeholder} {...field} />
                    )}
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);
