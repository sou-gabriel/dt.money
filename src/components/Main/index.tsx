import { useContext } from 'react'
import { TransactionsContext } from 'TransactionsContext'

import { Summary } from 'components/Summary'
import { TransactionTable } from 'components/TransactionTable'

import noDataImagePath from 'assets/no-data.svg'

import { Container, EmptyTransactionContainer, MessageNoTransaction } from './styles'

export const Main = () => {
  const { transactions } = useContext(TransactionsContext)

  if (!transactions.length) {
    return (
      <EmptyTransactionContainer>
        <MessageNoTransaction>
          <img src={noDataImagePath} alt='Prancheta' />
          💸 Não há transações registradas
        </MessageNoTransaction>
      </EmptyTransactionContainer>
    )
  }

  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}
