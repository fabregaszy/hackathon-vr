import {Entity} from 'aframe-react';
import React from 'react';
import store from '../store';
var tweenState = require('react-tween-state');

var isMobile = AFRAME.utils.isMobile();

var Camera = React.createClass({
	mixins: [tweenState.Mixin],
	getInitialState: function() {
		return {x: 0,y:0 ,z:0};
	},
	cameraChangeHandler: function() {
		// if(event.detail.name === 'position'){
		// 	store.setCameraPos(event.detail.newData);
		// }
	},
	obAction:function () {
		this.tweenState('z', {
			easing: tweenState.easingTypes.easeInOutQuad,
			duration: 10000,
			endValue: this.props.allExpand ? -15 : 0
		});
	},
	componentDidMount:function () {

	},
	componentWillReceiveProps: function(nextProps) {
		var comp = this;

		var allExpand = nextProps.allExpand;
		if(allExpand){
			setTimeout(()=>this.obAction(),2000);
		}
	},
	render: function() {
		var comp = this;
		var s = comp.state;
		isMobile = true;
		return (
			<Entity position={`${s.x} ${s.y} ${comp.getTweeningValue('z')}`}>
				<Entity onComponentChanged={comp.cameraChangeHandler} camera="" look-controls="" wasd-controls="" {...comp.props}/>
			</Entity>
		);
	}
});
export default Camera;
