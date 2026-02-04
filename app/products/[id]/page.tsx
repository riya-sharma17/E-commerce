import Header from '@/components/header';
import Image from 'next/image';
import Ratings from '@/components/rating';
import ProductActions from '@/components/productActions';
import { getAllProducts, getProductById } from '@/utils/api';
import { Product } from '@/utils/types';
import { notFound } from 'next/navigation';

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
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    let product;

    try {
        product = await getProductById(id);
    } catch (error) {
        console.log("Error fetching product details:", error);
        notFound();
    }

    const { image, title, description, price, rating, category, } = product;
    return (
        <section className="main-wrapper">
            <Header />
            <div className='flex md:gap-10 gap-5 flex-col md:flex-row'>
                <Image src={image} height={500} width={500} alt='product' className='product-details-image' />

                <div className='md:w-1/2 w-full flex flex-col gap-4'>
                    <span className=' w-fit bg-gray-200 text-gray-900 px-3 py-1 text-sm font-semibold rounded-2xl'>{category}</span>
                    <h2 className='heading'>{title}</h2>
                    <p className='font-bold text-2xl  '>${price}</p>
                    <p className='flex items-center gap-2 category'><Ratings value={rating.rate} />{rating.rate + " "}{" (" + rating.count + " reviews)"}</p>
                    <hr />
                    <p className='font-bold text-xl'>Description</p>
                    <p className='description'>{description}</p>
                    <hr />
                    <ProductActions product={product} />
                </div>
            </div>
            <p className='text-center '>© 2024 Ecommerce Store all right reserved.</p>
        </section>
    )
}



