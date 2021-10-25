import styled from 'styled-components/macro'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -4.25rem;
  padding: 0 1rem 4rem;
  position: relative;
`

export const EmptyTransactionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 13.25rem);
`

export const MessageNoTransaction = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 80%;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  text-align: center;

  img {
    width: 200px;
    opacity: 0.5;
  }
`

export const ButtonNewTransactionMobile = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 20px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.violetLight};

  @media (max-width: 610px) {
    display: block;
  }
`