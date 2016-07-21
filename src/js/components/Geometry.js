import {Animation, Entity} from 'aframe-react';
import React from 'react';
import {getRandomRotate} from '../utils';

const size = 0.3;
export default props => {

	var geometry = {
		primitive: 'ring',
		radiusInner: 0.01,
		radiusOuter: 0.016
	};
	switch (props.type){
		case 1:
			geometry = {
				primitive: 'box',
				width:size,
				height:size,
				depth:size
			};
			break;
		case 2:
			geometry = {
				primitive: 'cone',
				radiusTop:size*0.2,
				radiusBottom:size/2,
				height:size
			};
			break;
		case 3:
			geometry = {
				primitive: 'cylinder',
				radius:size/2,
				height:size
			};
			break;
		case 4:
			geometry = {
				primitive: 'torus',
				radius:size/2,
				radiusTubular:size/8
			};
			break;
		case 5:
			geometry = {
				primitive: 'box',
				width:size/2,
				height:size,
				depth:size/2
			};
			break;
		case 6:
			geometry = {
				primitive: 'cylinder',
				radius:size/2,
				segmentsRadial:3,
				height:size
			};
			break;
		case 7:
		default:
			geometry = {
				primitive: 'torus',
				radius:size/2,
				radiusTubular:size/8
			};
			break;


	}

	

	return (
		<Entity rotation={getRandomRotate()} geometry={geometry} {...props}>
		</Entity>
	);
}
