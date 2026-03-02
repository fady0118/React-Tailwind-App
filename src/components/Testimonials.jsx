import { testimonials } from "../data/data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20 px-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* left side header */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">What developers are saying about us</h2>
            <p className="text-gray-400 text-md sm:text-lg max-w-2xl mx-auto">Everything you need to build, test, and deploy applications with AI-powered development tools.</p>
          </div>
          {/* Right side - testimonials */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div key={key} className="bg-slate-900/50 p-4 sm:p-6 border border-slate-800 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="shrink-0">
                      <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold
                        bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                      >
                        "
                      </div>
                    </div>

                    <div className="grow">
                      <p className="text-white text-sm md:text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}</p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:h-12 sm:w-12 rounded-full object-cover object-center" />
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
