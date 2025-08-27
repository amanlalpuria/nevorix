export function About() {
  return (
    <section id="about" className="py-24 bg-[#2E2E2E]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-8">
            About <span className="text-[#962DE8]">NEVORIX</span>
          </h2>
          <p className="text-xl text-[#E5E5E5]/80 leading-relaxed mb-8">
            We are a forward-thinking technology startup dedicated to revolutionizing how businesses operate in the
            digital age. Our team of expert developers, designers, and strategists work together to create
            innovative solutions that drive growth and success.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#962DE8] mb-2">Innovation</div>
              <p className="text-[#E5E5E5]/70">Cutting-edge solutions for modern challenges</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3533CD] mb-2">Excellence</div>
              <p className="text-[#E5E5E5]/70">Uncompromising quality in every project</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFDE59] mb-2">Partnership</div>
              <p className="text-[#E5E5E5]/70">Collaborative approach to your success</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-[#E5E5E5] text-center mb-12">
            Meet Our <span className="text-[#962DE8]">Leadership</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#3A3A3A] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition">
              <img
                src="patil.png"
                alt="Yash Patil"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-6 border-2 border-[#962DE8]"
              />
              <h4 className="text-xl font-semibold text-[#E5E5E5]">Yash Patil</h4>
              <p className="text-[#962DE8] font-medium">Business Lead</p>
              <p className="mt-3 text-[#E5E5E5]/70">
                Driving strategic growth, partnerships, and client success at NEVORIX.
              </p>
            </div>

            <div className="bg-[#3A3A3A] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition">
              <img
                src="gandhi.png"
                alt="Yash Gandhi"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-6 border-2 border-[#3533CD]"
              />
              <h4 className="text-xl font-semibold text-[#E5E5E5]">Yash Gandhi</h4>
              <p className="text-[#3533CD] font-medium">Chief Technology Officer</p>
              <p className="mt-3 text-[#E5E5E5]/70">
                Leading innovation, architecture, and engineering excellence across all products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
