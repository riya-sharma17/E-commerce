"use client";

import Button from "@/components/button";
import { AppDispatch } from "@/store";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { GoHeartFill } from "react-icons/go";
import { useDispatch } from "react-redux";

export default function ProductActions({ product }: { product: Product }) {
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const [isFav, setIsFav] = useState(false);

    const handleAddToCart = () => {
        console.log("Add to cart");
        dispatch(addToCart(product));
        toast.success("Product added to cart successfully!");
        router.push("/cart");
    };

    const handleBuyNow = () => {
        console.log("Buy now");
    };

    return (
        <>
            <div className="flex gap-10">
                <Button text="ADD TO CART" clickHandler={handleAddToCart} />
                <Button text="BUY NOW" clickHandler={handleBuyNow} />
            </div>

            <div className="flex gap-2 items-center mt-4">
                <GoHeartFill onClick={() => setIsFav(prev => !prev)} fontSize={22} className={` cursor-pointer ${isFav ? " text-pink-500" : ""}`} /> Wishlist
            </div>
        </>
    );
}
