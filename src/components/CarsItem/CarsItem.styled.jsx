import styled, { css } from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import '../../css/variables.css';
import { ButtonStyled } from 'components/Button/Button.styled';

export const CarItemWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: 274px;

  border-radius: 14px;
`;

export const StyledHeartIcon = styled(FiHeart)`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;

  border-radius: 50%;

  color: var(--favorite-icon-color);
  ${props =>
    props.$favorite &&
    css`
      fill: var(--accent-color);
      stroke: var(--accent-color);
    `}

  cursor: pointer;

  transition: all 250ms var(--cubic-bezier);

  &:hover,
  :focus {
    width: 24px;
    height: 24px;
  }
`;

export const CarImage = styled.img`
  object-fit: cover;
  overflow: hidden;

  width: 274px;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;

  background-color: var(--image-background-color);
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
`;

export const CarInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */

  color: var(--primary-text-color);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-overflow: clip;
  }
`;

export const HighlightedTextSpan = styled.span`
  color: var(--accent-color);
`;

export const PriceInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */

  color: var(--primary-text-color);
`;

export const AdditionalInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
  overflow: hidden;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;

  color: var(--secondary-text-color);

  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5; /* 150% */

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LearnMoreButton = styled(ButtonStyled)`
  width: auto;
  height: 44px;
  padding: 12px auto;
`;
