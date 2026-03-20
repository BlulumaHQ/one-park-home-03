import kitchenImg from '@/assets/onepark_interiors_04.jpg';
import livingImg from '@/assets/onepark_interiors_05.jpg';

const InteriorsSection = () => {
  return (
    <section id="interiors" className="py-24 md:py-32 bg-secondary">
      <div className="section-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-label text-accent mb-4">Our Homes</p>
          <h2 className="heading-section text-foreground mb-6">
            Interiors
          </h2>
          <div className="divider-line mb-6" />
          <p className="text-body max-w-lg mx-auto">
            Thoughtfully designed interiors combine warm, natural materials with contemporary
            elegance—creating spaces that feel both refined and welcoming.
          </p>
        </div>

        {/* Asymmetric gallery */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-7 overflow-hidden">
            <img
              src={kitchenImg}
              alt="Modern kitchen and dining area"
              className="w-full h-full object-cover aspect-[16/10] hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-5 overflow-hidden">
            <img
              src={livingImg}
              alt="Stylish mid-century living room"
              className="w-full h-full object-cover aspect-[16/10] md:aspect-auto hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto text-center">
          {[
            { title: '1, 2 & 3 Bedrooms', desc: 'Large, livable floorplans for every lifestyle' },
            { title: 'Premium Finishes', desc: 'Quartz countertops, engineered hardwood, and European appliances' },
            { title: 'Floor-to-Ceiling Glass', desc: 'Abundant natural light with panoramic views' },
          ].map((f) => (
            <div key={f.title}>
              <h4 className="font-heading text-lg md:text-xl text-foreground mb-2">{f.title}</h4>
              <p className="text-body text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorsSection;
