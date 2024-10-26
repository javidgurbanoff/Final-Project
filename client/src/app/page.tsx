import Header from "./features/header/header";
import BillingCards from "./components/BillingCards/BillingCards";
import AboutUs from "./components/AboutUs/AboutUs";
import LivingRoom from "./components/LivingRoom/LivingRoom";
import Bedroom from "./components/Bedroom/Bedroom";
import InteriorDesign from "./components/InteriorDesign/InteriorDesign";
import KitchenRoom from "./components/KitchenRoom/KitchenRoom";
import Bathroom from "./components/Bathroom/Bathroom";
import Testimonials from "./components/Testimonials/Testimonials";
import DealProducts from "./components/DealProducts/DealProducts";
import LatestNews from "./components/LatestNews/LatestNews";
import JoinNewsletters from "./components/JoinNewsletters/JoinNewsletters";
import Footer from "./features/footer/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <BillingCards />
      <AboutUs />
      <LivingRoom />
      <Bedroom />
      <InteriorDesign />
      <KitchenRoom />
      <Bathroom />
      <Testimonials />
      <DealProducts />
      <LatestNews />
      <JoinNewsletters />
      <Footer />
    </div>
  );
}
