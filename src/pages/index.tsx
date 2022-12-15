import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import { HiOutlineShoppingBag } from 'react-icons/hi'

import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.25,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        const productId = product.id
        const productImage = product.imageUrl
        const productName = product.name
        const productPrice = product.price

        return (
          <Product
            prefetch={false}
            href={`/products/${productId}`}
            key={productId}
            className="keen-slider__slide"
          >
            <Image src={productImage} alt="" width={520} height={480} />
            <footer>
              <div>
                <strong>{productName}</strong>
                <span>{productPrice}</span>
              </div>
              <button>
                <HiOutlineShoppingBag />
              </button>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}
