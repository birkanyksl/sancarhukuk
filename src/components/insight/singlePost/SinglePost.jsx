import InsightCard from '@/components/home/InsightCard';
import Image from 'next/image';

export default function SinglePost() {
  return (
    <div>
      {/* Başlık */}
      <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center">
        <div className="text-color1 p-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-color6">
            BOŞANMA DAVALARINDA GELİŞMELER
          </h1>
          <div className="flex items-center justify-center">
            <span className="text-xs font-light mt-6">
              <span className="text-color1">By </span>
              <span className="text-color6">Erkan Yüksel</span>
            </span>
          </div>
          <span className="text-xs font-light text-color7 mt-2">
            15.07.2024
          </span>
        </div>
      </div>

      <div className="mx-auto mt-6 flex flex-col md:flex-row gap-8 px-6 pb-8 md:px-8 lg:px-16">
        {/* Ana içerik bölümü */}
        <div className="md:w-4/5 flex flex-col gap-6">
          {/* Görsel */}
          <div className="flex justify-start w-full">
            <Image
              src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Post görseli"
              width={2000}
              height={3000}
              className="w-full h-72 object-cover"
            />
          </div>

          {/* Makale */}
          <div className="md:border-l border-color6 md:pl-8 flex flex-col">
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, quam in varius dictum, orci dui placerat justo, sed pulvinar libero purus nec libero. Integer vulputate aliquet facilisis. Aenean posuere nisi sit amet justo sodales, non scelerisque risus facilisis.
            </p>
            <p className="text-base text-gray-700 mt-4">
              Ut euismod, augue in venenatis fermentum, felis justo tempor enim, eget dignissim lorem erat vitae felis. Integer nec lorem ac justo feugiat gravida. Praesent sit amet consequat magna.
            </p>
            <p className="text-base text-gray-700 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laboriosam soluta pariatur ut numquam nesciunt, molestias voluptatem sit quisquam? Adipisci similique aspernatur dolorem autem commodi veritatis sit vitae nobis nemo.
            </p>
            <p className="text-base text-gray-700 mt-4">
              Ut euismod, augue in venenatis fermentum, felis justo tempor enim, eget dignissim lorem erat vitae felis. Integer nec lorem ac justo feugiat gravida. Praesent sit amet consequat magna.
            </p>
            <p className="text-base text-gray-700 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laboriosam soluta pariatur ut numquam nesciunt, molestias voluptatem sit quisquam? Adipisci similique aspernatur dolorem autem commodi veritatis sit vitae nobis nemo.
            </p>
            <p className="text-base text-gray-700 mt-4">
              Ut euismod, augue in venenatis fermentum, felis justo tempor enim, eget dignissim lorem erat vitae felis. Integer nec lorem ac justo feugiat gravida. Praesent sit amet consequat magna.
            </p>
            <p className="text-base text-gray-700 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laboriosam soluta pariatur ut numquam nesciunt, molestias voluptatem sit quisquam? Adipisci similique aspernatur dolorem autem commodi veritatis sit vitae nobis nemo.
            </p>
            
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/5 flex flex-col gap-8 overflow-y-auto scroll-smooth insight-scroll px-1 h-[700px]">
          <div className="flex justify-between items-center">
            <h3 className="text-sm md:text-md font-semibold">
              Latest Insights
            </h3>
            <span className="text-xs font-light text-gray-900">View all</span>
          </div>
          <div className="flex flex-wrap justify-between">
            <InsightCard />
            <InsightCard />
            <InsightCard />
            <InsightCard />
          </div>
        </div>
      </div>
    </div>
  );
}
