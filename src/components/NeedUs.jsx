import React from "react";
import family from "../assets/family.jpg";

const NeedUs = () => {
  return (
    <section class="overflow-hidden bg-[#080312] sm:grid sm:grid-cols-2 ">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="">
          <h2
            class="text-2xl font-bold text-gray-100 md:text-3xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Transforming Your Financial Future, where your family finances will
            be at ease.
          </h2>

          <p
            class="hidden text-gray-500 md:mt-4 md:block"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            RoboAdvisor is dedicated to reshaping your financial landscape. Our
            comprehensive approach combines cutting-edge strategies with a deep
            understanding of your unique needs. Let us guide you towards a
            future of financial prosperity and security.
          </p>

          <div class="mt-4 md:mt-8">
            <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <img
        alt="Student"
        src={family}
        class="h-56 w-full object-contain sm:h-full"
        data-aos="zoom-in"
      />
    </section>
  );
};

export default NeedUs;
