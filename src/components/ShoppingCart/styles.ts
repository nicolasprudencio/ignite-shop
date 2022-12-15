import { styled } from '../../styles/index'

export const SideBar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray800',

  position: 'absolute',
  right: 0,
  top: 0,
  padding: '2rem',
  height: 800,
  minHeight: '100%',
  width: 480,

  zIndex: 1,

  boxShadow: '-20px 0px 60px 0.5px rgba(0, 0, 0, 0.5)',

  h1: {
    fontSize: 20
  },

  footer: {
    marginTop: 150
  },

  transition: 'all .2s ease-in-out',

  variants: {
    active: {
      closed: {
        opacity: 0,
        width: 0
      },

      open: {
        opacity: 1,
        width: '100%'
      }
    }
  }
})

export const ShoppingCartContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  svg: {
    position: 'absolute',
    right: 20,
    top: 20,
    fontSize: 24,

    color: '#8d8d99',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      filter: 'brightness(0.8)',
      cursor: 'pointer'
    }
  }
})

export const CartItemsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: 384,
  alignSelf: 'flex-start',

  marginTop: 32,

  gap: 30
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginRight: 20,

  img: {
    objectFit: 'cover'
  }
})

export const CartItem = styled('div', {
  display: 'flex',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    fontSize: 18,

    gap: 8,

    p: {
      color: '$gray300'
    },

    strong: {
      color: '$gray100'
    },

    button: {
      border: 'none',
      backgroundColor: 'transparent',
      color: '$green500',
      transition: 'all .2s ease-in-out',

      fontWeight: 'bold',
      fontSize: 18,

      '&:hover': {
        color: '$green300',
        cursor: 'pointer'
      }
    }
  }
})

export const CartAmount = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 7,

  p: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  strong: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export const FinalShopButton = styled('button', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: 55,

  width: 384,
  height: 69,
  borderRadius: 8,
  padding: '2rem',

  background: '$green300',
  color: '$white',
  fontSize: 18,
  fontWeight: 'bold',

  border: 'none',

  transition: 'all .2s ease-in-out',

  '&:hover': {
    background: '$green500',
    cursor: 'pointer'
  }
})
