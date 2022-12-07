import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDeatils
} from '../../styles/pages/products'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDeatils>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut libero
          labore unde corrupti adipisci, dolorem nihil facilis accusamus quas a,
          alias veniam. Itaque accusantium tempora iure perferendis sapiente,
          animi reiciendis.
        </p>
        <button>Comprar agora</button>
      </ProductDeatils>
    </ProductContainer>
  )
}
