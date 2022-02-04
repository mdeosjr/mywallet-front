import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, StyledLink, Input, Button } from '../../components/Form';
import { TailSpin } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from 'axios';
import logo from '../../assets/images/MyWallet.svg';
import UserContext from '../../contexts/userContext'

function SignInPage() {
  const [button, setButton] = useState(true);
  const [input, setInput] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext)

  function login(e) {
    e.preventDefault();

    const promise = axios.post('http://localhost:5000/sign-in', { 
      email,
      password
    })

    setButton(false);
    setInput(false);

    promise.then(response => loginSucess(response))
    promise.catch(error => loginError(error))
  }

  function loginError(error) {
    alert(error.response.data);
    setButton(true);
    setInput(true);
    setEmail('');
    setPassword('');
  }

  function loginSucess(response) {
    setUser(response.data);
    navigate("/records");
  }

  return (
    <Form>
        <img src={logo} alt="logo"></img>
        <form onSubmit={login}>
            <Input
              ativo={input} 
              type="email" 
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              ativo={input}
              type="password" 
              placeholder="Senha"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              type="submit"
              ativo={button}>
              {button ? "Entrar" 
                : 
                <TailSpin 
                  type="ThreeDots" 
                  color="#FFFFFF" 
                  height={35} width={35} 
                />}
            </Button>
        </form>
        <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </Form>
  );
}

export default SignInPage;