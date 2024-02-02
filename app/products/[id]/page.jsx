import getProduct from "@/app/libs/getProduct";
import getProducts from "@/app/libs/getProducts";
import { Suspense } from "react";

export default async function productPage({ params: { id } }) {
  // initiate both request in parallel
  const productData = getProduct(id);
  const products = getProducts(id);

  const product = await productData;

  return (
    <div style={{width:'50%',margin:'25px auto'}}>
      <p>{product.title}</p>
      <img style={{width:'200px',height:'200px'}} src={`${product.image}`} alt={`${product.title}`} />
    </div>
  );
}
