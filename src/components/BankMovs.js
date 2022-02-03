import styled from 'styled-components';
import { Link } from 'react-router-dom'

const BankMovs = styled(Link)`
    all: unset;
    width: 155px;
    height: 114px;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: #A328D6;
    border-radius: 5px;

    cursor: pointer;

    font: bold 17px 'Raleway';
    line-height: 20px;

    color: #FFFFFF;

    img {
        width: 25px;
        height: 25px;
    }
`

export default BankMovs