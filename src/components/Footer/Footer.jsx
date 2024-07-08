import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="font-bold mb-2">MyStore</h3>
          <p>&copy; 2024 MyStore. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
