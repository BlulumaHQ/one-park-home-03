import interiorsImg from '@/assets/onepark_interiors_02.jpg';

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32">
      <div className="section-padding">
        {/* Intro text */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-label text-accent mb-4">A Community in Bloom</p>
          <h2 className="heading-section text-foreground mb-6">
            One Park is a Community in Bloom
          </h2>
          <div className="divider-line mb-6" />
          <p className="text-body max-w-lg mx-auto">
            Three terraced towers encircling a private park in Central Richmond.
            With a wide selection of 1, 2, &amp; 3 bedroom residences—recently completed
            and ready for move in—there is a home for everyone.
          </p>
        </div>

        {/* Feature image with overlaid text */}
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              src={interiorsImg}
              alt="Bright living space with panoramic windows"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center bg-secondary p-10 md:p-16 lg:p-20">
            <div>
              <p className="text-label text-accent mb-4">Now Selling</p>
              <h3 className="heading-sub text-foreground mb-5">
                Move-In Ready Homes With Room to Grow
              </h3>
              <p className="text-body mb-8">
                Experience convenient and contemporary living at One Park. All homes have
                large, livable floorplans—perfect for any family of any size.
              </p>
              <a href="#contact" className="btn-primary">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
