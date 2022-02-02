import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Form = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 36px;
    
    img {
        width: 147px;
        height: 50px;
    }
   
    form {
        display: flex;
        flex-direction: column;
        gap: 13px;
    }
`;

const FormMovs = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 36px;
    
    form {
        display: flex;
        flex-direction: column;
        gap: 13px;
    }
`;

const Input = styled.input`
    all: unset;

    width: 326px;
    height: 58px;
    padding-left: 16px;
    box-sizing: border-box;

    background: ${props => props.ativo ? '#FFFFFF' : '#F2F2F2'};
    border-radius: 5px;
    font: normal 20px 'Raleway';
    color: ${props => props.ativo ? '#000000' : '#AFAFAF'};
    ${props => !props.ativo && "pointer-events: none;"}
    &::placeholder {
        font: normal 20px 'Raleway';
        line-height: 23px;
    
        color: #000000;
    }
`;

const Button = styled.button`
    all: unset;
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    font: bold 20px 'Raleway';
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    ${props => !props.ativo && "pointer-events: none;"}
    ${props => !props.ativo && "opacity: 0.7;"}
`;

const StyledLink = styled(Link)`
    all: unset;
    font: bold 15px 'Raleway';
    line-height: 18px;

    cursor: pointer;

    color: #FFFFFF;
`;

export {
    Form,
    FormMovs,
    StyledLink,
    Input,
    Button
}