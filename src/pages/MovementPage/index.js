import { FormMovs, Button, Input } from '../../components/Form';
import { Container, Title } from '../../components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import dayjs from 'dayjs';
import api from '../../services/api';
import UserContext from '../../contexts/userContext';

function MovementPage({page}) {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [input, setInput] = useState(true);
    const [button, setButton] = useState(true);
    let navigate = useNavigate();
    const { user } = useContext(UserContext);

    const registryData = ({
        value: parseFloat(value),
        description: description,
        type: page,
        date: dayjs().format('DD/MM')
    });

    function saveMove(e) {
        e.preventDefault();

        setInput(false);
        setButton(false);

        const promise = api.postRegistry(registryData, user.token);
        promise.then(() => navigate("/records"))
    }
    
    return (
        <Container>
            <Title>
                <h1>Nova {page === 'entry' ? 'entrada' : 'saída'}</h1>
            </Title>
            <FormMovs>
                <form onSubmit={saveMove}>
                    <Input
                        ativo={input}
                        type="number" 
                        placeholder="Valor"
                        name="value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                    />
                    <Input
                        ativo={input}
                        type="text" 
                        placeholder="Descrição"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <Button 
                        type="submit"
                        ativo={button}
                    >
                        {button ? (page === 'entry' ? 'Salvar entrada' : 'Salvar saída') 
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

export default MovementPage;