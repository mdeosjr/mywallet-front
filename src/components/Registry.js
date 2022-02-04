import styled from 'styled-components';

const Registry = styled.div`
    width: 326px;
    height: 446px;
    margin-top: 26px;
    padding: 23px 12px 12px;

    display: flex;
    flex-direction: column;
    gap: 18px;
    position: relative;

    background: #FFFFFF;
    border-radius: 5px;

    font: normal 20px 'Raleway';
    line-height: 23px;
    text-align: center;

    color: #868686;

    span {
        margin: auto;
    }

    .balance {
        font: bold 17px 'Raleway';
        line-height: 20px;

        color: #000000;
    }

    .balanceValue {
        font: normal 17px 'Raleway';
        line-height: 20px;

        color: ${props => props.balance > 0 ? '#03AC00' : '#C70000'};
    }

    .registryFooter {
        display: flex;
        justify-content: space-between;
        width: 93%;

        position: absolute;
        bottom: 12px;
    }
`

export default Registry;