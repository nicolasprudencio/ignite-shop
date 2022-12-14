import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto'
})

export const CartButton = styled('button', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,

  backgroundColor: '$gray800',

  border: 'none',
  borderRadius: 8,
  transition: 'all 0.2s ease-in-out',

  svg: {
    width: 24,
    height: 24,
    color: '$gray300'
  },

  '&:hover': {
    cursor: 'pointer',
    filter: 'brightness(1.2)'
  }
})

export const CartAmount = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  top: '-7px',
  right: '-7px',
  width: 30,
  height: 30,

  fontWeight: 'bold',
  fontSize: 14,
  backgroundColor: '$green500',
  color: '$white',

  borderRadius: '50%',
  border: '3px solid $gray900'
})
