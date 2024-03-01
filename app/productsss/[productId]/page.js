
import { notFound } from "next/navigation"
const ProductPage = ({params}) => {
     if(params.productId >= 10)
     return  notFound()
  return (
    <div>new product ProductPage{params.productId}</div>
  )
}

export default ProductPage