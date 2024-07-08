"use client";
import { Archivo_Black } from "next/font/google";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const archivo = Archivo_Black({
    subsets: ["latin"],
    weight: "400",
});

export default function NavBar() {
    return (
        <nav className="">
            <NavigationMenu>
                <NavigationMenuList className="gap-2">
                    <NavigationMenuItem>
                        <Link href="/">
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                <span
                                    className={cn([
                                        "gradient-text",
                                        archivo.className,
                                    ])}
                                >
                                    TEAM SMP
                                </span>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/blog">
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                <span>Blog</span>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
