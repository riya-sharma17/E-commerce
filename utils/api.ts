import { ENDPOINTS } from "./endPoints";
import { Product } from "@/utils/types";

export async function getProductById(id: string): Promise<Product> {
    const res = await fetch(ENDPOINTS.GET_PRODUCT_DETAILS(id), {
        next: { revalidate: 300 },
    });
    const dataToSend = await res.json();

    if (res.status !== 200) {
        throw new Error("Product not found");
    }

    return dataToSend;
}

export async function getAllProducts(): Promise<Product[]> {
    const res = await fetch(ENDPOINTS.GET_ALL_PRODUCTS, {
        next: { revalidate: 300 },
    });

    const data = await res.json();

    if (res.status !== 200) {
        throw new Error("Failed to fetch products");
    }

    return data;
}
