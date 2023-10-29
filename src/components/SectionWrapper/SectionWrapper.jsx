import React from 'react';
import { SectionStyled } from './SectionWrapper.styled';

export default function SectionWrapper(props) {
  return <SectionStyled>{props.children}</SectionStyled>;
}
