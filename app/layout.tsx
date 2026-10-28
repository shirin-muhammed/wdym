import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WDYM",
  description: "Fresh fish, cleaned and delivered.",
  metadataBase: new URL("https://wdym.in"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
