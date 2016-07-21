import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import 'aframe-text-component';
import {getRandom} from '../utils';
import Geometry from './Geometry';

var randomColor = require('random-color');

const colors = [];
for(let i=0;i<100;i++){
	colors.push(randomColor().hexString());
}


const PLAN_WIDTH = 8;
const PLAN_HEIGHT = 10;
const rows = 8;
const cols = 10;

function getXY(si) {
	var si = parseInt(si);
	var row = parseInt(si / cols);
	var col = si % cols;
	var x = getRandom(col*1,(col+1)*1);
	var y = getRandom(row*1,(row+1)*1);
	return {x,y}

}

function formatXY(xyObj) {
	return {
		x:xyObj.x - PLAN_WIDTH/2,
		y:xyObj.y - PLAN_HEIGHT/2
	}
}

export default class Plan extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}


	mouseHandler(evt,pnInfo,pos){
		console.info(pnInfo,pos);
	}

	render() {
		var comp = this;
		var list = comp.props.list || [];
		var pos_z = comp.props.distanceLv * -4;
		var color = colors[Math.min(comp.props.distanceLv, colors.length)];
		var dots = list.map(function (pnInfo,idx) {
			var xy = getXY(pnInfo.si);
			return <Geometry type={pnInfo.ci} key={idx}
						   position={`${xy.x} ${xy.y} ${pos_z}`}
					material={{color:color || 'black'}}/>
		});

		const geometry = {
			primitive: 'plane',
			width: PLAN_WIDTH + 2,
			height: PLAN_HEIGHT + 2
		};
		const material = {
			color: color,
			opacity: 0.05,
			transparent: true,
			side: 'double'
		};
		var plane = <Entity geometry={geometry} material={material} position={`${PLAN_WIDTH / 2} ${PLAN_HEIGHT / 2} ${pos_z}`}></Entity>;
		//var plane = <a-plane color={color} width={PLAN_WIDTH + 2} height={PLAN_HEIGHT + 2} position={`${PLAN_WIDTH / 2} ${PLAN_HEIGHT / 2} ${pos_z}`} transparent="true" opacity="0.05"></a-plane>
		return (
			<Entity position={`${9/-2} ${7/-2} ${pos_z}`} scale="1 1 1">
				{plane}
				<a-entity text="text: 2012" size="1" position={`${PLAN_WIDTH / 2} ${PLAN_HEIGHT / 2} ${pos_z}`}></a-entity>
				{dots}
			</Entity>
		);
	}
}

