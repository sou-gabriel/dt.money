import Modal from 'react-modal'

import styled from 'styled-components/macro'

import { transparentize } from 'polished'

type InputTypeButtonProps = {
  isActive: boolean
  transactionType: 'deposit' | 'withdraw'
}

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);
`

export const Form = styled.form`
  width: 100%;
  max-width: 576px;
  padding: 4rem 3rem;
  border-radius: 0.25rem;
  position: relative;
  background-color: ${props => props.theme.colors.background};
`

export const ButtonCloseModal = styled.button`
  position: absolute;
  right: 1.3125rem;
  top: 1.3125rem;
`

export const Fieldset = styled.fieldset`
  border: none;
`

export const Legend = styled.legend`
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${props => props.theme.colors.title};
`

export const Input = styled.input`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid ${props => props.theme.colors.inputBorder};
  border-radius: 0.3125rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: ${props => props.theme.colors.inputBackground};

  & + & {
    margin-top: 1rem;
  }

  &::placeholder {
    color: ${props => props.theme.colors.text};
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 1.25rem 0;
  border-radius: 0.3125rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
`

export const InputTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 1rem 0;
`

export const InputTypeButton = styled.button<InputTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
  height: 4rem;
  border: 1.5px solid ${props => props.isActive
    ? ({
      deposit: transparentize(0.5, props.theme.colors.green),
      withdraw: transparentize(0.5, props.theme.colors.red),
    })[props.transactionType]
    : props.theme.colors.buttonBorder
};
  border-radius: 0.3125rem;
  background-color: ${props => props.theme.colors.background};
  font-weight: 400;
  font-size: 1rem;
  color: ${props => props.theme.colors.title};
  background-color: ${props => props.isActive
    ? ({
        deposit: transparentize(0.9, props.theme.colors.green),
        withdraw: transparentize(0.9, props.theme.colors.red),
      })[props.transactionType]
    : 'transparent'}
  ;
`
