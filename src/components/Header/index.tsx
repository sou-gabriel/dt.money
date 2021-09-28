import { Dispatch, SetStateAction } from 'react'

import logoIconPath from 'assets/logo.svg'

import { Container, InnerContainer, H1, ButtonNewTransaction } from './styles'

type HeaderProps = {
  setIsTheNewTransactionModalOpen: Dispatch<SetStateAction<boolean>>
}

export function Header (props: HeaderProps) {
  return (
    <Container>
      <InnerContainer>
        <H1>
          <img src={logoIconPath} alt='dt.money' />
        </H1>

        <ButtonNewTransaction
          onClick={() => props.setIsTheNewTransactionModalOpen(true)}
        >
          Nova transação
        </ButtonNewTransaction>
      </InnerContainer>
    </Container>
  )
}
