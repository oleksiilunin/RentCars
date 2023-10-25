import {
  AdditionalInfo,
  CarInfo,
  HighlightedTextSpan,
  MainInfo,
} from 'components/CarsItem/CarsItem.styled';
import Modal from 'components/Modal';
import React from 'react';
import {
  HightlightedTextSpan,
  PopUpAdditionalInfoBox,
  PopUpBlockTitle,
  PopUpCarImage,
  PopUpCloseIcon,
  PopUpConditionsBox,
  PopUpConditionsItem,
  PopUpConditionsList,
  PopUpDescription,
  PopUpFeatures,
  PopUpFeaturesBox,
  PopUpFeaturesItem,
  PopUpWrapper,
} from './PopUp.styled';
import carPlaceholder from '../../assets/images/car-bgc-grey.jpg';
import Separator from 'components/Separator';
import { formatNumberWithComma } from 'assets/helpers/formatNumbetWithComma';
import Button from 'components/Button/Button';
import showNotification from 'assets/helpers/showNotification';

export default function PopUp({ onClose, carInfo }) {
  const {
    id,
    img,
    make,
    model,
    year,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = carInfo;

  const addressParts = address.split(',');
  const country = addressParts[addressParts.length - 1].trim();
  const city = addressParts[addressParts.length - 2].trim();

  const conditionsArray = rentalConditions.split('\n');
  const condMinAge = conditionsArray[0].split(' ');

  const condMinAgeText = condMinAge.slice(0, -1).join(' ');
  const condMinAgeValue = condMinAge[condMinAge.length - 1];

  const mileageValueComma = formatNumberWithComma(mileage);

  const priceNumericValue = rentalPrice.slice(1);

  return (
    <Modal onClose={onClose}>
      <PopUpWrapper>
        <PopUpCloseIcon onClick={onClose} />
        <PopUpCarImage
          src={img ? img : carPlaceholder}
          alt={`${make} ${model}`}
        />
        <MainInfo>
          <CarInfo>
            {make}{' '}
            {model ? <HighlightedTextSpan>{model}</HighlightedTextSpan> : ''},{' '}
            {year}
          </CarInfo>
        </MainInfo>
        <PopUpAdditionalInfoBox>
          <AdditionalInfo>
            {city}
            <Separator />
            {country}
            <Separator />
            Id: {id}
            <Separator />
            Year: {year}
            <Separator />
            Type: {type}
          </AdditionalInfo>
          <AdditionalInfo>
            Fuel Consumption: {fuelConsumption}
            <Separator />
            Engine Size: {engineSize}
          </AdditionalInfo>
        </PopUpAdditionalInfoBox>
        <PopUpDescription>{description}</PopUpDescription>
        <PopUpFeatures>
          <PopUpBlockTitle>Accessories and functionalities:</PopUpBlockTitle>
          <PopUpFeaturesBox>
            <AdditionalInfo>
              {accessories.map((item, idx) => (
                <PopUpFeaturesItem key={idx}>{item}</PopUpFeaturesItem>
              ))}
            </AdditionalInfo>
            <AdditionalInfo>
              {functionalities.map((item, idx) => (
                <PopUpFeaturesItem key={idx}>{item}</PopUpFeaturesItem>
              ))}
            </AdditionalInfo>
          </PopUpFeaturesBox>
        </PopUpFeatures>
        <PopUpConditionsBox>
          <PopUpBlockTitle>Rental Conditions:</PopUpBlockTitle>
          <PopUpConditionsList>
            <PopUpConditionsItem>
              {condMinAgeText}
              <HightlightedTextSpan>{condMinAgeValue}</HightlightedTextSpan>
            </PopUpConditionsItem>
            <PopUpConditionsItem>{conditionsArray[1]}</PopUpConditionsItem>
            <PopUpConditionsItem>{conditionsArray[2]}</PopUpConditionsItem>
            <PopUpConditionsItem>
              Mileage:
              <HightlightedTextSpan>{mileageValueComma}</HightlightedTextSpan>
            </PopUpConditionsItem>
            <PopUpConditionsItem>
              Price:
              <HightlightedTextSpan>{priceNumericValue}$</HightlightedTextSpan>
            </PopUpConditionsItem>
          </PopUpConditionsList>
        </PopUpConditionsBox>
        <Button
          $rentalCarButtonStyle
          label="Rental car"
          onClick={() => {
            showNotification('You have successfully rented a car', 'success');
          }}
        />
      </PopUpWrapper>
    </Modal>
  );
}
