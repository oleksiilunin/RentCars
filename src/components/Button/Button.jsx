import React from 'react';
import { ButtonStyled } from './Button.styled';

export default function Button(props) {
  return <ButtonStyled {...props}>{props.label}</ButtonStyled>;
}
