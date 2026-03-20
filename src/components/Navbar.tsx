import { useState, useEffect } from 'react';
import logo from '@/assets/onepark-logo.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Community', href: '#community' },
    { label: 'Interiors', href: '#interiors' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-padding flex items-center justify-between h-20 md:h-24">
        <a href="#" className="relative z-50">
          <img
            src={logo}
            alt="One Park Living"
            className={`h-8 md:h-10 transition-all duration-300 ${scrolled ? 'invert' : ''}`}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-label transition-colors duration-300 ${
                scrolled ? 'text-foreground hover:text-accent' : 'text-primary-foreground/90 hover:text-primary-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-label px-6 py-2 border transition-all duration-300 ${
              scrolled
                ? 'border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground'
                : 'border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-foreground'
            }`}
          >
            Register
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 ${
            menuOpen || !scrolled ? 'text-primary-foreground' : 'text-foreground'
          }`}
        >
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-foreground flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="heading-sub text-primary-foreground hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn-outline border-primary-foreground/40 text-primary-foreground mt-4"
        >
          Register Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
