import getProduct from "@/app/libs/getProduct";
import getProducts from "@/app/libs/getProducts";

export default async function productPage({ params: { id } }) {
  // initiate both request in parallel
  const productData = getProduct(id);

  const product = await productData;

  return (
    <div style={{width:'25%',margin:'100px auto'}}>
      <p>{product.title}</p>
      <img style={{width:'200px',height:'200px',margin:'auto'}} src={`${product.image}`} alt={`${product.title}`} />
    </div>
  );
}
