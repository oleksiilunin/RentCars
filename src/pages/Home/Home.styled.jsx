import styled from 'styled-components';
import backgroundImage from '../../assets/images/blue-tire.jpg';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:100px;


  border-radius: 14px;
  /* width: 100vw; */
  width: 1440px;
`;

export const HomeHero = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 24px;

  border-radius: 14px;

  /* width: 100vw; */
  width: 1440px;
  height: 540px;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 700px 50%;

/* 
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255 ,255, 255, 0.2),
      rgba(255 ,255, 255, 0.3),
      rgba(255 ,255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );} */
`;

export const HomeTitle = styled.h1`
  color: var(--home-title-text-color);  

  font-size: 148px;
  font-weight: 700;
  line-height: 1.2;

`;

export const HomeSubTitle = styled.p`
  color: var(--home-title-text-color);

  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;

`;

export const HomeTitleIcon = styled(FaCar)`
  margin-top:10px;

  border-radius:50%;

  width: 36px;
  height: 36px;

  fill: var(--home-title-icon-fill);
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content:center;
  align-items: center;

  padding: 14px 100px;
  margin-top: 20px;

  border-radius: 14px;
  border: 1px solid rgb(255, 255, 255, 0.4);

  /* width: 274px; */
  height: 64px;

  color: var(--button-text-color);

  font-size:24px;
  font-weight: 600;
  line-height: 1.42857; /* 142.857% */
  box-shadow:  rgb(255, 255, 255) 0px 0px 55px;

  transition: background-color 250ms var(--cubic-bezier),
  color 250ms var(--cubic-bezier),
  box-shadow 250ms var(--cubic-bezier);

   &:hover, :focus {
    background-color: #fff;
    color: var(--accent-color);
    box-shadow:none;

   }
`;


