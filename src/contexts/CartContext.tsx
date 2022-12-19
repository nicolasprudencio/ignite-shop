import { createContext, ReactNode, useState } from 'react'

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
