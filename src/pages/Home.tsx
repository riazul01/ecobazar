import Hero from "components/sections/home/hero";
import Categories from "components/sections/home/categories";
import Services from "components/sections/home/Services";
import PopularProducts from "components/sections/home/PopularProducts";
import PromoBanners from "components/sections/home/promo-banners";
import HotDeals from "components/sections/home/HotDeals";
import CTABanner from "components/sections/home/CTABanner";
import FeaturedProducts from "components/sections/home/FeaturedProducts";
import LatestNews from "components/sections/home/LatestNews";
import Testimonials from "components/sections/home/testimonials";
import Brands from "components/sections/home/Brands";
import InstaFeed from "components/sections/home/InstaFeed";
import DessertBanners from "components/sections/home/dessert-banners";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Categories />
      <PopularProducts />
      <PromoBanners />
      <HotDeals />
      <DessertBanners /> 
      <FeaturedProducts />
      <CTABanner />
      <LatestNews />
      <Testimonials />
      <Brands />
      <InstaFeed />
    </>
  );
};

export default Home;
