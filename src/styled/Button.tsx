import styled from 'styled-components';

const Button = styled.button`
    color: lightskyblue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid lightskyblue;
    border-radius: 3px;
    transition: background-color 0.1s, color 0.1s;

    :focus {
        outline: 0;
    }

    :hover {
        background-color: lightskyblue;
        color: white;
    }
`;

export { Button };
