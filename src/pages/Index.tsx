import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CommunitySection from '@/components/CommunitySection';
import InteriorsSection from '@/components/InteriorsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CommunitySection />
      <InteriorsSection />
      <AmenitiesSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
