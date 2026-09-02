import "./globals.css";

const siteUrl = "https://tefahad.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tasnimul Ehsan Fahad | AI, Technology & Digital Experiments",
    template: "%s | Tasnimul Ehsan Fahad",
  },

  description:
    "Tasnimul Ehsan Fahad explores AI, technology, web, and digital experiments—building useful things and sharing the “oh, I didn’t know that” moments.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Tasnimul Ehsan Fahad",
    "Tasnimul Fahad",
    "AI",
    "Artificial Intelligence",
    "Technology",
    "Web",
    "Digital Experiments",
    "Open Source",
  ],

  authors: [
    {
      name: "Tasnimul Ehsan Fahad",
      url: siteUrl,
    },
  ],

  creator: "Tasnimul Ehsan Fahad",
  publisher: "Tasnimul Ehsan Fahad",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tasnimul Ehsan Fahad | AI, Technology & Digital Experiments",
    description:
      "AI, technology, web, and digital experiments by Tasnimul Ehsan Fahad.",
    siteName: "Tasnimul Ehsan Fahad",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tasnimul Ehsan Fahad | AI, Technology & Digital Experiments",
    description:
      "AI, technology, web, and digital experiments by Tasnimul Ehsan Fahad.",
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tasnimul Ehsan Fahad",
  url: siteUrl,
  description:
    "Exploring AI, technology, web, and digital experiments.",
  sameAs: [
    "https://github.com/tasnimulehsan",
    "https://www.facebook.com/selfahad",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tasnimul Ehsan Fahad",
  url: siteUrl,
  description:
    "AI, technology, web, and digital experiments by Tasnimul Ehsan Fahad.",
  publisher: {
    "@type": "Person",
    name: "Tasnimul Ehsan Fahad",
    url: siteUrl,
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="noise">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
