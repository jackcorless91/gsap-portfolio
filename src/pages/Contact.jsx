import React from 'react';
import ContactContent from "@/components/ContactContent.jsx";
import {ArrowDown} from "lucide-react";

function Contact() {
  return (
    <main>
      <div className="min-h-screen hero">
        <h1 className="page-title">
        Contact <sup>(03)</sup>
        </h1>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-100/80 max-sm:text-sm"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-gray-100/80" />
      </div>

      <ContactContent />
    </main>
  );
}

export default Contact;