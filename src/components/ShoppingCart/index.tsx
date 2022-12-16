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

interface active {
  sideBarIsActive: (arg: boolean) => void
}

export function ShoppingCart({ sideBarIsActive }: active) {
  const { setShoppingCart, shoppingCart } = useCart()

  function handleSetSideBarActive() {
    sideBarIsActive(false)
  }

  function handleRemoveCartItem(id: string) {
    const newCart = shoppingCart.filter((product) => product.id !== id)

    setShoppingCart(newCart)
  }

  return (
    <Overlay>
      <SideBar
        initial={{ opacity: 0, x: 480 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ velocity: '0.2s' }}
      >
        <ShoppingCartContainer>
          <h1>Sacola de compras</h1>
          <AiOutlineClose
            className="closeIcon"
            onClick={() => handleSetSideBarActive}
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
                Quantidade <span>3 itens</span>
              </p>
              <strong>
                Valor Total<span>R$ 270,00</span>
              </strong>
            </CartAmount>
            <FinalShopButton>Finalizar compra</FinalShopButton>
          </footer>
        </ShoppingCartContainer>
      </SideBar>
    </Overlay>
  )
}
