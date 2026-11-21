"use client";

import { useLayout } from "@/context/LayoutContext";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import ScrollToTop from "../Scroll/ScrollToTop";


export default function ClientLayout({ children }: {children: React.ReactNode}) {

const { hideLayout } = useLayout();

return(
<>
<ScrollToTop />
{!hideLayout && <Header />}
<main>{children}</main>
{!hideLayout && <Footer />}
</>
)
}
