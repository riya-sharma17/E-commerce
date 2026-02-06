// "use client";
// import { AppDispatch, RootState } from '@/store';
// import Image from 'next/image';
// import { useDispatch, useSelector } from 'react-redux';
// import Ratings from '../rating';
// import Link from 'next/link';
// import { useEffect } from 'react';
// import { fetchProducts } from '@/store/products/productsThunk';
// import Button from '../button';


// const ProductsCards = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const { products, loading, error } = useSelector((state: RootState) => state.products);

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [])

//     if (loading) {
//         return (
//             <section className='products-cards-container '>
//                 <span className='loader' />
//             </section>
//         )
//     }

//     if (error) {
//         return (
//             <section className="error-container">
//                 <div className='flex flex-col gap-5'>
//                     <p className='description'>{error || "Something went wrong"}</p>
//                     <Button text='Retry' clickHandler={() => dispatch(fetchProducts())} />
//                 </div>
//             </section>
//         );
//     }

//     if (products.length === 0) {
//         return (
//             <section className="error-container">
//                 <p className='title'>No products found.</p>
//             </section>
//         );
//     }

//     return (
//         <section className='products-cards-container '>
//             {
//                 products.map((product, i) => {
//                     const { id, image, title, description, category, rating, price } = product;
//                     return (
//                         <Link key={i} className='product-card' href={`/products/${id}`}>
//                             <Image src={image} alt='product' width={400} height={400} className='product-image' />
//                             <div className='product-details'>
//                                 <p className='title'>{title}</p>
//                                 <p className='category'>{category}</p>
//                                 <p className='category'>{description.length > 70 ? description.substring(0, 70) + "..." : description}</p>
//                                 <p className='flex items-center gap-2 category'><Ratings value={rating.rate} />{"(" + rating.count + ")"}</p>
//                                 <p className='title mt-1'>${price}</p>
//                             </div>
//                         </Link>
//                     )
//                 })
//             }
//         </section>
//     )
// }
"use client";

import { AppDispatch, RootState } from "@/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Ratings from "../rating";
import Link from "next/link";
import { useEffect } from "react";
import { fetchProducts } from "@/store/products/productsThunk";
import Button from "../button";

const ProductsCards = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <span className="loader" />;

  if (error) {
    return (
      <div className="error-container">
        <Button text="Retry" clickHandler={() => dispatch(fetchProducts())} />
      </div>
    );
  }

  return (
   <section id="products" className="products-cards-container">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="product-card"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="product-image"
          />

          <div className="product-details">
            <span className="category">{product.category}</span>
            <p className="title line-clamp-2">{product.title}</p>
            <Ratings value={product.rating.rate} />
            <p className="text-lg font-bold text-[var(--primary)]">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductsCards;
