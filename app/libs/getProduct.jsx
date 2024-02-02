
export default async function getUser(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)

    if(!response.ok) {
        throw new Error('failed to fetch product')
    }

    return response.json()

}