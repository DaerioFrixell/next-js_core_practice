import Link from "next/Link";
import styles from '../styles/customLink.module.css'

export default function CustomLink({ href, text }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  )
}