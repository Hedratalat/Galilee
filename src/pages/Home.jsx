import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
    </>
  );
}
