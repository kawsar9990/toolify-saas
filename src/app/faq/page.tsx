import type { Metadata } from "next";
import FAQ from "./Faq"

export const metadata: Metadata = {
title: "Frequently Asked Questions (FAQ) | Toolify", 
description:
    "Find quick answers about Toolify, our online tools, privacy, account usage, and support.",  
}


export default function Page(){

return(
<div>
<FAQ />
</div>
)
}