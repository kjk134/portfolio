import React from 'react'
import './Button.css'

const Button = props => 
	<button className={props.class} type='button'>
		<a href={props.URL} target={props.target} rel={props.rel}>{props.text}</a>
	</button>

	export default Button;