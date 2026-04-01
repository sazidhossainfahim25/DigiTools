
import { User, Package, Rocket } from "lucide-react";

const Steps = () => {
  const data = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: <User size={28} />,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: <Package size={28} />,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: <Rocket size={28} />,
    },
  ];

  return (
    <section className="py-30 px-5 md:px-50 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-gray-800">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382] text-[16px] mb-6">Start using premium digital tools in minutes, not hours.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 relative hover:scale-105 transition duration-300"
            >
              <span className="absolute top-4 right-4 text-xs bg-purple-600 text-white px-3 py-2 rounded-full">
                {item.id}
              </span>
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-2xl">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;
