// import Header from '@/components/header';
// import Image from 'next/image';
// import Ratings from '@/components/rating';
// import ProductActions from '@/components/productActions';
// import { getAllProducts, getProductById } from '@/utils/api';
// import { Product } from '@/utils/types';
// import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
//     try {
//         const products = await getAllProducts();
//         return products.map((product: Product) => ({
//             id: product.id.toString(),
//         }));
//     } catch (error) {
//         console.error("Error generating static params:", error);
//         return [];
//     }
// }


// export default async function ProductDetailPage({
//     params,
// }: {
//     params: Promise<{ id: string }>;
// }) {
//     const { id } = await params;
//     let product;

//     try {
//         product = await getProductById(id);
//     } catch (error) {
//         console.log("Error fetching product details:", error);
//         notFound();
//     }

//     const { image, title, description, price, rating, category, } = product;
//     return (
//         <section className="main-wrapper">
//             <Header />
//             <div className='flex md:gap-10 gap-5 flex-col md:flex-row'>
//                 <Image src={image} height={500} width={500} alt='product' className='product-details-image' />

//                 <div className='md:w-1/2 w-full flex flex-col gap-4'>
//                     <span className=' w-fit bg-gray-200 text-gray-900 px-3 py-1 text-sm font-semibold rounded-2xl'>{category}</span>
//                     <h2 className='heading'>{title}</h2>
//                     <p className='font-bold text-2xl  '>${price}</p>
//                     <p className='flex items-center gap-2 category'><Ratings value={rating.rate} />{rating.rate + " "}{" (" + rating.count + " reviews)"}</p>
//                     <hr />
//                     <p className='font-bold text-xl'>Description</p>
//                     <p className='description'>{description}</p>
//                     <hr />
//                     <ProductActions product={product} />
//                 </div>
//             </div>
//             <p className='text-center '>© 2024 Ecommerce Store all right reserved.</p>
//         </section>
//     )
// }

import Image from "next/image";
import Ratings from "@/components/rating";
import ProductActions from "@/components/productActions";
import { getAllProducts, getProductById } from "@/utils/api";
import { Product } from "@/utils/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();

    return products.map((product: Product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }; 
}) {
  const { id } = params;

  const product = await getProductById(id).catch(() => null);

  if (!product) {
    notFound();
  }

  const { image, title, description, price, rating, category } = product;

  return (
    <>
    

     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mt-4">

        <div className="flex flex-col md:flex-row gap-8">
          {/* PRODUCT IMAGE */}
          <div className="md:w-1/2 w-full bg-gray-100 rounded-xl p-6 flex justify-center items-center">
            <Image
              src={image}
              width={500}
              height={500}
              alt={title}
              className="object-contain max-h-[420px]"
            />
          </div>

          {/* PRODUCT DETAILS */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <span className="w-fit bg-gray-200 text-gray-900 px-3 py-1 text-sm font-semibold rounded-full">
              {category}
            </span>

            <h1 className="text-3xl font-extrabold text-gray-900">
              {title}
            </h1>

            <p className="text-2xl font-bold text-[var(--primary)]">
              ${price}
            </p>

            <div className="flex items-center gap-2 text-gray-700">
              <Ratings value={rating.rate} />
              <span className="text-sm">
                {rating.rate} ({rating.count} reviews)
              </span>
            </div>

            <hr />

            <h2 className="text-xl font-bold">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>

            <hr />

            <ProductActions product={product} />
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          © 2024 Ecommerce Store. All rights reserved.
        </p>
      </section>
    </>
  );
}
