import Container from "../Components/Container";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import FeaturedProducts from "../Components/FeaturedProducts";
import PromoGrid from "../Components/PromoGrid";
import BestSellers from "../Components/BestSellers";
import Brands from "../Components/Brands";
import Newsletter from "../Components/Newsletter";


export default function Home() {
  return (
    <Container>
          <Hero />
      <Categories/>
      <FeaturedProducts />
      <PromoGrid />
      <BestSellers />
      <Brands />
      <Newsletter />
    </Container>
  )
}
