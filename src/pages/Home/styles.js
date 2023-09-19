import { styled } from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
    width: 100%;

    input {
        width: 100%;
        background: #FFF;
        border: none;
        border-radius: 25px;
        height: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        outline: 0;
        padding: 0 16px;

        &::placeholder {
            color: ${({ theme }) => theme.colors.gray.light};
        }
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;

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

export const ListHeader = styled.header`
    margin-top: 24px;
    margin-bottom: 8px;

    button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;

        span {
            margin-right: 8px;
            color: ${({ theme }) => theme.colors.primary.main};
            font-weight: bold;
        }

        img {
            transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
            transition: transform 300ms ease-in-out;
        }
    }
`;

export const Card = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 16px;
    }

    .info {
        .contact-name {
            display: flex;
            align-items: center;

            small {
                background-color: ${({ theme }) => theme.colors.primary.lighter};
                color: ${({ theme }) => theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding: 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }

        span {
            display: block;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray.light};
            font-weight: bold;
        }
    }

    .actions {
            display: flex;
            align-items: center;

            button {
                background: transparent;
                border: none;
                margin-left: 8px;
            }
        }
`;
