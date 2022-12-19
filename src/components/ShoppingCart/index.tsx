import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import {
  CartAmount,
  SideBar,
  CartItem,
  CartItemsWrapper,
  FinalShopButton,
  ImageContainer,
  ShoppingCartContainer,
  Overlay
} from './styles'
import { useCart } from '../../hooks/useCart'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface active {
  sideBarIsActive: (arg: boolean) => void
}

export function ShoppingCart({ sideBarIsActive }: active) {
  const [isCheckoutSessionLoading, setIsCheckoutSessionLoading] =
    useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const { setShoppingCart, shoppingCart } = useCart()

  useEffect(() => {
    const subTotal = shoppingCart.reduce((total, item) => {
      return total + (Number(item.price.slice(3).replace(/,/g, '.')) || 0)
    }, 0.0)

    setTotalPrice(subTotal)
  }, [shoppingCart])

  function handleSetSideBarActive() {
    sideBarIsActive(false)
  }

  function handleRemoveCartItem(id: string) {
    const newCart = shoppingCart.filter((product) => product.id !== id)

    setShoppingCart(newCart)
  }

  async function handleBuyProduct() {
    try {
      setIsCheckoutSessionLoading(true)
      const response = await axios.post('/api/checkout', {
        products: shoppingCart
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
      setIsCheckoutSessionLoading(false)
    }
  }

  return (
    <Overlay>
      <SideBar
        initial={{ opacity: 0, x: 480 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          velocity: '0.2s'
        }}
      >
        <ShoppingCartContainer>
          <h1>Sacola de compras</h1>
          <AiOutlineClose
            className="closeIcon"
            onClick={handleSetSideBarActive}
          />
          <CartItemsWrapper>
            {shoppingCart.length === 0 ? (
              <h1>Adicione itens a sacola para visualizar</h1>
            ) : (
              shoppingCart.map((product) => {
                return (
                  <CartItem key={product.id}>
                    <ImageContainer>
                      <Image
                        src={product.imageUrl}
                        alt=""
                        width={100}
                        height={93}
                      />
                    </ImageContainer>
                    <div>
                      <p>{product.name}</p>
                      <strong>{product.price}</strong>
                      <button
                        type="button"
                        onClick={() => handleRemoveCartItem(product.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </CartItem>
                )
              })
            )}
          </CartItemsWrapper>

          <footer>
            <CartAmount>
              <p>
                Quantidade{' '}
                <span>
                  {shoppingCart.length > 1
                    ? `${shoppingCart.length} itens`
                    : `${shoppingCart.length} item`}
                </span>
              </p>
              <strong>
                Valor Total
                <span>
                  {totalPrice.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </span>
              </strong>
            </CartAmount>
            <FinalShopButton
              type="button"
              disabled={isCheckoutSessionLoading}
              onClick={handleBuyProduct}
            >
              Finalizar compra
            </FinalShopButton>
          </footer>
        </ShoppingCartContainer>
      </SideBar>
    </Overlay>
  )
}
