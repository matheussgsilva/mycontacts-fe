import styled from 'styled-components';

export default styled.button`
    height: 52px;
    padding: 0 16px;
    border: none;
    background: ${({ theme }) => theme.colors.primary.main};
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    transition: background 0.2s ease-in;

    &:hover {
        background: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
    }

    &:disabled {
        background: #CCC;
        cursor: default;
    }
`;
