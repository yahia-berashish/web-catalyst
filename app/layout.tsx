import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./contexts";
import { Sidebar } from "./layout/Sidebar";

export const metadata: Metadata = {
  title: "Web Catalyst",
  description: "The next generation of UI tooling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Sidebar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
