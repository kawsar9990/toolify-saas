import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About Us | Toolify",
  description:
    "Learn more about Toolify, our mission, vision, and commitment to providing powerful, user-friendly online tools that help individuals and businesses work more efficiently.",
};


export default function Page(){

return(
<div>
<About />
</div>
)
}