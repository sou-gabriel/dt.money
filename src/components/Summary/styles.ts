import styled from 'styled-components/macro'

type FullSummaryCardProps = {
  isItAPositiveTotal?: boolean
}

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 610px) {
    flex-direction: column;
    gap: 1rem
  }
`

export const Card = styled.div`
  width: 22rem;
  padding: 1.574375rem 1.291875rem 1.133125rem 2rem;
  border-radius: 0.3125rem;
  color: ${props => props.theme.colors.title};
  background-color: ${props => props.theme.colors.white};

  @media (max-width: 610px) {
    width: 100%;
  }
`

export const FullSummaryCard = styled(Card)<FullSummaryCardProps>`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.isItAPositiveTotal
    ? props.theme.colors.green
    : props.theme.colors.red
  };
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.633125rem;
`

export const Amount = styled.strong`
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.375rem;
  color: inherit;
`

export const Type = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: inherit;
`
