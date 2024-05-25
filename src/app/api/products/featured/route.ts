import { products } from '../data.json'

export async function GET() {
  const featuredProduct = products.filter((product) => product.featured)

  return Response.json(featuredProduct)
}
