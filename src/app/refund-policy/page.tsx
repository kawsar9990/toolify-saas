import type { Metadata } from "next";
import RefundPolicy from "./RefundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy | Toolify",
  description:
    "Review Toolify's Refund Policy to understand eligibility requirements, refund procedures, processing timelines, and conditions for cancellations and reimbursements.",
};


export default function Page(){

return(
<div>
<RefundPolicy />
</div>
)
}