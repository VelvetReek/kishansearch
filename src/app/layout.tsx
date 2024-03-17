import type { Metadata } from "next";
import { nunito } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import Header from "@/app/ui/header";

export const metadata: Metadata = {
  title: "Shri single bud center",
  description: "It is a search engine for kishan of Hasanpur Sugar Mill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
