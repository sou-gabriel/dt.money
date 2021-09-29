import { Container, Card, FullSummaryCard, Header, Type, Amount } from './styles'

import incomeIconPath from 'assets/income.svg'
import outcomeIconPath from 'assets/outcome.svg'
import totalIconPath from 'assets/total.svg'

export const Summary = () => {
  return (
    <Container>
      <Card>
        <Header>
          <Type>Entradas</Type>
          <img src={incomeIconPath} alt='Entradas' />
        </Header>

        <Amount>R$ 17.400,00</Amount>
      </Card>

      <Card>
        <Header>
          <Type>Saídas</Type>
          <img src={outcomeIconPath} alt='Saídas' />
        </Header>

        <Amount>R$ 1.259,00</Amount>
      </Card>

      <FullSummaryCard isItAPositiveTotal>
        <Header>
          <Type>Total</Type>
          <img src={totalIconPath} alt='Total' />
        </Header>

        <Amount>R$ 16.141,00</Amount>
      </FullSummaryCard>
    </Container>
  )
}
