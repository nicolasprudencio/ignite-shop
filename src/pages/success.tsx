import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    images: string[]
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <div>
        {products.map((product) => {
          return (
            <ImageContainer key={product.name}>
              <Image src={product.images[0]} width={120} height={110} alt="" />
            </ImageContainer>
          )
        })}
      </div>
      <p>
        Uhuul! <strong>{customerName}</strong>, sua compra de{' '}
        {products.length > 1
          ? `${products.length} camisetas`
          : `${products.length} camiseta`}{' '}
        já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details!.name
  // const product = session.line_items!.data[0].price!.product as Stripe.Product
  const products = session.line_items!.data.map((item) => {
    return item.price!.product as Stripe.Product
  })

  return {
    props: {
      customerName,
      products
    }
  }
}
