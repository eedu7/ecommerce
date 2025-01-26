"use client";

import Link from "next/link";
import * as React from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavigationSearch from "@/features/search/NavigationSearch";
import { WebsiteLogo } from "@/lib/images";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function NavigationBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            <Image
                                src={WebsiteLogo}
                                alt="Website Logo"
                                height={96}
                                width={96}
                            />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="relative">
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <div className="left-full top-0 absolute">
                        <NavigationMenuContent>
                            <ul className="space-y-2.5 p-4 md:w-[200px] lg:w-[200px]">
                                <ListItem href="/docs" title="Introduction" />
                                <ListItem
                                    href="/docs/installation"
                                    title="Installation"
                                />
                                <ListItem
                                    href="/docs/primitives/typography"
                                    title="Typography"
                                />
                            </ul>
                        </NavigationMenuContent>
                    </div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationSearch />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            Documentation
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}>
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
