import React from 'react';
import ContactForm from "@/components/ContactForm.jsx";
import Footer from "@/components/Footer.jsx";

function ContactContent() {
  return (
    <div>
      <section className="min-h-[calc(100vh-4.5rem)] md:min-h-[calc(100vh-5.5rem)] flex items-center justify-center ">
        <ContactForm />
      </section>
      <Footer />
    </div>

  );
}

export default ContactContent;