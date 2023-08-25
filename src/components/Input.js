import styled from 'styled-components';

export default styled.input`
    width: 100%;
    background: #FFF;
    border: 2px solid #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    height: 52px;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2 ease-in;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }
`;
