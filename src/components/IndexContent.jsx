import React from 'react';
import Footer from "@/components/Footer.jsx";

function IndexContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 text-white grid grid-rows-[30%_40%_30%]">
        <div>top</div>
        <div>content</div>
        <div>bottom</div>
      </section>
      <Footer />
    </div>
  );
}

export default IndexContent;