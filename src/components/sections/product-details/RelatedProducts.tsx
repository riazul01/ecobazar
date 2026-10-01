import ProductSlider from "components/common/ProductSlider";
import ProductCard from "components/common/ProductCard";
import { featuredProducts } from "data/products";

const RelatedProducts = () => {
  return (
    <ProductSlider
      title="Related Products"
      SliderCard={ProductCard}
      data={featuredProducts}
    />
  );
};

export default RelatedProducts;
