// src/components/Seo.jsx
import { Helmet } from "react-helmet";

export default function Seo({ title, description, lang = "es" }) {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Estefany Mar" />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://estefanymar.netlify.app/assets/ponyo.png" />
      <meta property="og:url" content="https://estefanymar.netlify.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://estefanymar.netlify.app/assets/ponyo.png" />
    </Helmet>
  );
}
