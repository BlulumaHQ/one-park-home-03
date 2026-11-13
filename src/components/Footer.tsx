import logo from '@/assets/onepark-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <img src={logo} alt="One Park Living" className="h-8 mb-4" />
            <p className="text-sm font-body font-light text-primary-foreground/60 leading-relaxed">
              A community in bloom. Three terraced towers encircling a private park
              in Central Richmond.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-label text-primary-foreground/50 mb-4">Explore</h4>
            <div className="space-y-2">
              {['Community', 'Interiors', 'Amenities', 'Location', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-body font-light text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-label text-primary-foreground/50 mb-4">Visit Us</h4>
            <p className="text-sm font-body font-light text-primary-foreground/70 mb-1">
              Presentation Centre
            </p>
            <p className="text-sm font-body font-light text-primary-foreground/60 mb-4">
              Open Daily 12–5pm · Closed Fridays
            </p>
            <a
              href="https://maps.app.goo.gl/s3fRMDS1qH8cb7Bv7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body font-light text-accent hover:underline"
            >
              8071 Park Rd, Richmond, BC
            </a>
            <div className="mt-4 space-y-1">
              <a href="tel:604-821-8883" className="block text-sm font-body font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                604-821-8883
              </a>
              <a href="tel:604-565-2836" className="block text-sm font-body font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                604-565-2836
              </a>
            </div>
          </div>
        </div>

        {/* Divider & credit */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body font-light text-primary-foreground/40">
            © {new Date().getFullYear()} One Park Living. All rights reserved.
          </p>
          <p className="text-xs font-body font-light text-primary-foreground/40">
            Web Design by{" "}<a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80">Bluluma Design</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
