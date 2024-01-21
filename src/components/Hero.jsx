import React from "react";
import stock from "../assets/stock.mp4";

const Hero = () => {
  return (
    <div>
      <div className="hero-section relative h-screen flex items-center justify-center overflow-hidden z-0">
        <video
          className="hero-background absolute w-full h-full object-cover -z-50"
          autoPlay
          loop
          muted
        >
          <source src={stock} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="content-container z-10 text-white text-center "
          data-aos="fade-up"
        >
          <div class="flex flex-col items-center gap-y-5">
            <h1 class="text-center text-4xl font-bold md:text-6xl">
              Make the Best Financial Choices
            </h1>
            <p class="text-center text-[#808080] max-w-lg text-sm sm:text-base">
              Welcome to Robo Advisor, your trusted partner in making informed
              financial decisions. Our expert advisors are committed to guiding
              you towards a secure and prosperous future.
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-12">
            <button>
              INVEST
              <div id="clip">
                <div id="leftTop" class="corner"></div>
                <div id="rightBottom" class="corner"></div>
                <div id="rightTop" class="corner"></div>
                <div id="leftBottom" class="corner"></div>
              </div>
              <span id="rightArrow" class="arrow"></span>
              <span id="leftArrow" class="arrow"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
