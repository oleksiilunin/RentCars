import styled from 'styled-components';

export const Button = styled.button`
  /* all: unset; */
  display: inline-block;

  border: 0;

  cursor: pointer;

  color: var(--accent-color);
  background-color: inherit;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  text-decoration-line: underline;

  transition: all 250ms var(--cubic-bezier);

  &:hover,
  &:focus {
    color: var(--accent-hover);
  }
`;
