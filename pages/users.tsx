import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import { gql, useQuery } from "@apollo/client"

const USERS_QUERY = gql`
  query getUsers {
    users {
      id
      username
      email
    }
  }
`

const UsersPage: NextPage = () => {
  const { loading, error, data } = useQuery(USERS_QUERY, {
    context: {
      service: "users",
    },
  })
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          Users data is obtained from the API route:
          <code className={styles.code}>`api/graphql/users`</code>
        </p>
        {loading && <p>Loading...</p>}
        {error && <p>Error :(</p>}
        {data && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  )
}

export default UsersPage
