// "use client";
// import { Product } from '@/utils/types'
// import Image from 'next/image'
// import React from 'react'
// import Ratings from '../rating'
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '@/store';
// import { addToCart, completelyRemoveProduct, removeFromCart } from '@/store/cartSlice';

// const CartCard = ({ product, quantity }: { product: Product, quantity: number }) => {

//     const dispatch: AppDispatch = useDispatch();

//     const addHandler = () => {
//         dispatch(addToCart(product));
//     }
//     const removeHandler = () => {
//         dispatch(removeFromCart(product));
//     }
//     const completelyRemoveProductFromCart = () => {
//         dispatch(completelyRemoveProduct(product));
//     }
//     return (
//         <div key={product.id} className='cart-card'>
//             <Image src={product.image} alt={product.title} height={200} width={200} className='cart-image' />
//             <div className='flex flex-col  justify-evenly py-2 gap-2 flex-1'>
//                 <p className='title text-center md:text-start'>{product.title}</p>
//                 <div className='flex flex-col md:flex-row  gap-2 items-center'>
//                     <span className=' w-fit bg-gray-200 text-gray-900 px-3 py-1 text-sm font-semibold rounded-2xl'>{product.category}</span>
//                     <p className='flex items-center gap-2 category'><Ratings value={product.rating.rate} />{"(" + product.rating.count + ")"}</p>
//                 </div>
//             </div>
//             <div className='cart-actions'>
//                 <p className='title'>${product.price}</p>
//                 <div className='flex gap-4 items-center'>
//                     <span onClick={removeHandler} className='cart-action-btn'>-</span>
//                     <span className='title'>{quantity}</span>
//                     <span onClick={addHandler} className='cart-action-btn'>+</span>
//                 </div>
//                 <button onClick={completelyRemoveProductFromCart} className='text-red-600 font-semibold cursor-pointer'>Remove</button>
//             </div>
//         </div>
//     )
// }

// export default CartCard

"use client";

import { Product } from "@/utils/types";
import Image from "next/image";
import Ratings from "../rating";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import {
  addToCart,
  completelyRemoveProduct,
  removeFromCart,
} from "@/store/cartSlice";

const CartCard = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="cart-card flex flex-col md:flex-row gap-4 p-4">
      {/* IMAGE */}
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          height={120}
          width={120}
          className="cart-image"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-2 flex-1 text-center md:text-left">
        <p className="title">{product.title}</p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 items-center">
          <span className="bg-gray-200 px-3 py-1 text-sm font-semibold rounded-full">
            {product.category}
          </span>

          <div className="flex items-center gap-1">
            <Ratings value={product.rating.rate} />
            <span className="text-sm text-gray-500">
              ({product.rating.count})
            </span>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="cart-actions flex flex-col items-center gap-2">
        <p className="text-lg font-bold">${product.price}</p>

        {/* QUANTITY */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className="cart-action-btn"
          >
            −
          </button>

          <span className="font-bold">{quantity}</span>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="cart-action-btn"
          >
            +
          </button>
        </div>

        {/* REMOVE */}
        <button
          onClick={() => dispatch(completelyRemoveProduct(product))}
          className="text-red-600 text-sm font-semibold hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
