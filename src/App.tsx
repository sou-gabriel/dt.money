import { useState, useEffect, useContext } from 'react'
import localforage from 'localforage'
import { TransactionsContext } from 'TransactionsContext'

import { Header } from 'components/Header'
import { Main } from 'components/Main'
import { NewTransactionModal } from 'components/NewTransactionModal'

import { ThemeProvider } from 'styled-components/macro'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'

type Transaction = {
  id: string
  title: string
  type: 'deposit' | 'withdraw'
  price: number
  category: string
  createdAt: Date
}

export const App = () => {
  const [isTheNewTransactionModalOpen, setIsTheNewTransactionModalOpen] =
    useState(false)
  const { transactions, setTransactions } = useContext(TransactionsContext)

  useEffect(() => {
    localforage.setItem('transactions', transactions)
  }, [transactions])

  useEffect(() => {
    const updateStateWithLocalforageTransactions = async () => {
      const transactionsFromLocalforage = await localforage
        .getItem<Promise<Transaction[]>>('transactions')

      if (transactionsFromLocalforage) {
        setTransactions(transactionsFromLocalforage)
      }
    }

    updateStateWithLocalforageTransactions()
  }, [setTransactions])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header setIsTheNewTransactionModalOpen={setIsTheNewTransactionModalOpen} />
      <Main />
      <NewTransactionModal
        isTheNewTransactionModalOpen={isTheNewTransactionModalOpen}
        setIsTheNewTransactionModalOpen={setIsTheNewTransactionModalOpen}
      />
    </ThemeProvider>
  )
}
