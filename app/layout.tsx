import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar";
import NavWrapper from "@/components/navwrapper";

export const inter = Inter({ subsets: ["latin"] });
export const archivo = Archivo_Black({
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Team SMP",
    description:
        "The Team SMP is a survival Minecraft server run by JunglTemple and XxDreamXxXx.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn([
                    GeistSans.className,
                    "p-10 bg-black text-white",
                ])}
            >
                <NavWrapper />
                <div className="mt-4">{children}</div>
            </body>
        </html>
    );
}
