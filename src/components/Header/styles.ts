import styled from 'styled-components/macro'
import { transparentize } from 'polished'

export const Container = styled.header`
  height: 13.25rem;
  padding: 2rem 1rem 8.25rem;
  background-color: ${props => props.theme.colors.violet};
`

export const InnerContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const H1 = styled.h1`
  display: inline-flex;

  @media (max-width: 610px) {
    margin: 0 auto;
  }
`

export const ButtonNewTransaction = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 0.3125rem;
  font-weight: 500;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.violetLight};
  transition: all 100ms;

  &:hover {
    background-color: ${props => transparentize(0.5, props.theme.colors.violetLight)};
    transform: scale(1.05);
  }

  @media (max-width: 610px) {
    display: none;
  }
`
