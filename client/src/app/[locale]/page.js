import Brands from "@/components/home/Brands";
import ClientInsights from "@/components/home/ClientInsights";
import Faq from "@/components/home/FAQ";

import ParallaxCarousel from "@/components/home/ParallaxCarousel";
import Practices from "@/components/home/Practices";




export default function Home() {
  
  return (<>
      <div className="w-full scroll-smooth">
      <ParallaxCarousel/>
      </div>
      <div className="px-6 md:px-8 lg:px-16 scroll-smooth">
        <Practices/>
        <ClientInsights/>
        <Faq/>
        <Brands/>    
      </div>
       </>
  )
}
