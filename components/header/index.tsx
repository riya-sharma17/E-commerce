"use client";
import { RootState } from "@/store";
import { STRINGS } from "@/utils/string";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Header() {
    const { products } = useSelector((state: RootState) => state.cart)
    return (
        <header className="header">
            <h1>{STRINGS.STORE_HEADER}</h1>
            <Link href={"/cart"} className="relative">
                <BsCart2 size={20} />
                {
                    products.length > 0 ? <span className="absolute -top-3 -right-3 border border-orange-500 bg-orange-100 text-red-700 rounded-full text-xs px-1.25">{products.length}</span> : null
                }
            </Link>
        </header>
    );
}
