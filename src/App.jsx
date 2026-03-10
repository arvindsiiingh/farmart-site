import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import CustomerSegments from './components/CustomerSegments';
import SupplierTrust from './components/SupplierTrust';
import PlatformAI from './components/PlatformAI';
import PlatformCapabilities from './components/PlatformCapabilities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <AnnouncementBar />
      <Navbar className="fixed top-10 inset-x-0" />
      <main>
        <Hero />
        <CustomerSegments />
        <SupplierTrust />
        <PlatformAI />
        <PlatformCapabilities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
