import Header from "@/app/components/Header";
import type { Metadata } from "next";
import {Noto_Sans} from "next/font/google";
import "./../globals.css";

const noto = Noto_Sans({subsets: ['latin'], weight: ['300', '400', '700']});

export const metadata: Metadata = {
  title: "Schedulify",
  description: "Seamlessly coordinate and schedule events by dynamically matching user availability for effortless planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <main className="container">
          <Header />
          {children}
        </main>
      </body>
    </html>
);
}