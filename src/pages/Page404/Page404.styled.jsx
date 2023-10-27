import styled from "styled-components";
import image404 from '../../assets/images/404_BLUE.jpg'
import { Link } from "react-router-dom";


export const PageContainer = styled.div`
	/* position:fixed; */

	display: flex;
	flex-direction:column;
	align-items: center;
	justify-content: end;

	padding-bottom:50px;

	border-radius: 14px;
	
	width:1440px;
	height:800px;

	background: url(${image404});
  background-size: cover;
	overflow: hidden;
  background-repeat: no-repeat; 
	background-position: center;



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
	//  export const ImageStyled = styled.img`
	// position:fixed;
	
	// 	border-radius: 14px;
	
	// 	width: 1440px;
		 
	// 		object-fit: cover; 
	// 		 overflow: hidden;
	// 		 `;