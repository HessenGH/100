import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../util/Provider";
import Header from "../component/Header";


// import Provider from "@/util/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

          <Header/>
          <Provider>
        {children}
        </Provider>
        </body>
    </html>
  );
}
