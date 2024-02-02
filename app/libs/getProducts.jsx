
export default async function getProducts() {
   const response = await fetch('https://fakestoreapi.com/products')

   if(!response.ok) {
      throw new Error('failed to fetch products')
   }

    return await response.json()
}
