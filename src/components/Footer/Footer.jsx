import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Footer = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language; // Get the current language

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="bg-gray-800 text-white p-6 mt-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-2">MyStore</h3>
          <p>&copy; 2024 MyStore.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="hover:text-gray-400 mb-2">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 mb-2">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <label htmlFor="language-select" className="mb-2">Language:</label>
          <select
            id="language-select"
            onChange={changeLanguage}
            value={currentLanguage} // Set the value to the current language
            className="py-2 px-3 border border-gray-300 bg-white text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
