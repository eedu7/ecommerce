import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { useId } from "react";
import type { Path, UseFormReturn } from "react-hook-form";
import type { LoginFormSchema, RegisterFormSchema } from "../scheme";

import { useState } from "react";

const FormInputField = <T extends RegisterFormSchema | LoginFormSchema>({
    name,
    form,
}: {
    name: Path<T>;
    form: UseFormReturn<T>;
}) => {
    const emailID = useId();
    const usernameID = useId();
    const passwordID = useId();
    const confirmPasswordID = useId();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    switch (name) {
        case "email":
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="space-y-2">
                                    <Label htmlFor={emailID}>
                                        Email Address
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id={emailID}
                                            className="peer pe-9"
                                            placeholder="john.doe@example.com"
                                            type="email"
                                            {...field}
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                                            <Mail
                                                size={16}
                                                strokeWidth={2}
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            );
            break;

        case "password":
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="space-y-2">
                                    <Label htmlFor={passwordID}>Password</Label>
                                    <div className="relative">
                                        <Input
                                            id={passwordID}
                                            className="pe-9"
                                            placeholder="Password"
                                            type={
                                                isVisible ? "text" : "password"
                                            }
                                            {...field}
                                        />
                                        <button
                                            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                            type="button"
                                            onClick={toggleVisibility}
                                            aria-label={
                                                isVisible
                                                    ? "Hide password"
                                                    : "Show password"
                                            }
                                            aria-pressed={isVisible}
                                            aria-controls="password">
                                            {isVisible ? (
                                                <EyeOff
                                                    size={16}
                                                    strokeWidth={2}
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Eye
                                                    size={16}
                                                    strokeWidth={2}
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            );
            break;

        case "confirmPassword":
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="space-y-2">
                                    <Label htmlFor={confirmPasswordID}>
                                        Confirm Password
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id={confirmPasswordID}
                                            className="pe-9"
                                            placeholder="Confirm Password"
                                            type={
                                                isVisible ? "text" : "password"
                                            }
                                            {...field}
                                        />
                                        <button
                                            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                            type="button"
                                            onClick={toggleVisibility}
                                            aria-label={
                                                isVisible
                                                    ? "Hide password"
                                                    : "Show password"
                                            }
                                            aria-pressed={isVisible}
                                            aria-controls="password">
                                            {isVisible ? (
                                                <EyeOff
                                                    size={16}
                                                    strokeWidth={2}
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Eye
                                                    size={16}
                                                    strokeWidth={2}
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            );

            break;
        case "username":
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="space-y-2">
                                    <Label htmlFor={usernameID}>Username</Label>
                                    <div className="relative">
                                        <Input
                                            id={usernameID}
                                            className="peer pe-9"
                                            placeholder="John Doe"
                                            type="text"
                                            {...field}
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                                            <User
                                                size={16}
                                                strokeWidth={2}
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            );
            break;

        default:
            return <div className="h-4 w-full border shadow"></div>;
            break;
    }
};

export default FormInputField;
