import AboutPage from "@/components/about/AboutPage";
import AboutPageTeam from "@/components/about/AboutPageTeam";
import BreadCrumb from "@/components/BreadCrumb";

const Page = () => {
  return (
    
    <>
    <div className="relative w-full h-48 bg-slate-50">
      

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-color1 p-4  text-center">
          <h1 className="text-4xl font-normal"><span className='text-color6'>About</span> <span className='text-color1'>Us</span></h1>
          <p className="mt-4 text-sm text-gray-600">
            Şirketimiz, kapsamlı hukuki danışmanlık ve dava hizmetleri sunarak müvekkillerine güvenilir çözümler sağlar.
          </p>
        </div>
      </div>

      
    </div>
    <BreadCrumb/>
     <AboutPage/>
     <AboutPageTeam/>
</>
  );
};

export default Page;
