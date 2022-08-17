import React from 'react'
import Link from 'next/link'
import Header from './Header'

const Layouts = ({children}) => {
  return (
    <>
      <Header />
      <main>
        {children}
        </main>
    </>
  )
}

export default Layouts