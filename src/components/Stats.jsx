const Stats = () => {
  return (
    <section className="py-15 px-5 md:px-50 bg-[#6C2CF5]">
      <div className=" text-white rounded-xl py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold font-manrope">50K+</h2>
            <p className="text-sm opacity-80 mt-2">Active Users</p>
          </div>

          <div className="md:border-x border-white/30">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="text-sm opacity-80 mt-2">Premium Tools</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">4.9</h2>
            <p className="text-sm opacity-80 mt-2">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
