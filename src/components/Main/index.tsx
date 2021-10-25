import { Dispatch, SetStateAction } from 'react'

import { useTransactions } from 'hooks/useTransactions'

import { Summary } from 'components/Summary'
import { TransactionTable } from 'components/TransactionTable'

import noDataImagePath from 'assets/no-data.svg'

import {
  Container,
  EmptyTransactionContainer,
  MessageNoTransaction,
  ButtonNewTransactionMobile,
} from './styles'

type MainProps = {
  setIsTheNewTransactionModalOpen: Dispatch<SetStateAction<boolean>>
}

export const Main = (props: MainProps) => {
  const { transactions } = useTransactions()
  const isNoTransactions = !transactions.length

  return isNoTransactions
    ? (
      <EmptyTransactionContainer>
        <ButtonNewTransactionMobile
          onClick={() => props.setIsTheNewTransactionModalOpen(true)}
        >
          +
        </ButtonNewTransactionMobile>

        <MessageNoTransaction>
          <img src={noDataImagePath} alt='Prancheta' />
          💸 Não há transações registradas
        </MessageNoTransaction>
      </EmptyTransactionContainer>
      )
    : (
      <Container>
        <ButtonNewTransactionMobile
          onClick={() => props.setIsTheNewTransactionModalOpen(true)}
        >
          +
        </ButtonNewTransactionMobile>

        <Summary />
        <TransactionTable />
      </Container>
      )
}
