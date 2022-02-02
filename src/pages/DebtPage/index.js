import { FormMovs, Button, Input } from '../../components/Form';
import { Container, Title } from '../../components'

function DebtPage() {
    return (
        <Container>
            <Title>
                <h1>Nova saída</h1>
            </Title>
            <FormMovs>
                <form>
                    <Input
                        placeholder="Valor"
                    />
                    <Input
                        placeholder="Descrição"
                    />
                    <Button>Salvar saída</Button>
                </form>
            </FormMovs>
        </Container>
    )
}

export default DebtPage;