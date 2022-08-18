import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <Link href='/'>Populares</Link>
      <Link href='/'>Todos</Link>
      <Link href='/'>Publicar</Link>
    </div>
  )
}
