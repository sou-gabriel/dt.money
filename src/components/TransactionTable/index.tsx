import { MouseEvent } from 'react'
import { useTransactions } from 'hooks/useTransactions'

import trashIconPath from 'assets/trash.png'

import { Container, Th, Td, ButtonTransactionDelete, TrashIcon } from './styles'

export const TransactionTable = () => {
  const { transactions, setTransactions } = useTransactions()

  const formatPrice = (price: number, type: 'deposit' | 'withdraw') => {
    const priceFormatted = Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)

    return type === 'withdraw' ? `- ${priceFormatted}` : priceFormatted
  }

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('pt-br').format(date)

  const handleTransactionDelete = (event: MouseEvent<HTMLButtonElement>) => {
    setTransactions(prevTransactions => {
      return prevTransactions.filter(transaction =>
        transaction.id !== (event.target as HTMLButtonElement).dataset.js)
    })
  }

  return (
    <Container>
      <thead>
        <tr>
          <Th>Título</Th>
          <Th>Preço</Th>
          <Th>Categoria</Th>
          <Th>Data</Th>
          <Th />
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          const priceFormatted = formatPrice(transaction.price, transaction.type)
          const dateFormatted = formatDate(transaction.createdAt)

          return (
            <tr key={transaction.id}>
              <Td>{transaction.title}</Td>
              <Td transactionType={transaction.type}>{priceFormatted}</Td>
              <Td>{transaction.category}</Td>
              <Td>{dateFormatted}</Td>
              <Td>
                <ButtonTransactionDelete
                  onClick={handleTransactionDelete}
                  data-js={transaction.id}
                  title='Excluir transação'
                >
                  <TrashIcon
                    src={trashIconPath}
                    alt='Excluir transação' data-js={transaction.id}
                  />
                </ButtonTransactionDelete>
              </Td>
            </tr>
          )
        })}
      </tbody>
    </Container>
  )
}
