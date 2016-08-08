import {Entity} from 'aframe-react';
import React from 'react';

const SKY_COLOR = '#001133';
export default props => (
	<Entity geometry={{primitive: 'sphere', radius: 100}}
			material={props.material || {color: SKY_COLOR, shader: 'flat'}}
			scale="1 1 -1"/>
);
