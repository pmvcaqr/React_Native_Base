import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import en from "./en.json";
import vi from "./vi.json";

i18n.use(reactI18nextModule).init({
  fallbackLng: "en",
  resources: {
    en: en,
    vi: vi,
    // initial translation namespace
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false
    }
  }
});

export default i18n;
