import { Sora, Aref_Ruqaa, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { URL_ } from "../lib/site";
import { SpeedInsights } from '@vercel/speed-insights/next';
const sora = Sora({ subsets: ["latin"], variable: "--f-sans" });
const ruqaa = Aref_Ruqaa({ subsets: ["arabic", "latin"], weight: ["400", "700"], variable: "--f-ar" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-serif" });
export const metadata = {
  metadataBase: new URL(URL_),
  title: "Riluwan P Razak | Digital Marketing | Performance & Growth | AI Assisted Marketing",
  description: "Dubai-based digital marketer. Meta lead generation, creative direction, video editing, SEO, AEO and GEO, WordPress and Next.js.",
  openGraph: { title: "Riluwan P Razak", description: "Performance marketing, creative direction and video, based in Dubai.", images: ["/images/hero.webp"] },
  alternates: { canonical: "/" },
};
const ld = { "@context": "https://schema.org", "@type": "Person", name: "Riluwan P Razak", jobTitle: "Digital Marketing | Performance & Growth | AI Assisted Marketing", url: URL_, email: "riluwanrazakdm@gmail.com", telephone: "+971529892230",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" }, sameAs: ["https://linkedin.com/in/riluwanrazak"],
  knowsAbout: ["Performance marketing", "Meta Ads", "Lead generation", "Video editing", "SEO", "Answer engine optimization", "Generative engine optimization", "WordPress", "Next.js"] };
export default function Root({ children }) {
  return (<html lang="en" className={`${sora.variable} ${ruqaa.variable} ${serif.variable}`}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}<SpeedInsights /></body></html>);
}
