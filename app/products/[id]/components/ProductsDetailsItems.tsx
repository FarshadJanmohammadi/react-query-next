"use client"

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation"

const ProductsDetailsItems = () => {

    const params = useParams();

    const query = useSearchParams();

    console.log(query.get("theme"))



    return (
        <div>ProductsDetailsItems {params.id}
            <Link href={`/products/1/?theme=light`}>Go To Product Details Option Theme light</Link>
        </div>
    )
}

export default ProductsDetailsItems