import gymImg from '@/assets/onepark_homepage_04.jpg';
import gardenImg from '@/assets/onepark_amenities_02.jpg';

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 md:py-32">
      <div className="section-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-label text-accent mb-4">Live Well</p>
          <h2 className="heading-section text-foreground mb-6">
            Amenities
          </h2>
          <div className="divider-line mb-6" />
          <p className="text-body max-w-lg mx-auto">
            An ecosystem of amenities with everything you need—Sungiven Foods, the Wellness Wing,
            and more. One Park is the epitome of well-being and self-care.
          </p>
        </div>

        {/* Stacked images with alternating text */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <div className="flex items-center bg-foreground p-10 md:p-16 order-2 md:order-1">
              <div>
                <p className="text-label text-accent mb-4">Wellness Wing</p>
                <h3 className="heading-sub text-primary-foreground mb-5">
                  A Well-Equipped Gym, Sauna &amp; Steam Room
                </h3>
                <p className="text-sm font-body font-light text-primary-foreground/70 leading-relaxed">
                  With ample greenspace, an international grocery store—and a well-equipped gym,
                  sauna, and steam room built in—your wellness journey starts at home.
                </p>
              </div>
            </div>
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src={gymImg}
                alt="State-of-the-art fitness centre"
                className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <div className="overflow-hidden">
              <img
                src={gardenImg}
                alt="Landscaped gardens and courtyard"
                className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                loading="lazy"
              />
            </div>
            <div className="flex items-center bg-secondary p-10 md:p-16">
              <div>
                <p className="text-label text-accent mb-4">Private Park</p>
                <h3 className="heading-sub text-foreground mb-5">
                  Ample Greenspace &amp; Landscaped Gardens
                </h3>
                <p className="text-body">
                  The private central park creates a tranquil oasis—complete with landscaped
                  gardens, meandering pathways, and curated outdoor spaces for relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
