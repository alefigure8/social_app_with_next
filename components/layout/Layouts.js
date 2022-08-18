import React from 'react'
import Header from './Header'
import Head from 'next/head'

const Layouts = ({children}) => {
  return (
    <>
      <Head>
        <title>Reddit</title>
        <html lang='en' />
        <meta name='description' content='Reddit clone' />
        <link rel='icon' href='/favicon.ico' />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/static/css/styles.css" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layouts