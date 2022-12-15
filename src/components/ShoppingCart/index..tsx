import Image from 'next/image'
import Camiseta from '../../assets/1.png'
import {
  CartAmount,
  CartContainer,
  CartItem,
  CartItemsWrapper,
  FinalShopButton,
  ImageContainer
} from './styles'

export function ShoppingCart() {
  return (
    <CartContainer>
      <h1>Sacola de compras</h1>
      <CartItemsWrapper>
        <CartItem>
          <ImageContainer>
            <Image src={Camiseta} alt="" width={100} height={93} />
          </ImageContainer>
          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <ImageContainer>
            <Image src={Camiseta} alt="" width={100} height={93} />
          </ImageContainer>
          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <ImageContainer>
            <Image src={Camiseta} alt="" width={100} height={93} />
          </ImageContainer>
          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
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
    </CartContainer>
  )
}
