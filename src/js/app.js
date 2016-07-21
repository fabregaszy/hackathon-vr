import 'aframe';
import 'aframe-look-at-component';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import Dot from './components/Dot';

class BoilerplateScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'red'
		}
	}

	changeColor = () => {
		const colors = ['#555','red', 'orange', 'yellow', 'green', 'blue'];
		this.setState({
			color: colors[Math.floor(Math.random() * colors.length)],
		});
	};


	render() {
		var comp = this;

		const boxesInfo = [
			{color:'red',pos:'0 0 -5'},
			{color:'green',pos:'0 5 -5'}
		];

		var boxies = boxesInfo.map(function(info,idx){
			return (
				<Entity key={idx} geometry="primitive: box" material={{color: info.color}}
						onClick={comp.changeColor}
						position={info.pos}>
				</Entity>
			);
		});


		return (
			<Scene>

				<Sky/>

				<Entity light={{type: 'ambient', color: '#888'}}/>
				<Entity light={{type: 'directional', intensity: 0.5}} position="-1 1 0"/>
				<Entity light={{type: 'directional', intensity: 1}} position="1 1 0"/>
				<Dot color="#FF0000" look-at="[camera]" position="30 0 0"></Dot>
				<Dot color="#00FF00" look-at="[camera]" position="0 30 0"></Dot>
				<Dot color="#0000FF" look-at="[camera]" position="0 0 30"></Dot>

				<a-entity id="player" camera look-controls wasd-controls><Cursor/></a-entity>
			</Scene>
		);
	}
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
