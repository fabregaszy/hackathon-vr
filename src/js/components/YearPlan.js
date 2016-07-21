import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import 'aframe-text-component';
import {getRandom, getRandomRotate, getHashPoint} from '../utils';
import Geometry from './Geometry';

var randomColor = require('random-color');

const COLOR_LIST_CLUSTER = ["#2DE3CD", "#4400D0", "#2EC54B", "#E4012C", "#FDD901",
							"#17AFF9", "#1E9797", "#BF0099", "#FB7922", "#9966CC",
							"#7AD073", "#ED6A67", "#E94C1B", "#0060FF", "#9CC927",
							"#E93A77", "#B7A500", "#5562AA", "#0EAE6F", "#CFA87A"];
const PLAN_WIDTH = 10;
const PLAN_HEIGHT = 8;
const SIZE_SCALE = 1;
const rows = PLAN_HEIGHT * SIZE_SCALE;
const cols = PLAN_WIDTH * SIZE_SCALE;
const SPAN = -6;

function getXY(pnInfo) {
	var si = parseInt(pnInfo.si);
	var row = parseInt(si / cols);
	var col = si % cols;
	//var x = getRandom(col*1,(col+1)*1);
	//var y = getRandom(row*1,(row+1)*1);
	//return {x,y}
	return getHashPoint(pnInfo.pn, col*1, (col+1)*1, row*1, (row+1)*1)
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
		this.state = {
		}
	}


	mouseHandler(evt,pnInfo,pos){
		console.info(pnInfo,pos);
	}


	render() {
		var comp = this;
		var list = comp.props.list || [];
		//var pos_z = (comp.props.distanceLv) * SPAN;
		var color = COLOR_LIST_CLUSTER[Math.min(comp.props.distanceLv, COLOR_LIST_CLUSTER.length)];
		var dots = list.map(function (pnInfo,idx) {
			var xy = getXY(pnInfo);
			return <Geometry onClick={(evt)=>comp.mouseHandler(evt,pnInfo,Object.assign({},xy,{z:0}))} type={pnInfo.ci} key={idx}
						   position={`${xy.x} ${xy.y} 0`}
					material={{color: COLOR_LIST_CLUSTER[pnInfo.ci] || 'black'}}/>
		});

		const geometry = {
			primitive: 'plane',
			width: PLAN_WIDTH + 2,
			height: PLAN_HEIGHT + 2
		};
		const material = {
			color: color,
			opacity: 0.2,
			transparent: true,
			side: 'double'
		};
		var plane = <Entity geometry={geometry} material={material} position={`${PLAN_WIDTH / 2} ${PLAN_HEIGHT / 2} 0` }></Entity>;
		return (
			<Entity position={`${PLAN_WIDTH/-2} ${PLAN_HEIGHT/-2} ${SPAN}`} scale="1 1 1">
				{plane}
				<Entity text={`text: ${comp.props.year}; height: 0`} position={`-0.5 ${PLAN_HEIGHT} 0`}  material={{}}></Entity>
				{dots}
				{comp.props.expand?(<a-animation attribute="position"
												dur="2000"
												fill="forwards"
												to={`${PLAN_WIDTH/-2} ${PLAN_HEIGHT/-2} ${comp.props.posZ}`}
												repeat="0"></a-animation>):''}

			</Entity>
		);
	}
}

