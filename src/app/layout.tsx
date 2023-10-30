import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>정승연 | 프론트엔드 개발자</title>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
