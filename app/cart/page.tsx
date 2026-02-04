import CartSection from '@/components/cartSection';
import Link from 'next/link';

const CartPage = () => {

    return (
        <div className="main-wrapper">
            <div className='flex flex-col md:flex-row justify-between md:items-center mb-6'>
                <header>
                    <h1 className='heading'>Shopping Cart</h1>
                    <p>Review and manage your cart item</p>
                </header>
                <Link href="/" className='text-blue-600 font-semibold'>Continue Shopping</Link>
            </div>

            <CartSection />
        </div>
    )
}

export default CartPage;