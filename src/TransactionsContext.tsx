import { useState, createContext, Dispatch, SetStateAction, ReactNode } from 'react'

type Transactions = {
  id: string
  title: string
  type: 'deposit' | 'withdraw'
  price: number
  category: string
  createdAt: Date
}

type PropsTransactionsContext = {
  transactions: Transactions[]
  setTransactions: Dispatch<SetStateAction<Transactions[]>>
}

type TransactionsProviderProps = {
  children: ReactNode | ReactNode[]
}

export const TransactionsContext = createContext<PropsTransactionsContext>({} as PropsTransactionsContext)

export const TransactionsProvider = (props: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}
