import { useState } from 'react'

import { Header } from 'components/Header'
import { Main } from 'components/Main'
import { NewTransactionModal } from 'components/NewTransactionModal'

import { ThemeProvider } from 'styled-components/macro'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'

export const App = () => {
  const [isTheNewTransactionModalOpen, setIsTheNewTransactionModalOpen] =
    useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header setIsTheNewTransactionModalOpen={setIsTheNewTransactionModalOpen} />
      <Main setIsTheNewTransactionModalOpen={setIsTheNewTransactionModalOpen} />
      <NewTransactionModal
        isTheNewTransactionModalOpen={isTheNewTransactionModalOpen}
        setIsTheNewTransactionModalOpen={setIsTheNewTransactionModalOpen}
      />
    </ThemeProvider>
  )
}
