import { useState, Dispatch, SetStateAction } from 'react'

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

  return (
    <ModalStyled
      isOpen={props.isTheNewTransactionModalOpen}
      onRequestClose={() => props.setIsTheNewTransactionModalOpen(false)}
    >
      <Form>
        <ButtonCloseModal
          type='button'
          onClick={() => props.setIsTheNewTransactionModalOpen(false)}
        >
          <img src={closeIconPath} alt='Fechar modal' />
        </ButtonCloseModal>

        <Fieldset>
          <Legend>Cadastrar transação</Legend>

          <Input type='text' placeholder='Título' />

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

          <Input type='number' placeholder='Preço' />
          <Input type='text' placeholder='Categoria' />

          <SubmitButton>Cadastrar</SubmitButton>
        </Fieldset>
      </Form>
    </ModalStyled>
  )
}
