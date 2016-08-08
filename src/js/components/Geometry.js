import {Animation, Entity} from 'aframe-react';
import React from 'react';
import {getRandomRotate} from '../utils';

const size = 0.15;

export default class Geometry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHover:false
		}
	}


	hoverHandler(evt,isHovering){
		this.setState({
			isHover:isHovering
		});
	}
	render() {
		var comp = this;
		var props = comp.props;

		var geometry = {
			primitive: 'sphere',
		};
		switch (888){
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
					radiusTop:size*0.5,
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
					primitive: 'cone',
					radiusTop:size*0.01,
					radiusBottom:size/2,
					height:size
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
			default:
				geometry = {
					primitive: 'sphere',
					radius:size/2
				};
				break;


		}

		let isHover = comp.state.isHover;
		return (
			<Entity onMouseEnter={(evt)=>comp.hoverHandler(evt,true)}
					onMouseLeave={(evt)=>comp.hoverHandler(evt,false)}
					scale={isHover ? '1.4 1.4 1.4':'1 1 1'}
					rotation={getRandomRotate()} geometry={geometry} {...props}>
			</Entity>
		);
	}
}
