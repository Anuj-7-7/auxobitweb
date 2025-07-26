// app/components/CredibilitySection.js
export default function CredibilitySection() {
  const stats = [
    { value: 25, label: "Innovation" },
    { value: 25, label: "Trust" },
    { value: 25, label: "Improving Lives" },
  ];

  return (
    <section className="w-full bg-white h-[150px]">
      <div className="max-w-[1200px] mx-auto h-full grid grid-cols-3 items-center">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`
              flex items-center justify-center
              ${idx < stats.length - 1 ? "border-r border-gray-300" : ""}
            `}
          >
            <div className="flex items-center space-x-6">
              {/* Big number */}
              <span className="text-blue-500 text-[64px] font-extrabold leading-none">
                {stat.value}
              </span>
              {/* Text block */}
              <div className="text-gray-800 ed">
                <p>Years of {stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paragraph sits just below the 300px grid */}
      <div className="max-w-[800px] mx-auto mt-8 text-center text-gray-700 text-base leading-relaxed">
        There’s a reason we’ve outlived most drone companies over the past{" "}
        <span className="font-semibold">25 years</span> — sustainability
        requires innovation. The technology we’ve used to develop a{" "}
        <span className="font-semibold">
          world-changing fleet of drone technology
        </span>{" "}
        has applications beyond UAVs, and we’re using it to create solutions
        that improve how people live.
      </div>
    </section>
  );
}
