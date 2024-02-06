import Link from "next/link";
import getProducts from "../libs/getProducts";
import Button from "../components/Button/Button";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <section class="articles">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <div class="article-wrapper">
                <figure>
                  <img src={`${product.image}`} alt={`${product.image}`} />
                </figure>
                <div class="article-body">
                  <Link href={`/products/${product.id}`}>
                    <p className="product-name">{product.title}</p>
                  </Link>
                  <Button type="primary">دیدن محصول</Button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
