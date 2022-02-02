import { useState } from 'react';
import { Form, StyledLink, Input, Button } from '../../components/Form';
import logo from '../../assets/images/MyWallet.svg';

function SignInPage() {
  const [button, setButton] = useState(true);
  const [input, setInput] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form>
        <img src={logo} alt="logo"></img>
        <form>
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
            <Button>Entrar</Button>
        </form>
        <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </Form>
  );
}

export default SignInPage;