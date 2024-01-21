import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6 w-full overflow-hidden bg-[#f2f2f7] p-8 rounded-sm">
      <div
        className="flex cursor-pointer items-start justify-between"
        onClick={toggleAccordion}
      >
        <p className="text-xl font-bold">{title}</p>
        <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {isOpen && (
        <div className="w-full overflow-hidden mb-4 max-w-[640px] lg:max-w-[960px] pt-8">
          <p className="max-[479px]:text-sm">{content}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section>
      <div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div class="flex flex-col items-start lg:flex-row lg:space-x-20">
          <div class="flex-[1_1_500px] max-[991px]:w-full max-[991px]:flex-none">
            <div class="max-w-3xl mb-8 md:mb-12 lg:mb-16">
              <h2 class="font-bold text-3xl md:text-5xl">General FAQs</h2>
              <div class="mt-4 max-w-[528px]">
                <p class="text-[#636262] max-[479px]:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam,purus sit amet luctus magna fringilla urna
                </p>
              </div>
            </div>
            <div class="mb-6 h-full w-full overflow-auto bg-[#f2f2f7] p-8 rounded-sm">
              <div class="flex flex-row gap-4">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64772e4ec124557640300fd8_Column.png"
                  alt=""
                  class="inline-block h-12 w-12 object-cover rounded-full"
                />
                <div class="flex flex-col gap-1.5">
                  <h5 class="text-xl font-bold">Still have questions?</h5>
                  <div class="max-w-[380px]">
                    <p class="text-[#636262] max-[479px]:text-sm">
                      Can’t find the answer you’re looking for? Please chat to
                      lorem
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-6 mt-8 h-[0.5px] w-full bg-[#a6a6a6]"></div>
              <button class="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Get In Touch
              </button>
            </div>
          </div>
          <div
            class="flex-[1_1_500px] max-[991px]:w-full max-[991px]:flex-none"
            data-aos="flip-up"
          >
            <AccordionItem
              title="How is this different than investing in the S&P 500?"
              content="Investing in the S&P means only investing in US equities. Fortunately for us, the world is bigger than that. We use 10 global asset classes to diversify your investment and better weather anything the market throws at you."
            />

            <AccordionItem
              title="What is your policy on distribution?"
              content="Yup. You can customize your Wealthfront portfolio six ways to Sunday, both when you’re first opening a new account or at any point afterwards."
            />
            <AccordionItem
              title="How long will the plan last?"
              content="What we do is complicated. What you do is really really not. Just answer a few questions, and we’ll build an investment portfolio with your name on it. Then, as soon as your money arrives, we invest it just like we said we would. Bada bing, etc."
            />
            <AccordionItem
              title="When are you going to hire me?"
              content="That’s not a question, but actually yes. The weighted average annual expense ratio of the investments of a taxable Wealthfront portfolio is between 0.05–0.29%. Wealthfront also charges a 0.25% annual advisory fee, but for more than 96% of our clients with a recommended portfolio, that’s covered by Tax-Loss Harvesting."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
