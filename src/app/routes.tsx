import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { SolarPanels } from "./pages/SolarPanels";
import { HomeBatteries } from "./pages/HomeBatteries";
import { SavingsPlans } from "./pages/SavingsPlans";
import { HowItWorks } from "./pages/HowItWorks";
import { SavingsTool } from "./pages/SavingsTool";
import { RequestQuote } from "./pages/RequestQuote";
import { BookConsultation } from "./pages/BookConsultation";
import { Blog } from "./pages/Blog";
import { BlogArticle } from "./pages/BlogArticle";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import { ThankYou } from "./pages/ThankYou";
import { Privacy } from "./pages/Privacy";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "over-ons", Component: About },
      { path: "oplossingen/zonnepanelen", Component: SolarPanels },
      { path: "oplossingen/thuisbatterij", Component: HomeBatteries },
      { path: "oplossingen/bespaarplannen", Component: SavingsPlans },
      { path: "werkwijze", Component: HowItWorks },
      { path: "bespaartool", Component: SavingsTool },
      { path: "offerte", Component: RequestQuote },
      { path: "adviesgesprek", Component: BookConsultation },
      { path: "kennisbank", Component: Blog },
      { path: "kennisbank/:slug", Component: BlogArticle },
      { path: "faq", Component: Faq },
      { path: "contact", Component: Contact },
      { path: "bedankt", Component: ThankYou },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
