import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donate to the Future Heroes | Donation Hero",
  description:
    "Join us at Donation Hero to empower future heroes through your generous donations. Together, we can make a difference in the lives of children worldwide.",
  applicationName: "Donation Hero",
  appleWebApp: {
    title: "Donation Hero",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
