import React from 'react'
import Link from 'next/link'
import headerStyles from '../../public/static/css/HeaderStyle.module.css'

export default function Nav() {
  return (
    <div className={headerStyles.NavLinks}>
      <Link href='/'><span className={headerStyles.NavLinksBtn}>Populares</span></Link>
      <Link href='/'><span className={headerStyles.NavLinksBtn}>Todos</span></Link>
      <Link href='/'><span className={headerStyles.NavLinksBtn}>Publicar</span></Link>
    </div>
  )
}
