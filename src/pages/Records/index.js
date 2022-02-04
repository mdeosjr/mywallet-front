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

    function toLoginPage() {
        navigate("/");
    };

    function loadRecords() {
        api.getRecords(user.token).then(response => {
            setUserData(response.data);
            console.log(response.data);
            setIsLoading(false);
        })
    };

    useEffect(() => {loadRecords()}, []);

    return (
        <Container>
            <Title>
                <h1>Olá, {user.name}</h1>
                <img onClick={toLoginPage} src={exit} alt="Sair"></img>
            </Title>
            <Registry>
            {isLoading ? <span>Carregando...</span> : 
                (userData.length === 0 ? <span>Não há registros de<br></br>entrada ou saída</span>
                :
                userData.reverse().map(record => 
                    <Record type={record.type}>
                        <div className="notValues">
                            <p className="date">{record.date}</p> 
                            <p className="description">{record.description}</p>
                        </div>
                        <p className="value">{record.value}</p>
                    </Record>))
            }
            </Registry>
            <div className="movements">
                <BankMovs onClick={() => navigate("/entry-page")}>
                    <img src={entry} alt="Entrada"></img>
                    Nova<br></br>entrada
                </BankMovs>
                <BankMovs onClick={() => navigate("/debt-page")}>
                    <img src={debt} alt="Saída"></img>
                    Nova<br></br>saída
                </BankMovs>
            </div>
        </Container>
    )
}

export default RecordsPage;