import PrivacyPolicy from "./PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Toolify",
  description:
    "Learn how Toolify collects, uses, stores, and protects your personal information. Read our Privacy Policy to understand your privacy rights and data security practices.",
};


export default function Page(){

return(
<div>
<PrivacyPolicy />
</div>
)
}