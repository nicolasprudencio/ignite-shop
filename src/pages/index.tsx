import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import shirt from '../assets/1.png'
import shirt2 from '../assets/2.png'
import shirt3 from '../assets/3.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 35,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 35,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 35,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 35,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
