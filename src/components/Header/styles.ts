import styled from 'styled-components/macro'

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
`

export const ButtonNewTransaction = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 0.3125rem;
  font-weight: 500;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.violetLight};
  transition: filter 100ms;

  &:hover {
    filter: brightness(0.9);
  }
`
