"use client";
import { Product } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import Ratings from '../rating'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { addToCart, completelyRemoveProduct, removeFromCart } from '@/store/cartSlice';

const CartCard = ({ product, quantity }: { product: Product, quantity: number }) => {

    const dispatch: AppDispatch = useDispatch();

    const addHandler = () => {
        dispatch(addToCart(product));
    }
    const removeHandler = () => {
        dispatch(removeFromCart(product));
    }
    const completelyRemoveProductFromCart = () => {
        dispatch(completelyRemoveProduct(product));
    }
    return (
        <div key={product.id} className='cart-card'>
            <Image src={product.image} alt={product.title} height={200} width={200} className='cart-image' />
            <div className='flex flex-col  justify-evenly py-2 gap-2 flex-1'>
                <p className='title text-center md:text-start'>{product.title}</p>
                <div className='flex flex-col md:flex-row  gap-2 items-center'>
                    <span className=' w-fit bg-gray-200 text-gray-900 px-3 py-1 text-sm font-semibold rounded-2xl'>{product.category}</span>
                    <p className='flex items-center gap-2 category'><Ratings value={product.rating.rate} />{"(" + product.rating.count + ")"}</p>
                </div>
            </div>
            <div className='cart-actions'>
                <p className='title'>${product.price}</p>
                <div className='flex gap-4 items-center'>
                    <span onClick={removeHandler} className='cart-action-btn'>-</span>
                    <span className='title'>{quantity}</span>
                    <span onClick={addHandler} className='cart-action-btn'>+</span>
                </div>
                <button onClick={completelyRemoveProductFromCart} className='text-red-600 font-semibold cursor-pointer'>Remove</button>
            </div>
        </div>
    )
}

export default CartCard