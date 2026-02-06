
import ProductsCards from "@/components/products";
import Filters from "@/components/filters";


export default function Home() {
  return (
    <div className="main-wrapper">

      <Filters />
      <ProductsCards />
    </div>
  );
}
