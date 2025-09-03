import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ShopByCategory from '@/components/ShopByCategory';
import Collections from '@/components/Collections';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import TrustSection from '@/components/TrustSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ShopByCategory />
        <Collections />
        <CustomerTestimonials />
        <TrustSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
