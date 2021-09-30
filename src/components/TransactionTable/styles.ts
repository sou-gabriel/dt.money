import styled from 'styled-components/macro'

type TDProps = {
  transactionType?: 'deposit' | 'withdraw'
}

export const Container = styled.table`
  width: 100%;
  margin-top: 4rem;
  border-spacing: 0 0.5rem;
`

export const Th = styled.th`
  padding: 1rem 2rem;
  font-weight: 400;
  color: ${props => props.theme.colors.text};
  text-align: left;
  line-height: 1.5rem;
`

export const Td = styled.td<TDProps>`
  padding: 1rem 2rem;
  border: 0;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};

  &:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  &:last-child {
    display: flex;
    justify-content: center;
    padding-left: 0;
    border-radius: 0 .25rem .25rem 0;
    text-align: center;
  }

  &:nth-child(1) {
    color: ${props => props.theme.colors.title};
  }

  &:nth-child(2) {
    color: ${props => props.transactionType === 'deposit'
      ? props => props.theme.colors.green
      : props.theme.colors.red
    };
  }
`

export const ButtonTransactionDelete = styled.button`
  background: transparent;
`

export const TrashIcon = styled.img`
`
