import React from 'react';

function ContactContent() {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] md:min-h-[calc(100vh-5.5rem)] flex items-center justify-center">
      <div className="text-white">
        <div className="text-7xl tracking-tight uppercase font-medium">Lets Connect.</div>
        <div className="form-container">
          <form action="">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" />
            <label htmlFor="phone"></label>
            <input type="text" id="phone" />
            <label htmlFor="email"></label>
            <input type="text" id="email" />
            <label htmlFor="message"></label>
            <input type="text" id="message" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;