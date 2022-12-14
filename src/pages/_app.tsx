import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { CartAmount, CartButton, Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" width={130} height={52} />
        </Link>
        <CartButton>
          <HiOutlineShoppingBag />
          <CartAmount className="cartAmount">1</CartAmount>
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
