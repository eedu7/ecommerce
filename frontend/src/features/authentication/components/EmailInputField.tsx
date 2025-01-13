import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { useId } from "react";

export default function EmailInputField({ placeholder, field }) {
    const id = useId();
    return (
        <div className="space-y-2">
            <Label htmlFor={id}>Email Address</Label>
            <div className="relative">
                <Input
                    id={id}
                    className="peer pe-9"
                    placeholder={placeholder}
                    type="email"
                    {...field}
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Mail size={16} strokeWidth={2} aria-hidden="true" />
                </div>
            </div>
        </div>
    );
}
