import React from 'react'
import Header from './Header'
import Head from 'next/head'
import homeStyles from '../../public/static/css/Home.module.css'

const Layouts = ({children}) => {
  return (
    <>
      <Head>
        <title>Reddit</title>
        <html lang='en' />
        <meta name='description' content='Reddit clone' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/styles.css" />
      </Head>
      <Header />
      <main className={homeStyles.Container}>
        {children}
      </main>
    </>
  )
}

export default Layouts