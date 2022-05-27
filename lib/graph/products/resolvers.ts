import { products } from 'lib/utils/mock-data/products';

export const resolvers = {
  Query: {
    topProducts: () => {
      return products.slice(0, 5);
    },
    products: () => {
      return products;
    },
    getProductBySku: (parent, args) => {
      return products.find(product => product.sku === args.sku);
    }
  },
  Product: {
    __resolveReference(product, { fetchProductBySku }) {
      return fetchProductBySku(product.sku)
    },
  },
}
