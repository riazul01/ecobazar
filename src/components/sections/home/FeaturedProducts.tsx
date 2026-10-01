import SectionWrapper from "components/sections/SectionWrapper";
import ProductSlider from "components/common/ProductSlider";
import ProductCard from "components/common/ProductCard";
import { featuredProducts } from "data/products";

const FeaturedProducts = () => {
  return (
    <SectionWrapper>
      <ProductSlider
        title="Featured Products"
        SliderCard={ProductCard}
        data={featuredProducts}
      />
    </SectionWrapper>
  );
};

export default FeaturedProducts;