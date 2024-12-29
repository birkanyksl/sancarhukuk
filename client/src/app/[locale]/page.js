import Brands from "@/components/home/Brands";
import Faq from "@/components/home/FAQ";
import HomeInsights from "@/components/home/HomeInsights";
import ParallaxCarousel from "@/components/home/ParallaxCarousel";
import Practices from "@/components/home/Practices";


export const metadata = {
  title: "Yüksel Hukuk Bürosu",
  description: "İstanbul'da yer alan Yüksel Hukuk Bürosu, uzman kadrosu ile sizlere hukuk alanında destek sunmaktadır.",
};

export default function Home() {
  
  return (<>
      <div className="w-full">
      <ParallaxCarousel/>
      </div>
      <div className="px-6 md:px-8 lg:px-16">
        <Practices/>
        <HomeInsights/>
        <Faq/>
        {/* <Brands/>     */}
      </div>
       </>
  )
}
