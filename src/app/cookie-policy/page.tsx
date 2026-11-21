import type { Metadata } from "next";
import CookiePolicyPage from "./CokkiePolicy";


export const metadata: Metadata = {
title: "Cookie Policy | Toolify",
description:
    "Learn how Toolify uses cookies and similar technologies to enhance user experience, improve performance, analyze traffic, and provide personalized services.",
};


export default function Page(){

return(
<div>
<CookiePolicyPage />
</div>
)
}