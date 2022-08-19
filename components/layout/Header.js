import React from 'react'
import Search from '../ui/Search'
import Nav from './Nav'
import Link from 'next/link'
import Icons from './Icons'
import headerStyles from '../../public/static/css/HeaderStyle.module.css'

export default function Header() {
  const user = true;
  return (
    <header className={headerStyles.Header}>
      <nav className={headerStyles.HeaderContainer}>
        <div className={headerStyles.MainHeader}>
          <div className={headerStyles.Logo}>
            <Icons logo='fab fa-reddit' logoStyles={headerStyles.Reddit} />
            <Link href='/'><span>reddit</span></Link>
          </div>
          <Search />
          </div>
          <div className={headerStyles.NavLinksContainer}>
            {user && <Nav />}
          </div>
        <div className={headerStyles.Login}>
          <Link href='/' ><button className={headerStyles.NavButtonLogin}>Log In</button></Link>
          <Link href='/'><button className={headerStyles.NavButtonSingUp}> Sign Up</button></Link>
          <Link href='/'>Perfil</Link>
        </div>
      </nav>
    </header>
  )
}
