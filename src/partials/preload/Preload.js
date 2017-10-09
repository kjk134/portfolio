import React from 'react'

const Preload = props =>
	<link
		href={props.path}
		rel='preload'
		as={props.type}
	/>

export default Preload

