import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDeatils
} from '../../styles/pages/products'

interface productProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: productProps) {
  const { isFallback } = useRouter()
  const [isCheckoutSessionLoading, setIsCheckoutSessionLoading] =
    useState(false)

  if (isFallback) {
    return <p>loading...</p>
  }

  async function handleBuyProduct() {
    try {
      setIsCheckoutSessionLoading(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
      setIsCheckoutSessionLoading(false)
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={520} height={480} />
      </ImageContainer>
      <ProductDeatils>
        <div>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
        </div>

        <p>{product.description}</p>
        <button disabled={isCheckoutSessionLoading} onClick={handleBuyProduct}>
          Colocar na sacola
        </button>
      </ProductDeatils>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}) => {
  const productId = params!.id
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
