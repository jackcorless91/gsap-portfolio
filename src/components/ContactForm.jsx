import React from 'react';

function ContactForm() {
  return (
    <div className="text-white">
      <form>
        <h2 className="text-7xl uppercase tracking-tight font-medium text-center mb-8">Let's Connect.</h2>

        <div className="flex flex-col space-y-6">
          <div className="">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              className="w-full h-10 bg-transparent border-0 border-b-[0.5px] border-white text-white focus:outline-none focus:ring-0"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="">
            <label htmlFor="number">Number*</label>
            <input
              type="text"
              id="number"
              className="w-full h-10 bg-transparent border-0 border-b-[0.5px] border-white text-white focus:outline-none focus:ring-0"
              placeholder="Phone Number"
            />
          </div>

          <div className="">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              className="w-full h-10 bg-transparent border-0 border-b-[0.5px] border-white text-white focus:outline-none focus:ring-0"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              className="w-full h-20 bg-transparent border-0 border-b-[0.5px] border-white text-white focus:outline-none focus:ring-0"
              placeholder="Enter your message"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center text-2xl">
          <button
            type="submit"
            className="group relative mt-6 uppercase font-medium tracking-tight text-white cursor-pointer"
          >
            <span>Connect</span>
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;