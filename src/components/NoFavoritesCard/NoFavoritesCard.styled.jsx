import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 20px;
`;

export const CardImage = styled.img`
  width: 480px;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const CardMainText = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.25;
`;

export const CardSecondaryText = styled.p`
  color: var(--secondary-text-color);

  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`;
