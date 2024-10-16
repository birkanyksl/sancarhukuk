import React from 'react'

const Communication = () => {
    return (
          <>
          <div className="relative w-full h-48 bg-slate-50">
              <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-color1 p-4  text-center">
          <h1 className="text-4xl font-normal"><span className='text-color6'>İletişim</span></h1>
          <p className="mt-4 text-sm text-gray-600">
            Şirketimiz, kapsamlı hukuki danışmanlık ve dava hizmetleri sunarak müvekkillerine güvenilir çözümler sağlar.
          </p>
        </div>
      </div>
      </div>

        <div className="flex flex-col lg:flex-row items-start justify-between bg-white px-6 py-8 md:px-12 lg:px-24 xl:px-48 2xl:px-64">
          
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Bize Ulaşın</h2>
                <div className="aspect-w-16 aspect-h-9 mb-10">
                    <iframe
                        className="w-full h-96 rounded-xl shadow-xl border border-color1"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092276!2d144.95373541531566!3d-37.8172099797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1e6d37%3A0xa20e1a61c67e55ed!2sVictoria!5e0!3m2!1str!2str!4v1634830339551!5m2!1str!2str"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        ></iframe>
                </div>
               
                <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                       
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-gray-600">info@example.com</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">Telefon</h3>
                            <p className="text-gray-600">+90 123 456 7890</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* İkinci Satır */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">Adres</h3>
                            <p className="text-gray-600">1234 Örnek Cad. No: 56</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">Fax</h3>
                            <p className="text-gray-600">+90 123 456 7891</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="lg:w-1/2 w-full lg:pl-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Bize Mesaj Gönderin</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="name">Adınız</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
                            placeholder="Adınızı girin"
                            />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="email">E-posta</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
                            placeholder="E-posta adresinizi girin"
                            />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="message">Mesajınız</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="4"
                            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
                            placeholder="Mesajınızı buraya yazın"
                            ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-1/6 text-color6 font-normal py-2 border border-color6 rounded-sm transition duration-300"
                        >
                        Gönder
                    </button>
                </form>
            </div>
        </div>
                        </>
    );
}

export default Communication