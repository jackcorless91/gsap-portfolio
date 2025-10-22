import React from 'react';
import ContactForm from "@/components/ContactForm.jsx";
import Footer from "@/components/Footer.jsx";

function ContactContent() {
  return (
    <div>
      <section className="min-h-[calc(100vh-4.5rem-5.75rem)] md:min-h-[calc(100vh-5.5rem-5.75rem)] flex items-center justify-center ">
        <ContactForm />
      </section>
      <Footer />
    </div>

  );
}

export default ContactContent;