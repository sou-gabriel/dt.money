import { useState, useContext, Dispatch, SetStateAction, FormEvent } from 'react'
import { TransactionsContext } from 'TransactionsContext'
import { v4 as uuidv4 } from 'uuid'

import incomeIconPath from 'assets/income.svg'
import outcomeIconPath from 'assets/outcome.svg'
import closeIconPath from 'assets/close.svg'

import {
  ModalStyled,
  Form,
  ButtonCloseModal,
  Fieldset,
  Legend,
  Input,
  InputTypeContainer,
  InputTypeButton,
  SubmitButton,
} from './styles'

type NewTransactionModalProps = {
  isTheNewTransactionModalOpen: boolean
  setIsTheNewTransactionModalOpen: Dispatch<SetStateAction<boolean>>
}

ModalStyled.setAppElement('#root')

export const NewTransactionModal = (props: NewTransactionModalProps) => {
  const [transactionType, setTransactionType] =
    useState<'deposit' | 'withdraw'>('deposit')
  const { transactions, setTransactions } = useContext(TransactionsContext)

  const handleCreateNewTransaction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    const newTransaction = {
      id: uuidv4(),
      title: form.transactionTitle.value,
      type: transactionType,
      price: form.price.valueAsNumber,
      category: form.category.value,
      createdAt: new Date(),
    }

    setTransactions([...transactions, newTransaction])
    props.setIsTheNewTransactionModalOpen(false)
  }

  return (
    <ModalStyled
      isOpen={props.isTheNewTransactionModalOpen}
      onRequestClose={() => props.setIsTheNewTransactionModalOpen(false)}
    >
      <Form onSubmit={handleCreateNewTransaction}>
        <ButtonCloseModal
          type='button'
          onClick={() => props.setIsTheNewTransactionModalOpen(false)}
        >
          <img src={closeIconPath} alt='Fechar modal' />
        </ButtonCloseModal>

        <Fieldset>
          <Legend>Cadastrar transação</Legend>

          <Input
            type='text'
            name='transactionTitle'
            placeholder='Título'
            required
          />

          <InputTypeContainer>
            <InputTypeButton
              type='button'
              transactionType={transactionType}
              isActive={transactionType === 'deposit'}
              onClick={() => setTransactionType('deposit')}
            >
              <img src={incomeIconPath} alt='Entrada' />
              <span>Entrada</span>
            </InputTypeButton>

            <InputTypeButton
              type='button'
              transactionType={transactionType}
              isActive={transactionType === 'withdraw'}
              onClick={() => setTransactionType('withdraw')}
            >
              <img src={outcomeIconPath} alt='Saída' />
              <span>Saída</span>
            </InputTypeButton>
          </InputTypeContainer>

          <Input type='number' name='price' placeholder='Preço' required />
          <Input type='text' name='category' placeholder='Categoria' required />

          <SubmitButton type='submit'>Cadastrar</SubmitButton>
        </Fieldset>
      </Form>
    </ModalStyled>
  )
}
