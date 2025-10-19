import React from 'react';

function ContactContent() {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] md:min-h-[calc(100vh-5.5rem)] flex items-center justify-center ">
      <div className="text-white flex flex-col gap-14  max-h-full max-sm:gap-6">
        <div className="text-7xl tracking-tight uppercase font-medium max-sm:text-5xl  pt-[30vh]">Lets Connect.</div>
        <div className="form-container">
          <form action="" className="flex flex-col tracking-tight uppercase font-medium gap-2 w-full">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent border-0 border-b-[0.5px] border-white text-white placeholder-white focus:outline-none focus:ring-0"
            />
            <label htmlFor="phone">Phone*</label>
            <input
              type="text"
              id="phone"
              className="bg-transparent border-0 border-b-[0.5px] border-white text-white placeholder-white focus:outline-none focus:ring-0 "
            />
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              className="bg-transparent border-0 border-b-[0.5px] border-white text-white placeholder-white focus:outline-none focus:ring-0"
            />
            <label htmlFor="message">Message*</label>
            <input
              type="text"
              id="message"
              className="bg-transparent border-0 border-b-[0.5px] border-white text-white placeholder-white focus:outline-none focus:ring-0"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;