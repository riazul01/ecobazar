import Hero from "components/sections/home/hero";
import Categories from "components/sections/home/categories";
import Services from "components/sections/home/Services";
import PopularProducts from "components/sections/home/PopularProducts";
import BannerGroup from "components/sections/home/banner-group";
import HotDeals from "components/sections/home/HotDeals";
import CTA from "components/sections/home/CTA";
import FeaturedProducts from "components/sections/home/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Categories />
      <PopularProducts />
      <BannerGroup />
      <HotDeals />
      <CTA />
      <FeaturedProducts />
    </>
  );
};

export default Home;
