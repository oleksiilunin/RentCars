import React from 'react'
import { ImageStyled } from './SliderImage.styled'

export default function SliderImage({img, subtitle}) {
	// console.log(require(`../../assets/images/slider/${img}`));
	return (
		<ImageStyled src={require(`../../../assets/images/slider/${img}`)} alt={subtitle} />

	)
}
