import { ProductCategory, ProductSortOption } from "./enum";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};


export interface ProductSliceType {
    allProducts: Product[];
    products: Product[];
    sortBy: ProductSortOption;
    category: ProductCategory;
    search: string;
    loading: boolean;
    error: string | null;
}

export interface CartSliceType {
    products: {
        product: Product;
        quantity: number;
    }[];
    totalAmount: number;
    subTotal: number;
    tax: number;
}