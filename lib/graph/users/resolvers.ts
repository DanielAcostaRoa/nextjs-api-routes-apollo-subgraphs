import { users } from "lib/utils/mock-data/users"

export const resolvers = {
  Query: {
    me: () => {
      return users[0]
    },
    users: () => {
      return users
    },
  },
  User: {
    __resolveReference(user, { fetchUserById }) {
      return fetchUserById(user.id)
    },
  },
}
