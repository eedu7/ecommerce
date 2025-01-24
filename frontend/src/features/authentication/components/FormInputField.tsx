import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { UseFormReturn } from "react-hook-form";
import type { LoginFormSchema, RegisterFormSchema } from "../scheme";

const FormInputField = <T extends RegisterFormSchema | LoginFormSchema>({
    name,
    label,
    placeholder,
    form,
}: {
    name: keyof T;
    label: string;
    placeholder: string;
    form: UseFormReturn<T>;
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

export default FormInputField;
