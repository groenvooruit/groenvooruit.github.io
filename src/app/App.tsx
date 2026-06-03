import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import faviconSrc from "../imports/kleine_logo.png";

const SITE_TITLE = "GroenVooruit — Zonnepanelen & thuisbatterijen";
const SITE_DESCRIPTION =
  "GroenVooruit helpt huiseigenaren met eerlijk advies over zonnepanelen en modulaire thuisbatterijen. Persoonlijk, transparant en vakkundig geïnstalleerd.";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function App() {
  useEffect(() => {
    document.title = SITE_TITLE;
    setLink("icon", faviconSrc);
    setLink("shortcut icon", faviconSrc);
    setLink("apple-touch-icon", faviconSrc);

    setMeta("name", "description", SITE_DESCRIPTION);
    setMeta("name", "author", "GroenVooruit");

    setMeta("property", "og:title", SITE_TITLE);
    setMeta("property", "og:description", SITE_DESCRIPTION);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", faviconSrc);
    setMeta("property", "og:site_name", "GroenVooruit");

    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", SITE_TITLE);
    setMeta("name", "twitter:description", SITE_DESCRIPTION);
    setMeta("name", "twitter:image", faviconSrc);
  }, []);
  return <RouterProvider router={router} />;
}
