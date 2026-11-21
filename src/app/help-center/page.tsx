import type { Metadata } from "next";
import HelpCenter from "./HelpCenter";

export const metadata: Metadata = {
  title: "Help Center | Toolify",
  description:
    "Visit the Toolify Help Center to find answers to common questions, troubleshooting guides, account support, and helpful resources for using our tools and services.",
};


export default function Page(){

return(
<div>
<HelpCenter />
</div>
)
}