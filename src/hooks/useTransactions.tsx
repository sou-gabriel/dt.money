import {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'
import localforage from 'localforage'

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

type Transaction = {
  id: string
  title: string
  type: 'deposit' | 'withdraw'
  price: number
  category: string
  createdAt: Date
}

const TransactionsContext =
  createContext<PropsTransactionsContext>({} as PropsTransactionsContext)

export const TransactionsProvider = (props: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transactions[]>([])

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
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)
  return context
}
