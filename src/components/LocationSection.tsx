const LocationSection = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-secondary">
      <div className="section-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-label text-accent mb-4">Central Richmond</p>
          <h2 className="heading-section text-foreground mb-6">
            Location
          </h2>
          <div className="divider-line mb-6" />
          <p className="text-body max-w-lg mx-auto">
            Across the street from Richmond Centre, One Park has everything you want:
            shopping, dining, and entertainment—all while revelling in the calm of parkside living.
          </p>
        </div>

        {/* Map embed */}
        <div className="aspect-[16/7] w-full overflow-hidden bg-muted">
          <iframe
            title="One Park Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.5!2d-123.1367!3d49.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzAwLjEiTiAxMjPCsDA4JzEyLjEiVw!5e0!3m2!1sen!2sca!4v1"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Nearby highlights */}
        <div className="grid sm:grid-cols-4 gap-8 mt-12 text-center">
          {[
            { label: 'Richmond Centre', detail: 'Across the street' },
            { label: 'Canada Line', detail: '5 min walk' },
            { label: 'YVR Airport', detail: '15 min drive' },
            { label: 'Downtown Vancouver', detail: '25 min transit' },
          ].map((item) => (
            <div key={item.label}>
              <h4 className="font-heading text-lg text-foreground mb-1">{item.label}</h4>
              <p className="text-body text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
