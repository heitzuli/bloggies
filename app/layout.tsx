import { Inter } from "next/font/google";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
  title: `Heidi Poels Blog`,
  description: `Hi, welcome to my blog!`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sour+Gummy&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
