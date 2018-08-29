import React from 'react'
import {
	Link,
} from 'react-router-dom'
import * as routes from '../../../../routes';

const Navigation = () => (
	<ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.TECHNOLOGIES}>Technologies</Link></li>
		<li><Link to={routes.PROJECTS}>Projects</Link></li>
	</ul>
);

export default Navigation
