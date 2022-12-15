import Image from 'next/image'
import Camiseta from '../../assets/1.png'
import { AiOutlineClose } from 'react-icons/ai'
import {
  CartAmount,
  SideBar,
  CartItem,
  CartItemsWrapper,
  FinalShopButton,
  ImageContainer,
  ShoppingCartContainer
} from './styles'

interface active {
  sideBarIsActive: (arg: boolean) => void
}

export function ShoppingCart({ sideBarIsActive }: active) {
  function handleSetSideBarActive() {
    sideBarIsActive(false)
  }

  return (
    <SideBar>
      <ShoppingCartContainer>
        <h1>Sacola de compras</h1>
        <AiOutlineClose
          className="closeIcon"
          onClick={handleSetSideBarActive}
        />
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
      </ShoppingCartContainer>
    </SideBar>
  )
}
