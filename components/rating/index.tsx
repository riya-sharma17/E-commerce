"use client";
import { Rating } from "react-simple-star-rating";

export default function Ratings({ value }: { value: number }) {
    return (
        <Rating
            initialValue={value}
            readonly
            allowFraction
            size={28}
            SVGclassName="inline-block"
            fillColor="#facc15"
            emptyColor="#e5e7eb"
        />
    )

}