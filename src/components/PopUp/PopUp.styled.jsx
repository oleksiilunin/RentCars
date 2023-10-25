import styled from 'styled-components';
import {
  AdditionalInfoBox,
  CarImage,
} from 'components/CarsItem/CarsItem.styled';
import { FiX } from 'react-icons/fi';

export const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;
  max-width: 541px;

  border-radius: 24px;

  color: var(--primary-text-color);
  background-color: var(--main-background-color);
`;

export const PopUpCarImage = styled(CarImage)`
  width: 461px;
  height: 248px;
`;

export const PopUpAdditionalInfoBox = styled(AdditionalInfoBox)`
  margin-bottom: 14px;
`;

export const PopUpDescription = styled.p`
  margin-bottom: 24px;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857; /* 142.857% */
`;

export const PopUpFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 24px;
`;

export const PopUpBlockTitle = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857; /* 142.857% */
`;

export const PopUpFeaturesBox = styled(AdditionalInfoBox)`
  margin-bottom: 0;
`;

export const PopUpFeaturesItem = styled.p`
  padding: 0 6px;

  &:first-child {
    padding: 0 6px 0 0;
  }

  &:not(:last-child) {
    border-right: 1px solid var(--separator-text-color);
  }
`;

export const PopUpConditionsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 24px;
`;

export const PopUpConditionsList = styled.ul`
  display: flex;
  gap: 8px;

  flex-wrap: wrap;
`;

export const PopUpConditionsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap;

  padding: 7px 14px;

  border-radius: 35px;

  color: var(--condition-text-color);
  background: var(--condition-background-color);

  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5; /* 150% */

  span {
    font-weight: 600;
  }
`;

export const HightlightedTextSpan = styled.span`
  color: var(--accent-color);
`;

export const PopUpCloseIcon = styled(FiX)`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 24px;
  height: 24px;

  border-radius: 50%;

  cursor: pointer;

  transition: all 250ms var(--cubic-bezier);

  &:hover {
    box-shadow: var(--close-icon-box-shadow-hover);
  }
`;
