import React from 'react'
import Search from '../ui/Search'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <p>Reddit</p>
           <Search />
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
        </div>
        <div>
          {/* Menu usuarios */}
        </div>
      </div>
    </header>
  )
}
