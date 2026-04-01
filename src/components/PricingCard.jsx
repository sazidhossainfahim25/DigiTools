import { FaCheck } from "react-icons/fa";

const PricingCard = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2 mb-10 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="bg-white rounded-xl  p-6 shadow-sm hover:scale-105 transition duration-300 text-start">
            <h3 className="font-semibold text-lg ">Starter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Perfect for getting started
            </p>

            <h1 className="text-3xl font-bold">
              $0 <span className="text-sm opacity-80">/Month</span>
            </h1>

            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-green-500 text-xs" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full py-2 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="relative rounded-xl p-6 text-white bg-linear-to-br from-purple-600 to-indigo-600  shadow-sm hover:scale-105 transition duration-300 text-star">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
              Most Popular
            </span>
            <div className="text-start">
              <h3 className="font-semibold text-lg ">Pro</h3>
              <p className="text-sm opacity-80 mb-4 ">Best for professionals</p>

              <h1 className="text-3xl font-bold">
                $29 <span className="text-sm opacity-80">/Month</span>
              </h1>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-white text-xs" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full py-2 rounded-full bg-white text-purple-600">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:scale-105 transition duration-300">
            <div className="text-start">
              <h3 className="font-semibold text-lg">Enterprise</h3>
              <p className="text-sm text-gray-400 mb-4">
                For teams and businesses
              </p>

              <h1 className="text-3xl font-bold">
                $99 <span className="text-sm opacity-90">/Month</span>
              </h1>
            </div>

            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-green-500 text-xs" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full py-2 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
