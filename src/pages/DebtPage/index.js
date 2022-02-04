import { FormMovs, Button, Input } from '../../components/Form';
import { Container, Title } from '../../components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import dayjs from 'dayjs';
import api from '../../services/api';
import UserContext from '../../contexts/userContext';

function EntryPage() {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [input, setInput] = useState(true);
    const [button, setButton] = useState(true);
    let navigate = useNavigate();
    const { user } = useContext(UserContext);

    const registryData = ({
        value: value,
        description: description,
        type: 'debt',
        date: dayjs().format('DD/MM')
    });

    function saveDebt(e) {
        e.preventDefault();

        setInput(false);
        setButton(false);

        const promise = api.postRegistry(registryData, user.token);
        promise.then(() => navigate("/records"))
        promise.catch(error => console.log(error))
    }
    
    return (
        <Container>
            <Title>
                <h1>Nova entrada</h1>
            </Title>
            <FormMovs>
                <form onSubmit={saveDebt}>
                    <Input
                        ativo={input}
                        type="number" 
                        placeholder="Valor"
                        name="value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Input
                        ativo={input}
                        type="text" 
                        placeholder="Descrição"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button 
                        type="submit"
                        ativo={button}
                    >
                        {button ? "Salvar saída" 
                        : 
                        <TailSpin 
                            color="#FFFFFF" 
                            height={35} width={35} 
                        />}
                    </Button>
                    <Button 
                        type="button"
                        onClick={() => navigate("/records")}
                        ativo={button}
                    >
                        {button ? "Voltar" 
                        : 
                        <TailSpin 
                            color="#FFFFFF" 
                            height={35} width={35} 
                        />}
                    </Button>
                </form>
            </FormMovs>
        </Container>
    )
}

export default EntryPage;