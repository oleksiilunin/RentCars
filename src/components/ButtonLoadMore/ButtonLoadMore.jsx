import React from 'react';
import { Button } from './ButtonLoadMore.styled';

import PropTypes from 'prop-types';

export default function ButtonLoadMore({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
}

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
