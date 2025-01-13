import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { useId } from "react";

export default function UserNameInputField({ placeholder, field }) {
    const id = useId();
    return (
        <div className="space-y-2">
            <Label htmlFor={id}>Username</Label>
            <div className="relative">
                <Input
                    id={id}
                    className="peer pe-9"
                    placeholder={placeholder}
                    type="text"
                    {...field}
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <User size={16} strokeWidth={2} aria-hidden="true" />
                </div>
            </div>
        </div>
    );
}
