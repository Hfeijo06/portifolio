import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henrique Feijó | Desenvolvedor Front-End",
  description:
    "Portfólio de Henrique Feijó, desenvolvedor front-end especializado em React, Next.js, TypeScript e Tailwind CSS. Interfaces com foco em performance, acessibilidade e design.",
  keywords: [
    "Henrique Feijó",
    "desenvolvedor front-end",
    "React",
    "Next.js",
    "TypeScript",
    "portfólio",
  ],
  openGraph: {
    title: "Henrique Feijó | Desenvolvedor Front-End",
    description:
      "Portfólio de Henrique Feijó, desenvolvedor front-end especializado em React, Next.js e TypeScript.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henrique Feijó | Desenvolvedor Front-End",
    description:
      "Portfólio de Henrique Feijó, desenvolvedor front-end especializado em React, Next.js e TypeScript.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <MotionConfig reducedMotion="user">
            <main className="min-h-screen">{children}</main>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
