import styled from '@emotion/styled';

export const Button = styled.button`
  width: 80px;
  padding: 5px 10px;
  font-size: 16px;
  :not(:last-child) {
    margin-right: 5px;
  }
  :first-letter {
    text-transform: capitalize;
  }
`;
