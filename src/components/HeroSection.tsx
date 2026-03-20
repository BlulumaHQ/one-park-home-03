import heroImg from '@/assets/onepark_homepage_05.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p className="text-label text-primary-foreground/70 mb-6">
          Richmond, British Columbia
        </p>
        <h1 className="heading-display text-primary-foreground mb-6">
          You Will<br />Flourish Here
        </h1>
        <div className="w-12 h-px bg-primary-foreground/40 mx-auto mb-8" />
        <p className="text-sm md:text-base font-body font-light text-primary-foreground/80 max-w-lg mx-auto mb-10 leading-relaxed">
          Three terraced towers encircling a private park in Central Richmond.
          Move-in ready 1, 2 &amp; 3 bedroom homes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-outline border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
            Register Now
          </a>
          <a href="#community" className="btn-outline border-primary-foreground/30 text-primary-foreground/70 hover:border-primary-foreground/60 hover:text-primary-foreground">
            Explore
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-label text-primary-foreground/50 text-[10px]">Scroll</span>
        <div className="w-px h-8 bg-primary-foreground/30 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
