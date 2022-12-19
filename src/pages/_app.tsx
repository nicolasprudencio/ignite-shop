import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { ShoppingCartProvider } from '../contexts/CartContext'
import { HeaderComponent } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Container>
        <HeaderComponent />
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}
