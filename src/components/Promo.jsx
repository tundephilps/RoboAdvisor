import React from "react";

import tax from "../assets/tax.png";

const Promo = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-20 bg-white ">
      <div className="items-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
              Easy Tax Transactions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
              Let your taxes pay you for a change.
            </h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed "
              data-aos="zoom-out"
            >
              Our software monitors your investments to automatically trade
              similar assets that lose value, which can help you lower your tax
              bill while still keeping your portfolio on track. When you offset
              your capital gains by claiming many small losses, you can put the
              savings right back to work in the market. No tractors or shovels
              required.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div
            className="flex flex-col justify-center space-y-4"
            data-aos="zoom-in-right"
          >
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Make collaboration seamless with built-in code review tools.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Automate your workflow with continuous integration.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Scale</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Deploy to the cloud with a single click and scale with ease.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div data-aos="zoom-in-left">
            <img
              alt="Image"
              //   className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="100%"
              src={tax}
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
