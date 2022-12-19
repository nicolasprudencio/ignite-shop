import { styled } from '..'
import Link from 'next/link'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) /2))',
  marginLeft: 'auto',
  overflow: 'hidden',
  minHeight: '100%',

  '&:last-child': {
    marginRight: '1rem'
  }
})

export const Product = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  marginBottom: '2rem',
  display: 'flex',
  width: 696,
  // height: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '5px 20px 10px 5px rgba(0, 0, 0, 0.5)',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '.5rem',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green500'
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,

      backgroundColor: '$green500',
      border: 'none',
      borderRadius: 8,
      transition: 'all 0.2s ease-in-out',

      svg: {
        width: 24,
        height: 24,
        color: '$white'
      },

      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '$green300'
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1
    }
  }
})
