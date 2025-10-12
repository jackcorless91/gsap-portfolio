import React from 'react';
import ContactContent from "@/components/ContactContent.jsx";

function Contact() {
  return (
    <main>
      <div className="min-h-screen">
        <h1 className="page-title">
        Contact <sup>(03)</sup>
        </h1>
      </div>

      <ContactContent />
    </main>
  );
}

export default Contact;