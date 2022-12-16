import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { CartCount, CartButton, Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Link from 'next/link'
import { ShoppingCart } from '../components/ShoppingCart'
import { useState } from 'react'
import { ShoppingCartProvider } from '../contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openSideBar, setOpenSideBar] = useState(false)

  function handleOpenSideBar() {
    setOpenSideBar(!openSideBar)
  }

  return (
    <ShoppingCartProvider>
      <Container>
        <Header>
          <Link href={'/'}>
            <Image src={logoImg} alt="" width={130} height={52} />
          </Link>
          <CartButton onClick={handleOpenSideBar}>
            <HiOutlineShoppingBag />
            <CartCount>1</CartCount>
          </CartButton>
          {openSideBar && <ShoppingCart sideBarIsActive={setOpenSideBar} />}
        </Header>
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}
