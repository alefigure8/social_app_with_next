import React from 'react'

export default function Icons({logo, logoStyles}) {
  return (
    <div >
      <i className={`${logo} ${logoStyles}`}></i>
    </div>
  )
}
