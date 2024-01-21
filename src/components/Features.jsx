import React from "react";
import {
  FaChartBar,
  FaRegLightbulb,
  FaWallet,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="bg-[#080312] text-white">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-20 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl" data-aos="fade-right">
            What makes us special
          </h2>
          <p className="mt-4 text-gray-300" data-aos="fade-right">
            Discover the unique features that set us apart and make us your
            ideal partner in achieving financial success.
          </p>
        </div>

        <div
          className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
          data-aos="flip-up"
        >
          {[
            {
              icon: <FaChartBar />,
              title: "Smart Investments",
              description:
                "Explore intelligent investment strategies tailored to your financial goals. Our experts leverage market insights to guide you in making informed investment decisions.",
            },
            {
              icon: <FaRegLightbulb />,
              title: "Expert Advice",
              description:
                "Benefit from the wisdom of seasoned financial advisors. Receive personalized advice on wealth management, retirement planning, and more.",
            },
            {
              icon: <FaWallet />,
              title: "Financial Growth",
              description:
                "Witness your wealth flourish with our comprehensive financial growth solutions. We help you build and protect your assets for a prosperous future.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Security Measures",
              description:
                "Rest easy knowing your financial security is our top priority. We employ robust security measures to safeguard your assets and sensitive information.",
            },
            {
              icon: <FaHandsHelping />,
              title: "Personalized Support",
              description:
                "Experience dedicated support on your financial journey. Our team is committed to providing personalized assistance, ensuring your unique needs are met.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                {feature.icon}
              </span>
              <div>
                <h2 className="text-lg font-bold">{feature.title}</h2>
                <p className="mt-1 text-sm text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
