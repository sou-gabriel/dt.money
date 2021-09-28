import { Container, Th, Td } from './styles'

export function TransactionTable () {
  return (
    <Container>
      <thead>
        <tr>
          <Th>Título</Th>
          <Th>Preço</Th>
          <Th>Categoria</Th>
          <Th>Data</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Hamburguer</Td>
          <Td transactionType='withdraw'>- R$ 59,00</Td>
          <Td>Alimentação</Td>
          <Td>10/04/2021</Td>
        </tr>
        <tr>
          <Td>Monitor</Td>
          <Td transactionType='deposit'>R$ 1000.00</Td>
          <Td>Venda</Td>
          <Td>15/04/2021</Td>
        </tr>
      </tbody>
    </Container>
  )
}
