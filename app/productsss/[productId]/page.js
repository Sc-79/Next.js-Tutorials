
import { notFound } from "next/navigation"
export function metadata({params}) {
  return {
    title: `Product ${params.productId}`,
  }
}
const ProductPage = ({params}) => {

     if(params.productId >= 10)
     return  notFound()
  return (
    <div>new product ProductPage{params.productId}</div>
  )
}

export default ProductPage