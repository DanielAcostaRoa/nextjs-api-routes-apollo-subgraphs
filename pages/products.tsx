import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import { gql, useQuery } from "@apollo/client"

const PRODUCTS_QUERY = gql`
  query getProducts {
    products {
      sku
      name
      price
    }
  }
`

const ProductsPage: NextPage = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY, {
    context: {
      service: "products",
    },
  })
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          Products data is obtained from the API route:
          <code className={styles.code}>`api/graphql/products`</code>
        </p>
        {loading && <p>Loading...</p>}
        {error && <p>Error :(</p>}
        {data && (
          <table>
            <thead>
              <tr>
                <th>SKU</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((product) => (
                <tr key={product.sku}>
                  <td>{product.sku}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  )
}

export default ProductsPage
