import Breadcrumb from '@/components/BreadCrumb';
import Communication from '@/components/communication/Communication';
import React from 'react'

const CommunicationPage = () => {
    return (
          <>
          <div className="relative w-full h-48 bg-slate-50">
              <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-color1 p-4  text-center">
        <h1 className="text-4xl lg:text-5xl font-medium"><span className='text-color6'>İletişim</span></h1>
          <p className="mt-4 text-sm lg:text-base text-gray-600">
            Şirketimiz, kapsamlı hukuki danışmanlık ve dava hizmetleri sunarak müvekkillerine güvenilir çözümler sağlar.
          </p>
        </div>
      </div>
      </div>
      <Breadcrumb/>
        <Communication/>
                        </>
    );
}

export default CommunicationPage