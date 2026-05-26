import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://sahan-portfolio.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Sahan Nawarathne | Software Engineer/ Consultant",
    template: "%s | Sahan Nawarathne",
  },

  description:
    "Sahan Nawarathne is a Software Engineer & Consultant based in Sri Lanka with 2+ years of experience building high-throughput fintech systems, Agentic AI architectures, and full-stack web & mobile applications for clients across the US, UK, and UAE.",

  keywords: [
    "Sahan Nawarathne",
    "Software Engineer Sri Lanka",
    "Fintech Software Engineer",
    "Agentic AI Developer",
    "AI Engineer",
    "Generative AI Developer",
    "Payment Systems Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "NestJS Developer",
    "Full Stack Developer",
    "React Native Developer",
    "Software Consultant",
    "Soukpay",
    "TurtlesEgg",
    "DEEPSKIN AI",
    "Kandy Sri Lanka Developer",
    "Remote Software Engineer",
    "Node.js Developer",
    "AWS Cloud Engineer",
    "Redux Developer",
    "Tailwind CSS",
    "PostgreSQL",
    "Supabase",
    "Redis Cache",
    "Software Engineer Portfolio",
    "Stripe Integration",
    "Apple Pay Developer",
    "Google Pay Integration",
    "PayPal Integration",
    "Payment Gateway Developer",
    "Fintech Payment Engineer",
  ],

  authors: [{ name: "Sahan Nawarathne", url: BASE_URL }],
  creator: "Sahan Nawarathne",
  publisher: "Sahan Nawarathne",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Sahan Nawarathne Portfolio",
    title: "Sahan Nawarathne | Software Engineer & AI Consultant",
    description:
      "Software Engineer & Consultant specialising in Fintech, Agentic AI, and full-stack development. Currently building high-throughput payment infrastructure and AI-driven systems at Soukpay.",
    locale: "en_US",
    images: [
      {
        url: "/dp/wapp-dp.jpeg",
        width: 1200,
        height: 630,
        alt: "Sahan Nawarathne — Software Engineer & AI Consultant",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sahan Nawarathne | Software Engineer & AI Consultant",
    description:
      "Software Engineer & Consultant specialising in Fintech, Agentic AI, and full-stack development across the US, UK & UAE.",
    images: ["/dp/wapp-dp.jpeg"],
    creator: "@___sahan__",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [{ url: "/s-logo.svg", type: "image/svg+xml" }],
    shortcut: "/s-logo.svg",
    apple: "/s-logo.svg",
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Sahan Nawarathne",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/dp/wapp-dp.jpeg`,
        caption: "Sahan Nawarathne — Software Engineer & AI Consultant",
      },
      jobTitle: "Software Engineer / Consultant",
      description:
        "Software Engineer and Consultant with 2+ years of experience in Fintech, Agentic AI architectures, and full-stack web and mobile development. Currently engineering high-throughput payment systems and AI-driven workflows at Soukpay.",
      knowsAbout: [
        "Agentic AI",
        "Generative AI",
        "Fintech",
        "Payment Systems",
        "TypeScript",
        "React.js",
        "Next.js",
        "React Native",
        "NestJS",
        "Node.js",
        "AWS",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Redux",
        "Tailwind CSS",
        "Stripe",
        "Apple Pay",
        "Google Pay",
        "PayPal",
        "Venmo",
        "Expo",
        "Figma",
        "Jest",
        "PostgreSQL",
        "Supabase",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Staffordshire",
          sameAs: "https://www.staffs.ac.uk",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "National Institute of Business Management (NIBM)",
        },
      ],
      worksFor: {
        "@type": "Organization",
        name: "Soukpay",
        description: "Reward-based Payment Fintech company",
        sameAs: "https://www.linkedin.com/company/soukpay/",
        url: "https://www.linkedin.com/company/soukpay/",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kandy",
        addressCountry: "LK",
      },
      email: "spasindu700@gmail.com",
      telephone: "+94769742518",
      sameAs: [
        "https://www.linkedin.com/in/sahan-naw/",
        "https://www.github.com/sahanpasindu99",
        "https://www.instagram.com/___sahan__/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Sahan Nawarathne Portfolio",
      description:
        "Portfolio of Sahan Nawarathne — Software Engineer & Consultant specialising in Fintech, Agentic AI, and full-stack development.",
      publisher: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profilepage`,
      url: BASE_URL,
      name: "Sahan Nawarathne | Software Engineer & AI Consultant",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      mainEntity: { "@id": `${BASE_URL}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/s-logo.svg" sizes="any" />
        <link rel="canonical" href={BASE_URL} />
        <meta name="geo.region" content="LK-CP" />
        <meta name="geo.placename" content="Kandy, Sri Lanka" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
