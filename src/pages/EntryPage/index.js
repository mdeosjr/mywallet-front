import { FormMovs, Button, Input } from '../../components/Form';
import { Container, Title } from '../../components'

function EntryPage() {
    return (
        <Container>
            <Title>
                <h1>Nova entrada</h1>
            </Title>
            <FormMovs>
                <form>
                    <Input
                        placeholder="Valor"
                    />
                    <Input
                        placeholder="Descrição"
                    />
                    <Button>Salvar entrada</Button>
                </form>
            </FormMovs>
        </Container>
    )
}

export default EntryPage;