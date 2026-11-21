import type { Metadata } from "next";
import Terms from "./TermsServices";

export const metadata: Metadata = {
  title: "Terms of Service | Toolify",
  description:
    "Read Toolify's Terms of Service to understand the rules, conditions, user responsibilities, and legal agreements governing the use of our platform and services.",
};


export default function Page(){

return(
<div>
<Terms />
</div>
)
}