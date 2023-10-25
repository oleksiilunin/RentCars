import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 колонки */
  grid-gap: 50px 29px; /* Горизонтальна та вертикальна відстань між елементами */
  justify-items: center; /* Центрування елементів по горизонталі */
`;
