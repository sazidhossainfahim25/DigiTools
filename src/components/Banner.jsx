import BannerImage from "../assets/banner.png";
import PlayIcon from "../assets/play.png";
import Active from "../assets/active.png";

const Banner = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 py-24">
        <div className="md:w-1/2">
          <span className="inline-flex items-center gap-1 text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            <img src={Active} alt="Active" className="w-4 h-4" />
            New AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-gray-500 mt-4">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 hover:scale-105 transition duration-300">
              Explore Products
            </button>

            <button className="btn rounded-full border border-[#9514FA] text-[#9514FA] px-6 hover:scale-105 transition duration-300">
              <img src={PlayIcon} alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={BannerImage} alt="banner" className="w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
