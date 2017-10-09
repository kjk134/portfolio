import React from 'react'

const Banner = props => 
	<div className='banner-text'>
		<h2>{props.header}</h2>
		<p>{props.subheader}</p>
	</div>

export default Banner