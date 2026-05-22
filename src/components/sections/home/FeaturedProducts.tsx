import ProductSlider from "components/common/ProductSlider";
import ProductCard from "components/common/ProductCard";
import { products } from "data/products";
import SectionWrapper from "components/sections/SectionWrapper";

const FeaturedProducts = () => {
  return (
    <SectionWrapper>
      <ProductSlider
        title="Featured Products"
        SliderCard={ProductCard}
        data={products}
      />
    </SectionWrapper>
  );
};

export default FeaturedProducts;