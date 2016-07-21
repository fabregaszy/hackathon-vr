import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
	<Entity>
		<Entity camera="" fov="50" look-controls="" wasd-controls="" {...props}/>
	</Entity>
);
