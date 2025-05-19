import { Roboto_Flex, Space_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Mullan",
  description:
    "Full Stack Software Developer with a Front End focus. Before pivoting to coding in 2019, I worked as an Audio Engineer. Touring with rock bands honed my teamwork, creative problem-solving, and ability to navigate big personalities under pressure. I bring that same passion for craftsmanship and collaboration to software development, combining relentless curiosity with strong communication skills to translate stakeholder visions into inspiring, technically excellent products. For the past few years, I've worked with Next.js, React, GraphQL, TypeScript, and Tailwind, using Strapi and Contentful on the backend and interfacing with SQL and no-SQL databases. I've managed version control with GitHub, project workflows in Jira, and CI/CD pipelines with Travis, following Agile/Scrum methodologies. Always eager to expand my knowledge, I've built projects with Python/Django, PHP/Laravel, Bootstrap, Material UI, Styled Components, MongoDB, and SQL. I've also written tests with Jest and Supertest, and managed projects using Trello, Notion, and GitHub Issues.",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍🎤</text></svg>",
  openGraph: {
    title: "Aaron Mullan - Full Stack Developer",
    description:
      "Full Stack Software Developer with a Front End focus. Audio Engineer turned developer, passionate about creating excellent products.",
    type: "website",
    locale: "en_US",
    siteName: "Aaron Mullan Portfolio",
    images: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 630'><rect width='1200' height='630' fill='%231a1a1a'/><text x='50%' y='50%' font-size='300' text-anchor='middle' dominant-baseline='middle' fill='white'>👨‍🎤</text></svg>",
        width: 1200,
        height: 630,
        alt: "Aaron Mullan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Mullan - Full Stack Developer",
    description:
      "Full Stack Software Developer with a Front End focus. Former Audio Engineer turned developer, passionate about creating excellent products.",
    images: [
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 630'><rect width='1200' height='630' fill='%231a1a1a'/><text x='50%' y='50%' font-size='300' text-anchor='middle' dominant-baseline='middle' fill='white'>👨‍🎤</text></svg>",
    ],
  },
};

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
