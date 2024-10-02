import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faImages } from '@fortawesome/free-solid-svg-icons';

export default function Write() {
  return (
    <div className="pt-12 mx-auto max-w-4xl">
     
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Yazı Görseli"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
     
      <form className="mt-6">
        <div className="flex items-center mb-4">
          <label htmlFor="fileInput" className="cursor-pointer flex items-center">
            <FontAwesomeIcon 
              icon={faImages} 
              className="text-gray-700 mr-2 w-6 h-6" 
              
            />
           
          </label>
          <input id="fileInput" type="file" className="hidden" />
          <input
            className="writeInput text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 flex-1 ml-2" // Giriş alanına biraz sol marj ekleyin
            placeholder="Başlık"
            type="text"
            autoFocus={true}
          />
        </div>
        
        <div className="mb-4">
          <textarea
            className="writeInput w-full h-[50vh] p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-lg"
            placeholder="Hikayenizi anlatın..."
          />
        </div>
        
        <button className="bg-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-600 transition">
          Yayınla
        </button>
      </form>
    </div>
  );
}
