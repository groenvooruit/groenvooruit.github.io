import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import logoSrc from "../imports/EWJrl_Nero_AI_Background_Remover_transparent_(1).png";

export default function App() {
  useEffect(() => {
    document.title = "GroenVooruit";
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = logoSrc;
  }, []);
  return <RouterProvider router={router} />;
}
