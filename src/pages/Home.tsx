import Hero from "components/sections/home/hero";
import Categories from "components/sections/home/categories";
import Services from "components/sections/home/Services";
import PopularProducts from "components/sections/home/PopularProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Categories />
      <PopularProducts />
    </>
  );
};

export default Home;
