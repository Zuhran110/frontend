const Price = () => {
  return (
    <section className="w-full px-8 md:px-16 xl:px-44 py-12 md:py-20 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white flex justify-center items-center">
      <div className="w-full md:w-2/3 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Our Pricing
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Choose a plan that fits your business size and needs. At Online
          Taxation, we offer clear pricing with no hidden fees — so you know
          exactly what you're paying for while staying fully HMRC compliant.
        </p>
      </div>
    </section>
  );
};

export default Price;
