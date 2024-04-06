import type { Metadata } from "next";
import { nunito } from "@/components/ui/fonts";
import "@/components/ui/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Shri single bud center",
  description: "upload and manage data for single bud center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(`${nunito.className} min-h-screen overflow-x-hidden`)}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
