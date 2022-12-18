import { createContext, ReactNode, useEffect, useState } from 'react'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'

export interface productProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface ShoppingCartProps {
  shoppingCart: productProps[]
  openSideBar: boolean
  setShoppingCart: React.Dispatch<React.SetStateAction<productProps[]>>
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>
  handleOpenSideBar: () => void
}

export const ShoppingCartContext = createContext<ShoppingCartProps | null>(null)

interface ShoppingContextProps {
  children: ReactNode
}

export interface CartItemProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export function ShoppingCartProvider({ children }: ShoppingContextProps) {
  const [shoppingCart, setShoppingCart] = useState<productProps[]>([])
  const [openSideBar, setOpenSideBar] = useState(false)

  function handleOpenSideBar() {
    setOpenSideBar(!openSideBar)
  }

  // async function fetchData() {
  //   const response = await stripe.products.list({
  //     expand: ['data.default_price']
  //   })

  //   const products = response.data.map((product) => {
  //     const price = product.default_price as Stripe.Price

  //     return {
  //       id: product.id,
  //       name: product.name,
  //       imageUrl: product.images[0],
  //       price: new Intl.NumberFormat('pt-BR', {
  //         style: 'currency',
  //         currency: 'BRL'
  //       }).format(price.unit_amount! / 100)
  //     }
  //   })

  //   return products
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        handleOpenSideBar,
        openSideBar,
        setOpenSideBar
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  // console.log('TO AQUIIIIIII', response.data)

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}
