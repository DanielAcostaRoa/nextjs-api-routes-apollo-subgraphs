import { products } from "lib/utils/mock-data/products";
import { users } from "lib/utils/mock-data/users";

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
    },
    me: () => {
      return users[0]
    },
    users: () => {
      return users
    }
  }
}

