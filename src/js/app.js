import 'aframe';
import 'aframe-video-shader'
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import Plan from './components/YearPlan';

var testData =  require('./test_data_1000_less.json');
testData = testData.slice(0,5).reverse();


class BoilerplateScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allExpand: false
		}
	}

	expand = () => {
		if(!this.state.allExpand){
			this.setState({
				allExpand: true
			});
		}
	};


	componentDidMount(){
		document.addEventListener('click',this.expand);
	}
	componentWillUnmount(){
		document.removeEventListener('click',this.expand);
	}
	render() {
		var comp = this;

		var len = testData.length;
		var plans = testData.map(function (plan, idx) {
			var pos_z = (len - idx) * -6;
			return (
				<Plan expand={comp.state.allExpand} distanceLv={len - idx} posZ={pos_z} key={plan.year} year={plan.year} list={plan.lists}/>
			);
		});

			return (
				<Scene onClick={comp.expand.bind(comp)}>
					<Camera><Cursor/></Camera>
					<a-entity light="type: ambient; color: #999; intensity: 0.1"></a-entity>
					<a-entity light="type: directional; color: #EEE; intensity: 0.8" position="-1 1 0"></a-entity>
					<Sky/>

					{plans}
				</Scene>
			);
		}

}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
