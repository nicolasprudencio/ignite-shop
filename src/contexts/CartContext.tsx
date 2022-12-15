import { createContext, ReactNode, useState } from 'react'

interface productProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface ShoppingCartProps {
  setShoppingCart: React.Dispatch<React.SetStateAction<any>>
  shoppingCart: productProps[]
}

export const ShoppingCartContext = createContext<ShoppingCartProps | null>(null)

interface ShoppingContextProps {
  children: ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingContextProps) {
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
