import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: ${({ $justifyContent }) => $justifyContent};
    align-items: center;
    margin-top: 32px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray.lighter};
    padding-bottom: 16px;

    strong {
        color: ${({ theme }) => theme.colors.gray.dark};
        font-size: 24px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        border-radius: 4px;
        padding: 8px 16px;
        transition: all 0.2s ease-in;

        &:hover {
            color: ${({ theme }) => theme.colors.primary.lighter};
            border: 2px solid ${({ theme }) => theme.colors.primary.lighter};
            background-color: ${({ theme }) => theme.colors.primary.main};
        }
    }
`;
