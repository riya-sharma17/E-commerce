import Header from "@/components/header";
import ProductsCards from "@/components/products";
import Filters from "@/components/filters";


export default function Home() {
  return (
    <div className="main-wrapper">
      <Header />
      <Filters />
      <ProductsCards />
    </div>
  );
}
