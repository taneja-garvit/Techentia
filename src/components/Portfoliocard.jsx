import React from "react";

function PortfolioCard({ src, title, desc }) {
  return (
    <div className="relative  w-full h-[40vh] overflow-hidden">
        <video className="w-full h-[70%] object-cover" muted loop autoPlay onMouseOver={() => this.play()}
          onMouseOut={() => this.pause()} preload="none">
          <source src={src} type="video/mp4" />
        </video>
      <p className="text-3xl text-black font-semibold absolute bottom-8">{title}</p>
      <p className="text-lg text-black absolute bottom-0">{desc}</p>
    </div>
  );
}

export default PortfolioCard;
