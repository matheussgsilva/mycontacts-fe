import { styled } from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
        color: #222;
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
