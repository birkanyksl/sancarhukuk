"use client"
import React, { useEffect, useState } from "react";
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {  faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useTranslations } from "next-intl";


const Communication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });
  const t = useTranslations("contactPage");
   
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await axios.post("/api/send-email", formData);
      if (response.status === 200) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" })
        
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message });
    }
  };
   

  useEffect(() => {
    if (status.success || status.error) {
      const timer = setTimeout(() => {
        setStatus({ ...status, success: false, error: null });
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [status.success, status.error]);


  return (
    <div className="flex flex-col lg:flex-row items-start justify-between bg-white px-6 py-8 md:px-12 lg:px-24 xl:px-48 2xl:px-64 mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0 px-8 ">
      <h2 className="text-3xl font-semibold lg:text-4xl text-color1 mb-10">{t("contactUs")} </h2>
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
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />{t("email")}</h3>
              <p className="text-sm md:text-base  text-gray-800">info@example.com</p>
            </div>
            <div className=" p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">
              <FontAwesomeIcon icon={faPhone} className="mr-4" />
                {t("phone")}
                </h3>
                <p className="text-sm md:text-base  text-gray-800">+90 123 456 7890</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
         
            <div className="flex flex-col p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">
              <FontAwesomeIcon icon={faLocationDot} className="mr-4" />
              {t("address")}
                </h3>
              <p className="text-sm md:text-base  text-gray-800">1234 Örnek Cad. No: 56</p>
            </div>
            <div className=" p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-4" />LinkedIn</h3>
              <p className="text-sm md:text-base  text-gray-800">xxxx xxxx xxxxxxx</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:pl-10">
      <h2 className="text-3xl font-semibold lg:text-4xl text-color1 mb-10">
          {t("sendUsMessage")}
        </h2>
        <form onSubmit={handleSubmit} className="bg-slate-50 p-8">
          <div className="mb-4">
            <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="name">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
              placeholder={t("namePlaceholder")}
            />
            
          </div>
          <div className="mb-4">
            <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="email">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
              placeholder={t("emailPlaceholder")}
            />
           
          </div>
          <div className="mb-4">
            <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="subject">
              {t("subject")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
              placeholder={t("subjectPlaceholder")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-normal text-gray-700 mb-2" htmlFor="message">
             {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-color6 transition duration-200"
              placeholder={t("messagePlaceholder")}
            ></textarea>
         
          </div>
          <button
            type="submit"
            className="w-32 text-color6 font-normal py-2 border border-color6 rounded-sm transition-all duration-300 hover:font-semibold "
            disabled={status.submitting}
          >
            {t("send")}
          </button>
          {status.success && <p className="text-green-600 mt-4">{t("messageSent")}</p>}
          {status.error && <p className="text-red-600 mt-4">{t("errorOccured")}</p>}
        </form>
      </div>
    </div>
  );
};

export default Communication;
