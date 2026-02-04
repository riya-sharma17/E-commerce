"use client";
import { AppDispatch, RootState } from '@/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../cartCard';
import Button from '../button';
import { clearCart } from '@/store/cartSlice';
import toast from 'react-hot-toast';

const CartSection = () => {
    const { products, totalAmount, subTotal, tax } = useSelector((state: RootState) => state.cart);
    const dispatch: AppDispatch = useDispatch();

    const proceedToCheckout = () => {
        toast.success("Product Purchased Successfully!");
        dispatch(clearCart());
    }

    return (
        <div className='cart-content-container'>
            <div className='cart-container'>
                <p className='font-bold text-xl'>Cart Items</p>
                {products.length === 0 ? (
                    <p className='title'>Your cart is empty. Please Add Item to cart to purchase</p>
                ) : (
                    <>
                        {products.map(({ product, quantity }) => (
                            <CartCard key={product.id} product={product} quantity={quantity} />
                        ))}
                    </>
                )}
            </div>
            <div className='order-summary'>
                <p className='title'>Order Summary</p>
                <div className='flex justify-between items-center'>
                    <span className='description'>Subtotal </span>
                    <span className='title'>${subTotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='description'>Shipping </span>
                    <span className='title'>$0.00</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='description'>Tax </span>
                    <span className='title'>${tax.toFixed(2)}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='description'>Total </span>
                    <span className='title'>${totalAmount.toFixed(2)}</span>
                </div>

                <Button text='Proceed to Checkout' clickHandler={proceedToCheckout} />
                <button className='border px-4 py-2 rounded-sm'>Continue Shipping</button>
            </div>
        </div>
    )
}

export default CartSection