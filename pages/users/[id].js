import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from "../../styles/user.module.scss"

export default function OneUser({ user }) {
  const router = useRouter()

  return (
    <MainContainer title={user.name}>
      <h1 className={styles.user}>пользователь с id = {router.query.id}</h1>
      <h3>имя пользователя {user.name}</h3>
    </MainContainer>
  )

}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()

  return {
    props: { user },
  }
}