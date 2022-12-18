import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useCart } from '../../hooks/useCart'
import { ShoppingCart } from '../ShoppingCart'
import { CartButton, CartCount, Header } from './styles'
import logoImg from '../../assets/logo.svg'

export function HeaderComponent() {
  const { shoppingCart, setOpenSideBar, openSideBar, handleOpenSideBar } =
    useCart()

  return (
    <Header>
      <Link href={'/'}>
        <Image src={logoImg} alt="" width={130} height={52} />
      </Link>
      <CartButton onClick={handleOpenSideBar}>
        <HiOutlineShoppingBag />
        <CartCount>{shoppingCart.length}</CartCount>
      </CartButton>
      {openSideBar && <ShoppingCart sideBarIsActive={setOpenSideBar} />}
    </Header>
  )
}
