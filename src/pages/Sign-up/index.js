import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, StyledLink, Input, Button } from '../../components/Form';
import { TailSpin } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import logo from '../../assets/images/MyWallet.svg';
import axios from 'axios';

function SignUpPage() {
  const [userData, setUserData] = useState({
      name: '',
      email: '',
      password: ''
  });
  const [button, setButton] = useState(true);
  const [input, setInput] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  let navigate = useNavigate();

  function handleInput(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  function registerError(error) {
    alert(error.response.data);
    setButton(true);
    setInput(true);
  }

  function register(e) {
    e.preventDefault();

    if (passwordConfirm !== userData.password) {
      alert('Senhas não conferem!')
      return;
    };

    const promise = 
      axios.post('http://localhost:5000/sign-up',
        {...userData}
      )
    
    setButton(false);
    setInput(false);
    
    promise.then(() => navigate("/"));
    promise.catch(error => registerError(error));
  }

  return (
    <Form>
        <img src={logo} alt="logo"></img>
        <form onSubmit={register}> 
            <Input
              ativo={input} 
              type="text" 
              placeholder="Nome" 
              name="name"
              onChange={handleInput}
              value={userData.name}
            />
            <Input 
              ativo={input}
              type="email" 
              placeholder="E-mail" 
              name="email"
              onChange={handleInput}
              value={userData.email}
            />
            <Input 
              ativo={input}
              type="password" 
              placeholder="Senha" 
              name="password"
              onChange={handleInput}
              value={userData.password}
            />
            <Input 
              ativo={input}
              type="password" 
              placeholder="Confirme sua senha" 
              name="passwordConfirm"
              onChange={e => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
            />
            <Button 
              type="submit"
              ativo={button}>
              {button ? "Cadastrar" 
                : 
                <TailSpin 
                  type="ThreeDots" 
                  color="#FFFFFF" 
                  height={35} width={35} 
                />}
            </Button>
        </form>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Form>
  );
}

export default SignUpPage;