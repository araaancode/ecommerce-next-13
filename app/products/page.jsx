import Link from "next/link";
import getProducts from "../libs/getProducts";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <section class="articles">
        {products.map((product) => {
          return (
            <article>
              <div class="article-wrapper">
                <figure>
                  <img src={`${product.image}`} alt={`${product.image}`} />
                </figure>
                <div class="article-body">
                  <a href={`/products/${product.id}`}>
                    <p>{product.title}</p>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
