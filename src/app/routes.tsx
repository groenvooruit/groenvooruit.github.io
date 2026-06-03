import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { SolarPanels } from "./pages/SolarPanels";
import { HomeBatteries } from "./pages/HomeBatteries";
import { SavingsPlans } from "./pages/SavingsPlans";
import { HowItWorks } from "./pages/HowItWorks";
import { BookConsultation } from "./pages/BookConsultation";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import { ThankYou } from "./pages/ThankYou";
import { Privacy } from "./pages/Privacy";
import { NotFound } from "./pages/NotFound";

export const router = createHashRouter([
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
      { path: "adviesgesprek", Component: BookConsultation },
      { path: "faq", Component: Faq },
      { path: "contact", Component: Contact },
      { path: "bedankt", Component: ThankYou },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
