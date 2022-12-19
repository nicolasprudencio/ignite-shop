import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

import Stripe from 'stripe'

import { useCart } from '../../hooks/useCart'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDeatils
} from '../../styles/pages/products'

export interface productProps {
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
  const { shoppingCart, setShoppingCart } = useCart()

  function handleAddCartItem(id: string) {
    const foundProduct = product

    if (!foundProduct) {
      return alert('Produto não encontrado')
    }
    const cartProduct = shoppingCart.find((product) => product)

    if (id === cartProduct?.id) {
      return alert('Item já adicionado a sacola')
    }
    setShoppingCart((oldState) => [...oldState, foundProduct])
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
        <button onClick={() => handleAddCartItem(product.id)}>
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
