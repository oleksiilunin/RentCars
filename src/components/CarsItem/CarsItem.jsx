import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AdditionalInfo,
  AdditionalInfoBox,
  CarImage,
  CarInfo,
  CarItemWrapper,
  HighlightedTextSpan,
  MainInfo,
  PriceInfo,
  StyledHeartIcon,
} from './CarsItem.styled';
import Separator from 'components/Separator';
import Button from 'components/Button/Button';
import carPlaceholder from '../../assets/images/car-bgc-grey.jpg';
import {
  addToFavorites,
  removeFromFavorites,
} from 'redux/favorites/favoritesSlice';
import { selectFavoriteAdverts } from 'redux/favorites/favoritesSelectors';

export default function CarsItem({ carInfo, handleCarInfo }) {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  } = carInfo;

  const addressParts = address.split(',');
  const country = addressParts[addressParts.length - 1].trim();
  const city = addressParts[addressParts.length - 2].trim();

  useEffect(() => {
    if (favoriteAdverts?.some(advert => advert.id === carInfo.id)) {
      setIsFavorite(true);
    }
  }, [favoriteAdverts, carInfo]);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(carInfo));
      setIsFavorite(false);
    } else {
      dispatch(addToFavorites(carInfo));
    }
  };
  return (
    <CarItemWrapper>
      <StyledHeartIcon $favorite={isFavorite} onClick={handleClick} />
      <CarImage src={img ? img : carPlaceholder} alt={`${make} ${model}`} />
      <MainInfo>
        <CarInfo>
          {make}{' '}
          {model ? <HighlightedTextSpan>{model}</HighlightedTextSpan> : ''},{' '}
          {year}
        </CarInfo>
        <PriceInfo>{rentalPrice}</PriceInfo>
      </MainInfo>
      <AdditionalInfoBox>
        <AdditionalInfo>
          {city}
          <Separator />
          {country}
          <Separator />
          {rentalCompany}
        </AdditionalInfo>
        <AdditionalInfo>
          {type}
          <Separator />
          {model}
          <Separator />
          {id}
          <Separator />
          {functionalities[0]}
        </AdditionalInfo>
      </AdditionalInfoBox>
      <Button
        $learnMoreButtonStyle
        label="Learn more"
        onClick={() => handleCarInfo(carInfo)}
      />
    </CarItemWrapper>
  );
}
