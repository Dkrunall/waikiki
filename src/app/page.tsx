import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ExperienceGrid from "@/components/ExperienceGrid";
import CustomCursor from "@/components/CustomCursor";
import InteractiveMenu from "@/components/InteractiveMenu";
import WeeklyBeats from "@/components/WeeklyBeats";
import AtmosphereGallery from "@/components/AtmosphereGallery";
import LoadingSplash from "@/components/LoadingSplash";
import StickyActions from "@/components/StickyActions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <LoadingSplash />
      <CustomCursor />
      <StickyActions />
      
      <Hero />

      
      <Marquee text="WAIKIKI EXPERIENCE - ALOHA MUMBAI - TIKI CULTURE - EXOTIC COCKTAILS - CULINARY JOURNEY" />
      
      <ExperienceGrid />

      <InteractiveMenu />

      <Marquee 
        text="LATE NIGHT RHYTHMS - JUNGLE ESCAPISM - PAN ASIAN FLAVORS - MEDITERRANEAN TWIST" 
        reverse 
        speed={40}
        className="border-t-0"
      />

      <WeeklyBeats />

      <AtmosphereGallery />

      <Footer />
    </main>
  );
}

