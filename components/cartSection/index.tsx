// "use client";
// import { AppDispatch, RootState } from '@/store';
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import CartCard from '../cartCard';
// import Button from '../button';
// import { clearCart } from '@/store/cartSlice';
// import toast from 'react-hot-toast';

// const CartSection = () => {
//     const { products, totalAmount, subTotal, tax } = useSelector((state: RootState) => state.cart);
//     const dispatch: AppDispatch = useDispatch();

//     const proceedToCheckout = () => {
//         toast.success("Product Purchased Successfully!");
//         dispatch(clearCart());
//     }

//     return (
//         <div className='cart-content-container'>
//             <div className='cart-container'>
//                 <p className='font-bold text-xl'>Cart Items</p>
//                 {products.length === 0 ? (
//                     <p className='title'>Your cart is empty. Please Add Item to cart to purchase</p>
//                 ) : (
//                     <>
//                         {products.map(({ product, quantity }) => (
//                             <CartCard key={product.id} product={product} quantity={quantity} />
//                         ))}
//                     </>
//                 )}
//             </div>
//             <div className='order-summary'>
//                 <p className='title'>Order Summary</p>
//                 <div className='flex justify-between items-center'>
//                     <span className='description'>Subtotal </span>
//                     <span className='title'>${subTotal.toFixed(2)}</span>
//                 </div>
//                 <div className='flex justify-between items-center'>
//                     <span className='description'>Shipping </span>
//                     <span className='title'>$0.00</span>
//                 </div>
//                 <div className='flex justify-between items-center'>
//                     <span className='description'>Tax </span>
//                     <span className='title'>${tax.toFixed(2)}</span>
//                 </div>
//                 <div className='flex justify-between items-center'>
//                     <span className='description'>Total </span>
//                     <span className='title'>${totalAmount.toFixed(2)}</span>
//                 </div>

//                 <Button text='Proceed to Checkout' clickHandler={proceedToCheckout} />
//                 <button className='border px-4 py-2 rounded-sm'>Continue Shipping</button>
//             </div>
//         </div>
//     )
// }

// export default CartSection


"use client";

import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../cartCard";
import Button from "../button";
import { clearCart } from "@/store/cartSlice";
import toast from "react-hot-toast";
import Link from "next/link";

const CartSection = () => {
  const { products, totalAmount, subTotal, tax } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch: AppDispatch = useDispatch();

  const proceedToCheckout = () => {
    toast.success("Product Purchased Successfully!");
    dispatch(clearCart());
  };

  return (
    <div className="cart-content-container">
      {/* CART ITEMS */}
      <div className="cart-container">
        <p className="font-bold text-xl mb-4">Cart Items</p>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            Your cart is empty. Start shopping to add items.
          </p>
        ) : (
          products.map(({ product, quantity }) => (
            <CartCard
              key={product.id}
              product={product}
              quantity={quantity}
            />
          ))
        )}
      </div>

      {/* ORDER SUMMARY */}
      <div className="order-summary">
        <p className="title mb-4">Order Summary</p>

        <div className="flex justify-between">
          <span className="description">Subtotal</span>
          <span className="font-semibold">${subTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="description">Shipping</span>
          <span className="font-semibold">$0.00</span>
        </div>

        <div className="flex justify-between">
          <span className="description">Tax</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>

        {/* ACTIONS */}
        <Button text="Proceed to Checkout" clickHandler={proceedToCheckout} />

        <Link href="/">
          <button className="border border-gray-300 w-full mt-2 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSection;
