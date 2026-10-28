import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WDYM",
  description: "Fresh fish, cleaned and delivered.",
  metadataBase: new URL("https://wdym.in"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
