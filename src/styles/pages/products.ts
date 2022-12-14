import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
  marginBottom: '2rem'
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const ProductDeatils = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  div: {
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    marginTop: 'auto',

    width: '100%',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    transition: 'all .2s ease-in-out',

    '&:disabled': {
      cursor: 'not-allowed',
      filter: 'brightness(.8)'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    }
  }
})
