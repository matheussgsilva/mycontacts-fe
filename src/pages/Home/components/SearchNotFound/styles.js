import styled from 'styled-components';

export const Conatainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: start;

  span {
    color: ${({ theme }) => theme.colors.gray.light};
    margin-left: 24px;
    text-align: center;
    word-break: break-word;
  }
`;
