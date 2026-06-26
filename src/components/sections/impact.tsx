export function Impact() {
  const stats = [
    { value: "500+", label: "Homes Powered", suffix: "Hyderabad" },
    { value: "2 MW+", label: "Installed Capacity", suffix: "Clean Energy" },
    { value: "98%", label: "Customer Satisfaction", suffix: "Rating" },
    { value: "15+", label: "Years Experience", suffix: "Solar Sector" }
  ];

  return (
    <section className="py-10 md:py-20 bg-[#F7F8FA] border-y border-[#E7E9EE]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 font-headline group-hover:text-secondary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-lg md:text-xl font-bold text-primary mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
