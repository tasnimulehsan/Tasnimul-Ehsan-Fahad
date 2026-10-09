import "./globals.css";

const siteUrl = "https://tefahad.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fahad — Creative Developer",
    template: "%s | Fahad",
  },
  description:
    "Fahad builds tactile digital experiences where code meets atmosphere — from WebGL experiments to thoughtful interfaces.",
  alternates: { canonical: "/" },
  authors: [{ name: "Tasnimul Ehsan Fahad", url: siteUrl }],
  creator: "Tasnimul Ehsan Fahad",
  publisher: "Tasnimul Ehsan Fahad",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fahad — Creative Developer",
    description: "Interfaces with a pulse. Digital experiences with a point of view.",
    siteName: "Tasnimul Ehsan Fahad",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad — Creative Developer",
    description: "Interfaces with a pulse. Digital experiences with a point of view.",
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tasnimul Ehsan Fahad",
  url: siteUrl,
  description: "Exploring AI, technology, web, and digital experiments.",
  knowsAbout: ["Artificial Intelligence", "Web Development", "Open Source", "Python", "JavaScript", "Linux"],
  sameAs: [
    "https://github.com/tasnimulehsan",
    "https://www.facebook.com/tasnimulehsan.fahad",
    "https://www.instagram.com/tasnimulehsan.fahad",
    "https://www.linkedin.com/in/tasnimulehsanfahad",
    "https://www.threads.com/tasnimulehsan.fahad",
    "https://youtube.com/@tefahad",
    "https://www.facebook.com/selfahad",
    "https://500px.com/p/tasnimulehsan",
    "https://www.shutterstock.com/g/tasnimulehsan",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tasnimul Ehsan Fahad",
  url: siteUrl,
  description: "AI, technology, web, and digital experiments by Tasnimul Ehsan Fahad.",
  publisher: { "@type": "Person", name: "Tasnimul Ehsan Fahad", url: siteUrl },
};

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </body>
    </html>
  );
}
