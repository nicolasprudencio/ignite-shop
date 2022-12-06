import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import shirt from '../assets/1.png'
import shirt2 from '../assets/2.png'
import shirt3 from '../assets/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt} alt="" width={520} height={480} />
      </Product>
      <Product>
        <Image src={shirt2} alt="" width={520} height={480} />
      </Product>
      <Product>
        <Image src={shirt3} alt="" width={520} height={480} />
      </Product>
    </HomeContainer>
  )
}
