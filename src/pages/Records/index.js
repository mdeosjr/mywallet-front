import { Title, Container, Registry, BankMovs } from '../../components';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import { Record } from '../../components';
import api from '../../services/api';
import exit from '../../assets/images/Vector.svg';
import entry from '../../assets/images/entry.svg';
import debt from '../../assets/images/debt.svg';

function RecordsPage() {
    const { user } = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let navigate = useNavigate();
    let balanceValue = 0;

    function toLoginPage() {
        navigate("/");
    };

    function loadRecords() {
        api.getRecords(user.token).then(response => {
            setUserData(response.data);
            setIsLoading(false);
        })
    };

    useEffect(() => {loadRecords()}, []);

    if (isLoading) {
        return <span>Carregando...</span>
    }

    for (const record of userData) {
        if (record.type === 'entry') {
            balanceValue += parseFloat(record.value)
        }

        if (record.type === 'debt') {
            balanceValue -= parseFloat(record.value)
        }
    }


    return (
        <Container>
            <Title>
                <h1>Olá, {user.name}</h1>
                <img onClick={toLoginPage} src={exit} alt="Sair"></img>
            </Title>
            <Registry balance={balanceValue}>
            {
            userData.length === 0 ? <span>Não há registros de<br/>entrada ou saída</span>
            :
            <>
            {userData.reverse().map(record => 
                    <Record type={record.type}>
                        <div className="notValues">
                            <p className="date">{record.date}</p> 
                            <p className="description">{record.description}</p>
                        </div>
                        <p className="value">{parseFloat(record.value).toFixed(2)}</p>
                    </Record>)}
                    <div className="registryFooter">
                        <p className="balance">SALDO</p>
                        <p className="balanceValue">{parseFloat(balanceValue).toFixed(2)}</p>
                    </div>
            </>
            }
            </Registry>
            <div className="movements">
                <BankMovs onClick={() => navigate("/entry-page")}>
                    <img src={entry} alt="Entrada"></img>
                    Nova<br/>entrada
                </BankMovs>
                <BankMovs onClick={() => navigate("/debt-page")}>
                    <img src={debt} alt="Saída"></img>
                    Nova<br/>saída
                </BankMovs>
            </div>
        </Container>
    )
}

export default RecordsPage;