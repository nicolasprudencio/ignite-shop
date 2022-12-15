import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/CartContext'

export const useCart = () => {
  const data = useContext(ShoppingCartContext)

  if (data === null)
    throw new Error('Não é possível utilizar o hook sem o useCartProvider')

  return data
}
