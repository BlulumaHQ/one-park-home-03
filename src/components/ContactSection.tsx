import { useState } from 'react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <p className="text-label text-accent mb-4">Now Selling</p>
              <h2 className="heading-section text-foreground mb-6">
                Register Today
              </h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <p className="text-body mb-10">
                For more information on One Park's 1, 2, &amp; 3 bedroom homes,
                please register today.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-label text-foreground mb-2">Presentation Centre</h4>
                  <p className="text-body">Open Daily 12–5pm<br />Closed Fridays</p>
                  <a
                    href="https://maps.app.goo.gl/s3fRMDS1qH8cb7Bv7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-accent hover:underline mt-1 inline-block"
                  >
                    8071 Park Rd, Richmond, BC
                  </a>
                </div>
                <div>
                  <h4 className="text-label text-foreground mb-2">Contact</h4>
                  <a href="tel:604-821-8883" className="text-body block hover:text-accent transition-colors">
                    604-821-8883
                  </a>
                  <a href="tel:604-565-2836" className="text-body block hover:text-accent transition-colors">
                    604-565-2836
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-secondary p-8 md:p-10">
              {submitted ? (
                <div className="flex items-center justify-center h-full text-center">
                  <div>
                    <h3 className="heading-sub text-foreground mb-3">Thank You</h3>
                    <p className="text-body">We'll be in touch shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-label text-foreground block mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-border px-0 py-2 text-sm font-body font-light text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-label text-foreground block mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-border px-0 py-2 text-sm font-body font-light text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-label text-foreground block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-border px-0 py-2 text-sm font-body font-light text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-label text-foreground block mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-border px-0 py-2 text-sm font-body font-light text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-label text-foreground block mb-2">Interested In</label>
                    <select className="w-full bg-transparent border-b border-border px-0 py-2 text-sm font-body font-light text-foreground focus:outline-none focus:border-accent transition-colors">
                      <option>1 Bedroom</option>
                      <option>2 Bedroom</option>
                      <option>3 Bedroom</option>
                    </select>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="btn-primary w-full text-center">
                      Register Now
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
