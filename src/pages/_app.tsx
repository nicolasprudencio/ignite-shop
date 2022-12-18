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
import { useCart } from '../hooks/useCart'
import { HeaderComponent } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Container>
        <HeaderComponent />
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}
