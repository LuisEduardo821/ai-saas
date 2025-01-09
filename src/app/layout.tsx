import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Genius",
  description: "Ai Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInForceRedirectUrl={process.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL}
    >
      <html lang="en">
        <body className={`${font.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
