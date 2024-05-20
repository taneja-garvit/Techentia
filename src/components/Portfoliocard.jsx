import React from "react";

function PortfolioCard({ src, title, desc }) {
  return (
    <div className="relative bg-red-600 w-full h-[50vh] overflow-hidden">
        <video className="w-full h-full object-cover" muted loop autoPlay preload="none">
          <source src={src} type="video/mp4" />
        </video>
      <p className="text-2xl text-black absolute bottom-8">{title}</p>
      <p className="text-lg text-black absolute bottom-0">{desc}</p>
    </div>
  );
}

export default PortfolioCard;
