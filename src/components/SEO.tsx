import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
}

const SITE_URL = "https://colectivo.eternum.lat";
const DEFAULT_OG = "/img/Banner_Colectivo_Fondo.png";

export function SEO({
  title,
  description = "Red de conocimiento entre equipos — BT Informática 2026",
  ogImage = DEFAULT_OG,
  ogType = "website",
}: SEOProps) {
  const fullTitle = title ? title + " — El Colectivo" : "El Colectivo";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={SITE_URL} />
      <meta name="description" content={description} />
    </Helmet>
  );
}