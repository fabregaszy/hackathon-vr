/**
 * Created by Razor <renze@patsnap.com> on 16-7-21.
 */
"use strict";

import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

export default props => {

	//let canvas = document.createElement('canvas');
	//let context = canvas.getContext('2d');
    //
	//const RADIUS = 10;
	//let color = props.color || '#FFF000';
	//let r = (color && 0xFF0000) >> 16;
	//let g = (color && 0x00FF00) >> 8;
	//let b = color && 0x0000FF;
	//context.fillStyle = color;
	//context.beginPath();
	//context.arc(RADIUS, RADIUS, RADIUS, 0, Math.PI * 2);
	//context.fill();

	const geometry = {
		primitive: 'sphere',
		radius: 1
	};
	const material = {
		color: props.color || '#FFF000',
		opacity: props.opacity || 1.0
	};
	return (
		<Entity dot={props} geometry={geometry} material={material} {...props}></Entity>
	);
}
