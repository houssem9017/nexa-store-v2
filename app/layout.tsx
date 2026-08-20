import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexa Store — La tech, en mieux.",
  description: "Des objets technologiques choisis pour votre quotidien, partout en Tunisie.",
  openGraph: {
    title: "Nexa Store — La tech, en mieux.",
    description: "Des objets technologiques choisis pour votre quotidien.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
