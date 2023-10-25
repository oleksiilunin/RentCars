import styled from 'styled-components';

export const CatalogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 50px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  /* gap: 16px; */
  width: 100%;
  max-width: 600px;
  padding: 8px;

  border-radius: 8px;
  overflow: hidden;
  background-color: inherit;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: none;
  outline: none;

  font: inherit;
  font-size: 18px;

  &::placeholder {
    font-size: 18px;
  }
`;

export const ButtonForm = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  width: 20%;
  height: 48px;
  padding: 8px;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 0;

  color: #5b5c6c;
  background-color: #d2d8db;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    box-shadow: rgb(125, 123, 131) -1px -1px 5px, rgb(125, 123, 131) 1px 1px 5px;
  }

  &:active {
    transform: translateX(2px) translateY(2px);
    box-shadow: rgb(125, 123, 131) 0px 0px 0px;
  }
`;

export const LabelButton = styled.span`
  /* font-size: 20px;
  font-weight: 500; */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* box-shadow: rgb(125, 123, 131) -1px -1px 15px; */
  /* rgb(255, 255, 255) 5px 5px 15px; */
`;

export const MoviesItem = styled.li`
  padding: 8px;
  border-radius: 8px;

  color: #5b5c6c;

  box-shadow: rgb(125, 123, 131) -1px -1px 5px;
  /* rgb(255, 255, 255) 5px 5px 15px; */

  font-size: 16px;

  &:hover,
  &:focus {
    box-shadow: rgb(125, 123, 131) -1px -1px 15px;
  }
`;

export const MovieTitle = styled.h3`
  color: #5b5c6c;
`;
