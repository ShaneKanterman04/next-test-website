import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Next Test Website",
  description: "A small Hostlet deploy test app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
