export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#962DE8]/10 to-[#3533CD]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-[#E5E5E5]/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how NEVO can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "mailto:contact@nevorix.com?subject=Start New Project&body=Hi NEVORIX team, I would like to start a new project. Please contact me to discuss the details.",
                    "_blank",
                  )
                }
                className="bg-gradient-to-r from-[#962DE8] to-[#3533CD] hover:from-[#962DE8]/90 hover:to-[#3533CD]/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </button>
              <button
                onClick={() => window.open("https://calendly.com/nevorix/consultation", "_blank")}
                className="border-2 border-[#962DE8] text-[#962DE8] hover:bg-[#962DE8] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
  )
}
