import styled, { css } from 'styled-components';
import '../../css/variables.css';

export const ButtonStyled = styled.button`
  width: 100%;

  ${props =>
    props.$searchButtonStyle &&
    css`
      width: 136px;
      height: 48px;
      padding: 14px auto;
    `}

  ${props =>
    props.$learnMoreButtonStyle &&
    css`
      width: auto;
      height: 44px;
      padding: 14px auto;
    `}

  ${props =>
    props.$rentalCarButtonStyle &&
    css`
      width: 168px;
      height: 44px;
      padding: 12px 50px;
      `}

  ${props =>
    props.$swiperCardButton &&
    css`
      /* width: 168px; */
      /* height: 44px; */
      padding: 14px 50px;
      `}

  ${props =>
    props.$page404Button &&
    css`
      padding: 14px 50px;
      font-size: 50px;
      font-weight: 600;
      line-height: 1.42857; /* 142.857% */
      box-shadow:  rgb(255, 255, 255) 0px 0px 55px;
      `}

    
  border-radius: 12px;
  border: none;

  background-color: var(--button-background-color);

  color: var(--button-text-color);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857; /* 142.857% */

  cursor: pointer;

  transition: background-color 250ms var(--cubic-bezier);

  &:hover,
  :focus {
    background-color: var(--button-background-color-hover);
  }
  ${props =>
    props.disabled &&
    css`
      background-color: var(--disabled-button-background-color);
      cursor: not-allowed;

      &:hover,
      :focus {
        background-color: var(--disabled-button-background-color);
      }
    `}
`;
