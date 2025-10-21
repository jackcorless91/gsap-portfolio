import React, { useState } from 'react';
import {isSession} from "react-router";

function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "955c01d5-d847-43d5-a313-f6c4526a6287");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setTimeout(() => setResult(""), 3000);
      } else {
        setResult("Error");
        setTimeout(() => setResult(""), 3000);
      }
    };

    return (
    <div className="text-white">
      <form onSubmit={ onSubmit }>
        <h2 className="text-7xl uppercase tracking-tight font-medium text-center mb-8 max-sm:text-5xl max-sm:mb-4">Let's Connect.</h2>

        <div className="flex flex-col space-y-6 max-sm:space-y-3">
          <div className="">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-10 bg-transparent border-0 border-b-[0.5px] border-white text-white focus:outline-none focus:ring-0"
              placeholder="Enter your name*"
              required
            />
          </div>

          <div className="">
            <label htmlFor="number">Number*</label>
            <input
              type="text"
              id="number"
              name="number"
              className="w-full h-10 bg-transparent border-0 border-b-[0.5px] border-white text-white focus:outline-none focus:ring-0"
              placeholder="Enter your phone number*"
            />
          </div>

          <div className="">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full h-10 bg-transparent border-0 border-b-[0.5px] border-white text-white focus:outline-none focus:ring-0"
              placeholder="Enter your email*"
              required
            />
          </div>

          <div className="">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              className="w-full h-20 bg-transparent border-0 border-b-[0.5px] border-white text-white focus:outline-none focus:ring-0"
              placeholder="Enter your message*"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="group relative mt-6 uppercase font-medium tracking-tight text-white cursor-pointer"
          >
            <span>{ result || "Connect"}</span>
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;