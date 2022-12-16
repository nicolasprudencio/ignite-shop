import { createContext, ReactNode, useState } from 'react'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'

export interface productProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface contextProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

interface ShoppingCartProps {
  setShoppingCart: React.Dispatch<React.SetStateAction<productProps[]>>
  shoppingCart: productProps[]
}

export const ShoppingCartContext = createContext<ShoppingCartProps | null>(null)

interface ShoppingContextProps {
  children: ReactNode
}

export function ShoppingCartProvider(
  { children }: ShoppingContextProps,
  { products }: contextProps
) {
  const [shoppingCart, setShoppingCart] = useState<productProps[]>([])

  console.log('esse cara sou eu', products)

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

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
