import { Title, Container, Registry, BankMovs } from '../../components'
import exit from '../../assets/images/Vector.svg';
import entry from '../../assets/images/entry.svg';
import debt from '../../assets/images/debt.svg';

function RecordsPage() {
    return (
        <Container>
            <Title>
                <h1>Olá, Fulano</h1>
                <img src={exit} alt="Sair"></img>
            </Title>
            <Registry>Não há registros de <br></br> entrada ou saída</Registry>
            <div className="movements">
                <BankMovs>
                    <img src={entry} alt="Sair"></img>
                    Nova<br></br>entrada
                </BankMovs>
                <BankMovs>
                    <img src={debt} alt="Sair"></img>
                    Nova<br></br>saída
                </BankMovs>
            </div>
        </Container>
    )
}

export default RecordsPage;