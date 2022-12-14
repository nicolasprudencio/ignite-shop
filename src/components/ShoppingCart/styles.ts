import { styled } from '../../styles/index'

export const CartContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray800',

  position: 'absolute',
  right: 0,
  height: '180%',
  minHeight: 1450,
  width: 480,

  zIndex: 2,

  boxShadow: '-20px 0px 60px 0.5px rgba(0, 0, 0, 0.5)'
})

export const CartItemsWrapper = styled('div', {})

export const CartAmount = styled('footer', {})

export const FinalShopButton = styled('button', {})
