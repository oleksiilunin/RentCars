import React from 'react';
import { SectionStyled } from './SectionWrapper.styled';

export default function SectionWrapper({ children }) {
  return <SectionStyled>{children}</SectionStyled>;
}
