"use client"
import React from "react";
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFax, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from "@formspree/react";


const Communication = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between bg-white px-6 py-8 md:px-12 lg:px-24 xl:px-48 2xl:px-64 mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0 px-8 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Bize Ulaşın</h2>
        <div className="relative w-full h-96 mb-10 ">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map
              style={{ width: "100%", height: "100%", borderRadius: "1rem", boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
              defaultCenter={{ lat: 41.0605, lng: 28.9871 }}
              defaultZoom={16}
              gestureHandling={"auto"}
              disableDefaultUI={true}
            />
          </APIProvider>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className=" p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg"><FontAwesomeIcon icon={faEnvelope} className="mr-4" />Email</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
            <div className=" p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">
              <FontAwesomeIcon icon={faPhone} className="mr-4" />
                Telefon
                </h3>
              <p className="text-gray-600">+90 123 456 7890</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
         
            <div className=" p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">
              <FontAwesomeIcon icon={faLocationDot} className="mr-4" />
                Adres
                </h3>
              <p className="text-gray-600">1234 Örnek Cad. No: 56</p>
            </div>
            <div className=" p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">
              <FontAwesomeIcon icon={faFax} className="mr-4" />Fax</h3>
              <p className="text-gray-600">+90 123 456 7891</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:pl-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Bize Mesaj Gönderin
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="name">
              Adınız
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
              placeholder="Adınızı girin"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="email">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
              placeholder="E-posta adresinizi girin"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="message">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
              placeholder="Mesajınızı buraya yazın"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            className="w-1/6 text-color6 font-normal py-2 border border-color6 rounded-sm transition duration-300"
            disabled={state.submitting}
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Communication;
