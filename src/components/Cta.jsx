const CTA = () => {
  return (
    <section className="py-30 px-5 md:px-50 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className=" max-w-7xl mx-auto  text-white text-center rounded-2xl py-10 px-">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 font-manrope">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm md:text-base text-white/80 mb-6">
          Join thousands of professionals who are already using DigiTools to
          work smarter.
          <br /> Start your free trial today!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-3">
          <button className="btn rounded-full bg-white text-[#4F39F6] px-6 hover:scale-105 transition duration-300">
            Explore Products
          </button>

          <button className=" py-2 rounded-full border border-white px-6 hover:bg-white hover:text-[#9514FA] transition duration-300">
            View Pricing
          </button>
        </div>

        <p className="text-xs text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
