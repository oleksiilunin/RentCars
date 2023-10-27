import { Link } from "react-router-dom";
import styled from "styled-components";

export const SliderContainer = styled.div`
	display: flex;
	align-items:flex-start;
	justify-content:center;
	gap: 80px;
	/* padding:230px; */
`;

export const ImageStyled = styled.img`
	width: 500px;
	height: 265px;

	object-fit: contain; 
	 overflow: hidden;

	`;

	export const InfoBox = styled.div`
		display: flex;
		flex-direction:column;
		align-items: start;
		gap: 24px;
		width: 400px;	
`;

	export const CardTitle = styled.h2`
		font-size:28px;
		line-height:1.4285;
	`;

	export const HighlightSpan = styled.span`
		color: var(--accent-color);
	`;

	export const TextStyled = styled.p`
		color: var(--secondary-text-color);

		font-size: 18px;
		font-weight: 400;
		line-height: 1.5; /* 150% */
	`;

	export const LinkStyled = styled(Link)`
		display: flex;
		justify-content: center;
		align-items: center;
	`;
