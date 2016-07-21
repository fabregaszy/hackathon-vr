import {Entity} from 'aframe-react';
import React from 'react';
import store from '../store';


export default class Camera extends React.Component {
	constructor(props) {
		super(props);
	}
	cameraChangeHandler(event){

		if(event.detail.name === 'position'){
			store.setCameraPos(event.detail.newData);
		}

	}
	render() {
		var comp = this;
		return (
			<Entity>
				<Entity onComponentChanged={comp.cameraChangeHandler} camera="" look-controls="" wasd-controls="" {...comp.props}/>
			</Entity>
		);
	}
}


