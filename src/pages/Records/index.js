import { Title, Container, Registry, BankMovs } from '../../components';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import { Record } from '../../components';
import api from '../../services/api';
import exit from '../../assets/images/Vector.svg';
import entry from '../../assets/images/entry.svg';
import debt from '../../assets/images/debt.svg';

function RecordsPage({setPage}) {
    const { user } = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let navigate = useNavigate();
    let balanceValue = 0;

    function toLoginPage() {
        navigate("/");
    };

    function loadRegistry() {
        api.getRegistry(user.token).then(response => {
            setUserData(response.data);
            setIsLoading(false);
        }).catch(() => {
            alert("Usuário e/ou senha incorretos!");
            navigate("/");
        });
    };

    function toMoveRecords(type) {
        setPage(type);
        navigate("/movements-page")
    }

    function deleteRegistry(id) {
        const answer = window.confirm("Deseja deletar este registro?");

        if (answer) {
            api.deleteRegistry(id, user.token).then(() => loadRegistry())
        }
    }
    
    // eslint-disable-next-line
    useEffect(() => {loadRegistry()}, []);

    if (isLoading) {
        return <h1>Carregando...</h1>
    }

    for (const record of userData) {
        if (record.type === 'entry') {
            balanceValue += parseFloat(record.value)
            console.log(typeof record.value)
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
                    <Record key = {record._id} type={record.type}>
                        <div className="notValues">
                            <p className="date">{record.date}</p> 
                            <p className="description">{record.description}</p>
                        </div>
                        <div className="rightSideValue">
                            <p className="value">{parseFloat(record.value).toFixed(2)}</p>
                            <p className="deleteRegistry" onClick={() => deleteRegistry(record._id)}>x</p>
                        </div>
                    </Record>)
            }
                    <div className="registryFooter">
                        <p className="balance">SALDO</p>
                        <p className="balanceValue">{parseFloat(balanceValue).toFixed(2)}</p>
                    </div>
            </>
            }
            </Registry>
            <div className="movements">
                <BankMovs onClick={() => toMoveRecords('entry')}>
                    <img src={entry} alt="Entrada"></img>
                    Nova<br/>entrada
                </BankMovs>
                <BankMovs onClick={() => toMoveRecords('debt')}>
                    <img src={debt} alt="Saída"></img>
                    Nova<br/>saída
                </BankMovs>
            </div>
        </Container>
    )
}

export default RecordsPage;