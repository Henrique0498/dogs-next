import type { Metadata } from "next";

import { type_second } from "@/functions/fonts";
import { UserContextProvider } from "@/context/userContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import userGet from "@/actions/userGet";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await userGet();

  return (
    <html lang="pt-br">
      <body className={`${type_second.variable}`}>
        <UserContextProvider user={data}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
