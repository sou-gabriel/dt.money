import { useTransactions } from 'hooks/useTransactions'

import { Summary } from 'components/Summary'
import { TransactionTable } from 'components/TransactionTable'

import noDataImagePath from 'assets/no-data.svg'

import { Container, EmptyTransactionContainer, MessageNoTransaction } from './styles'

export const Main = () => {
  const { transactions } = useTransactions()
  const isNoTransactions = !transactions.length

  return isNoTransactions
    ? (
      <EmptyTransactionContainer>
        <MessageNoTransaction>
          <img src={noDataImagePath} alt='Prancheta' />
          💸 Não há transações registradas
        </MessageNoTransaction>
      </EmptyTransactionContainer>
      )
    : (
      <Container>
        <Summary />
        <TransactionTable />
      </Container>
      )
}
