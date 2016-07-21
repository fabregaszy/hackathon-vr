import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
var randomColor = require('random-color');

const colors = [];
for(let i=0;i<100;i++){
	colors.push(randomColor().hexString());
	console.log(i);
}


const PLAN_WIDTH = 9;
const PLAN_HEIGHT = 7;
const rows = 7;
const cols = 9;

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
function getXY(si) {
	var si = parseInt(si);
	var row = parseInt(si / rows) + 1;
	var col = si % cols + 1;
	var x = getRandomArbitrary(col*1,(col+1)*1);
	var y = getRandomArbitrary(row*1,(row+1)*1);
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



	render() {
		var comp = this;
		var list = comp.props.list || []
		var pos_z = comp.props.distanceLv * -2;
		var dots = list.map(function (pnInfo,idx) {
			var xy = getXY(pnInfo.si);
			return <Entity geometry="primitive: sphere; radius: 0.15" key={idx}
						   position={`${xy.x} ${xy.y} ${pos_z}`}
					material={{color:colors[pnInfo.ci] || 'black'}}/>
		});
		return (

		<Entity position={`${9/-2} ${7/-2} ${pos_z}`} scale="1 1 1">
			{dots}
		</Entity>
		);
	}
}

