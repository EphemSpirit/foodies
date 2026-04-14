import Link from "next/link"
import logo from "@/assets/logo.png"

import styles from "./MainHeader.module.css"
import Image from "next/image"
import NavLink from "@/components/layouts/NavLink"

const MainHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} priority alt="Plate with food" />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader