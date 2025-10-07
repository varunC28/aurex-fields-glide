import * as React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/7987642268" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
};

export default WhatsappButton;
