import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bolt, ChevronDown, LogIn, LogOut, Pin, UserPen } from "lucide-react";
import Link from "next/link";

export default function NavigationProfile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                    <Avatar>
                        <AvatarImage src="NO" alt="Nothing" />
                        <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                    <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className="ms-2 opacity-60"
                        aria-hidden="true"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-64">
                <DropdownMenuLabel className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">
                        User
                    </span>
                    <span className="truncate text-xs font-normal text-muted-foreground">
                        user@example.com
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Bolt
                            size={16}
                            strokeWidth={2}
                            className="opacity-60"
                            aria-hidden="true"
                        />
                        <span>Setting</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Pin
                            size={16}
                            strokeWidth={2}
                            className="opacity-60"
                            aria-hidden="true"
                        />
                        <span>Favourite</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <UserPen
                            size={16}
                            strokeWidth={2}
                            className="opacity-60"
                            aria-hidden="true"
                        />
                        <span>Edit Profile</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/sign-in" className="flex gap-2">
                        <LogIn
                            size={16}
                            strokeWidth={2}
                            className="opacity-60"
                            aria-hidden="true"
                        />
                        <span>Login</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogOut
                        size={16}
                        strokeWidth={2}
                        className="opacity-60"
                        aria-hidden="true"
                    />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
