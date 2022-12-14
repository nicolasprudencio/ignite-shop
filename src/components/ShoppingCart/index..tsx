import { CartAmount, CartContainer, CartItemsWrapper } from './styles'

export function ShoppingCart() {
  return (
    <CartContainer>
      <h1>Sacola de compras</h1>
      <CartItemsWrapper></CartItemsWrapper>
      <CartAmount>
        <p>
          Quantidade <span>3 itens</span>
        </p>
        <strong>
          Valor Total<span>R$ 270,00</span>
        </strong>
      </CartAmount>
    </CartContainer>
  )
}
