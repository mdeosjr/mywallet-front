import styled from 'styled-components';

const Record = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .date {
        font: normal 16px 'Raleway';
        line-height: 19px;

        color: #C6C6C6;
    }

    .description {
        font: normal 16px 'Raleway';
        line-height: 19px;

        color: #000000;
    }

    .value {
        font: normal 16px 'Raleway';
        line-height: 19px;

        color: ${props => props.type === "entry" ? '#03AC00' : '#C70000'};
    }

    .notValues {
        display: flex;
        gap: 8px;
    }
`

export default Record;