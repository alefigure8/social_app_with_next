import React from 'react'

export default function Search() {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Buscando...')
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <input type="text" />
    </form>
  )
}

