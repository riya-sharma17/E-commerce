
// import ProductsCards from "@/components/products";
// import Filters from "@/components/filters";


// export default function Home() {
//   return (
//     <div className="main-wrapper">
     
//       <Filters />
//       <ProductsCards />
//     </div>
//   );
// }

import Header from "@/components/header";
import HeroSection from "@/components/header/HeroSection";
import ProductsCards from "@/components/products";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />  
      <ProductsCards />
    </>
  );
}
