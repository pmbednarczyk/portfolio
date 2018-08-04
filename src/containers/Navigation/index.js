import React from 'react'
import {
	Link,
} from 'react-router-dom'

const Navigation = () => (
	<ul>
		<li><Link to="/projects">Projects</Link></li>
		<li><Link to="/">Home</Link></li>
	</ul>
);

export default Navigation