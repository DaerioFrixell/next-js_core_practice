import CustomLink from "../components/CustomLink";
import MainContainer from "../components/MainContainer";


const Users = ({ users }) => {
  return (
    <MainContainer title={"Все пользователи"}>
      <h1>users list</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <CustomLink href={`users/${user.id}`} text={user.name} />
          </li>
        )}
      </ul>
    </MainContainer>
  )
}

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: { users },
  }
}