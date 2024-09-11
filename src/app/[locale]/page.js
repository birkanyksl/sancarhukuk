import ParallaxCarousel from "@/components/home/ParallaxCarousel";
import Practices from "@/components/home/Practices";




export default function Home() {
  
  return (<>
      <div className="w-full">
      <ParallaxCarousel/>
      </div>
      <div className="px-6 md:px-8 lg:px-16">
        <Practices/>
      </div>
       </>
  )
}
