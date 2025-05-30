import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/root/globals.css";

const roboto = Roboto({
  weight: "400", // Or 'variable' for variable fonts, or specify multiple weights
  subsets: ["latin"], // Or other subsets
  display: "swap", // Optional, can be 'swap', 'fallback', 'optional' or 'block'
});

export const metadata: Metadata = {
  title: {
    default: "Aryan Tomar Template",
    template: "%s | Aryan Tomar Template",
  },
  description:
    "Aryan Tomar's personalized Next.js + ShadCN + TypeScript + SCSS starter template",
  openGraph: {
    url: "https://www.aryantomar.com",
    title: "Aryan Tomar",
    description: "Next.js + chakra-ui + TypeScript + SCSS template",
    type: "website",
    images: [
      {
        url: "https://www.aryantomar.com/opengraph-image.png?8684865a896acc3f",
        alt: "aryantomar.com og-image",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://aryantomar.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
