import React from 'react';
import emptyFavorites from '../../assets/images/emptyMySaved.svg';
import {
  CardImage,
  CardMainText,
  CardSecondaryText,
  CardWrapper,
  TextBox,
} from './NoFavoritesCard.styled';
import { FiHeart } from 'react-icons/fi';

export default function NoResultCard() {
  return (
    <CardWrapper>
      <CardImage src={emptyFavorites} alt="Empty Favorites" width="480" />
      <TextBox>
        <CardMainText>No saved cars</CardMainText>
        <CardSecondaryText>
          Click the <FiHeart size="32" /> button on any adverts to add a
          favorite.
        </CardSecondaryText>
      </TextBox>
    </CardWrapper>
  );
}
