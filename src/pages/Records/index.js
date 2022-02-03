import { Title, Container, Registry, BankMovs } from '../../components';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import exit from '../../assets/images/Vector.svg';
import entry from '../../assets/images/entry.svg';
import debt from '../../assets/images/debt.svg';

function RecordsPage() {
    const { user } = useContext(UserContext)
    let navigate = useNavigate();

    function toLoginPage() {
        navigate("/");
    }

    return (
        <Container>
            <Title>
                <h1>Olá, {user.name}</h1>
                <img onClick={toLoginPage} src={exit} alt="Sair"></img>
            </Title>
            <Registry>Não há registros de <br></br> entrada ou saída</Registry>
            <div className="movements">
                <BankMovs to="/entry-page">
                    <img src={entry} alt="Entrada"></img>
                    Nova<br></br>entrada
                </BankMovs>
                <BankMovs to="/debt-page">
                    <img src={debt} alt="Saída"></img>
                    Nova<br></br>saída
                </BankMovs>
            </div>
        </Container>
    )
}

export default RecordsPage;