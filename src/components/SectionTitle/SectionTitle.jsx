import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './SectionTitle.styled';

export default function SectionTitle({ title }) {
  return <Title>{title}</Title>;
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
