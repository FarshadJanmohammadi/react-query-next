import  { Suspense } from 'react'
import ProductsDetailsItems from './components/ProductsDetailsItems';


const ProductsDetails = async(props:PageProps<"/products/[id]">) => {


  return (
    <Suspense fallback={<div>Loading...</div>}>
        <ProductsDetailsItems  />
    </Suspense>
  )
}

export default ProductsDetails