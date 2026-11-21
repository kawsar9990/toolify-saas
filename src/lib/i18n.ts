import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../locales/en/common.json";
import bnCommon from "../locales/bn/common.json";
import enFaq from "../locales/en/faq.json";
import bnFaq from "../locales/bn/faq.json";
import encookie from "../locales/en/cookie-policy.json";
import bancookie from "../locales/bn/cookie-policy.json";
import enprivacypolicy from "../locales/en/privacypolicy.json";
import bnprivacypolicy from "../locales/bn/privacypolicy.json";
import entermsservices from "../locales/en/terms.json";
import bntermsservices from "../locales/bn/terms.json";
import enrefundpolicy from "../locales/en/refund-policy.json";
import bnrefundpolicy from "../locales/bn/refund-policy.json";
import enhelpcenter from "../locales/en/help-center.json";
import bnhelpcenter from "../locales/bn/help-center.json";
import enabout from "../locales/en/about.json";
import bnabout from "../locales/bn/about.json";
import enshowus from "../locales/en/showcase.json";
import bnshowus from "../locales/bn/showcase.json";
import entoolslid from "../locales/en/toolSlider.json";
import bntoolslid from "../locales/bn/toolSlider.json";
import entoolcategory from "../locales/en/tool-categories.json";
import bntoolcategory from "../locales/bn/tool-categories.json";


if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enCommon,
        common: enCommon,
        faq: enFaq,
        cookiepolicy: encookie,
        privacypolicy: enprivacypolicy,
        terms: entermsservices,
        refundpolicy: enrefundpolicy, 
        helpcenter: enhelpcenter,
        about: enabout,
        showus: enshowus,
        toolslider: entoolslid,
        toolcategory: entoolcategory,
      },
      bn: {
        translation: bnCommon,
        common: bnCommon,
        faq: bnFaq,
        cookiepolicy: bancookie,
        privacypolicy: bnprivacypolicy,
        terms: bntermsservices,
        refundpolicy: bnrefundpolicy,
        helpcenter: bnhelpcenter,
        about: bnabout,
        showus: bnshowus,
        toolslider: bntoolslid,
        toolcategory: bntoolcategory,
      },
    },
    defaultNS: "translation",
    ns: ["translation", "common", "faq", "toolslider", "toolcategory", "cookiepolicy", "privacypolicy", "terms", "refundpolicy", "about", "showus"],
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;