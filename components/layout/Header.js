import React from 'react'
import Search from '../ui/Search'
import Nav from './Nav'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 38px;
`

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

const Logo = styled.p`
  color: #1c1c1c;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 2rem;

`

const Login = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 400px;
`

export default function Header() {
  return (
    <header
      css={css`
        background-color: #ffffff;
        padding: 0.5rem 0;
      `}
    >
      <HeaderContainer>
        <MainHeader>
          <Logo>
            <div>
              {/*IMG*/ }
            </div>
            <p>reddit</p>
          </Logo>
          <Search />
          <Nav />
        </MainHeader>
        <Login>
          <Link href='/'>Log In</Link>
          <Link href='/'>Sign Up</Link>
          <Link href='/'>Perfil</Link>
        </Login>
      </HeaderContainer>
    </header>
  )
}
