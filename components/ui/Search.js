import React from 'react'
import headerStyles from '../../public/static/css/HeaderStyle.module.css'

export default function Search() {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Buscando...')
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <input type="text" className={headerStyles.Search} />
    </form>
  )
}

