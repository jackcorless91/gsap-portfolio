import React from 'react';

function Footer() {
  return (
    <footer className="w-full h-23 grid grid-cols-[minmax(187.3px,21%)_minmax(187.3px,19.5%)_minmax(187.3px,48.5%)_minmax(187.3px,9%)] max-sm:grid-cols-[auto_auto_1fr]">
      <div className="max-sm:w-8"></div>
      <div className="flex flex-col min-w-[187.3px]">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-a m-[3px] group relative w-max cursor-pointer"
        >
          <span> LinkedIn &#8599;</span>
          <span className="absolute -bottom-0.25 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-a  m-[3px] group relative w-max cursor-pointer"
        >
          <span>GitHub &#8599;</span>
          <span className="absolute -bottom-0.25 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-a foot m-[3px] group relative w-max cursor-pointer"
        >
          <span>Resume &#8599;</span>
          <span className="absolute -bottom-0.25 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </a>
      </div>
      <div className="min-w-[187.3px]">
        <div className="menu-info-col gap-[1px] mt-5">
          <p className="menu-p">jackdcorless@proton.me</p>
          <p className="menu-p">+61 437 128 864</p>
        </div>
      </div>
      <div className="flex items-start mt-9 min-w-[187.3px] max-sm:hidden">
        <div className="menu-p text-nowrap flex items-start mt-9">Melbourne 00:00:00</div>
      </div>
    </footer>
  );
}

export default Footer;