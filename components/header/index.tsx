// "use client";
// import { RootState } from "@/store";
// import { STRINGS } from "@/utils/string";
// import Link from "next/link";
// import { BsCart2 } from "react-icons/bs";
// import { useSelector } from "react-redux";

// export default function Header() {
//     const { products } = useSelector((state: RootState) => state.cart)
//     return (
//         <header className="header">
//             <h1>{STRINGS.STORE_HEADER}</h1>
//             <Link href={"/cart"} className="relative">
//                 <BsCart2 size={20} />
//                 {
//                     products.length > 0 ? <span className="absolute -top-3 -right-3 border border-orange-500 bg-orange-100 text-red-700 rounded-full text-xs px-1.25">{products.length}</span> : null
//                 }
//             </Link>
//         </header>
//     );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Header = () => {
  const { products } = useSelector((state: RootState) => state.cart);

  return (
    <header className="w-full sticky top-0 z-50 bg-white backdrop-blur">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-6 py-4 shadow-sm"
      >
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[var(--primary)]">Shop</span>
          <span className="text-[var(--accent)]">Hub</span>
        </Link>

        {/* CART */}
        <Link href="/cart" className="relative">
          <ShoppingCart size={26} className="text-[var(--primary)]" />
          {products.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-black text-xs font-bold px-2 rounded-full">
              {products.length}
            </span>
          )}
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
