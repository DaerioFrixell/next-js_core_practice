import Head from "next/head";
import styles from "../styles/nav.module.scss"
import CustomLink from "./CustomLink";

export default function MainContainer({ title, keywords, children }) {
  return (
    <>
      <Head>
        <meta keywords={"Frixell, Next" + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div>
        <nav className={styles.nav}>
          <CustomLink href="/" text="главная" />
          <CustomLink href="/users" text="пользователи" />
        </nav>
        <h1>main page</h1>

      </div>
      {children}
    </>
  )
}