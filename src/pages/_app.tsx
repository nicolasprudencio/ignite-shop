import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Image src={logoImg.src} alt="" width={100} height={100} />
      </header>
      <Component {...pageProps} />
    </div>
  )
}
