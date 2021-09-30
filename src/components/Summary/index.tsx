import { useContext } from 'react'
import { TransactionsContext } from 'TransactionsContext'

import { Container, Card, FullSummaryCard, Header, Type, Amount } from './styles'

import incomeIconPath from 'assets/income.svg'
import outcomeIconPath from 'assets/outcome.svg'
import totalIconPath from 'assets/total.svg'

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext)

  const { deposit, withdraw, total } = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      return {
        ...acc,
        deposit: acc.deposit + transaction.price,
        total: acc.total + transaction.price,
      }
    }

    return {
      ...acc,
      withdraw: acc.withdraw - transaction.price,
      total: acc.total - transaction.price,
    }
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0,
  })

  const formatValues = (values: number[]) => {
    return values.map(value => {
      return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(value)
    })
  }

  const [depositFormatted, withdrawFormatted, totalFormatted] =
    formatValues([deposit, withdraw, total])

  return (
    <Container>
      <Card>
        <Header>
          <Type>Entradas</Type>
          <img src={incomeIconPath} alt='Entradas' />
        </Header>

        <Amount>{depositFormatted}</Amount>
      </Card>

      <Card>
        <Header>
          <Type>Saídas</Type>
          <img src={outcomeIconPath} alt='Saídas' />
        </Header>

        <Amount>{withdrawFormatted}</Amount>
      </Card>

      <FullSummaryCard isItAPositiveTotal={total >= 0}>
        <Header>
          <Type>Total</Type>
          <img src={totalIconPath} alt='Total' />
        </Header>

        <Amount>{totalFormatted}</Amount>
      </FullSummaryCard>
    </Container>
  )
}
