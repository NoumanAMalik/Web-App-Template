import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Placeholder",
    description: "Placeholder",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="dark">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
