import React from 'react'
import './FullPageGridTwenty.css'
import TwentyTwenty from 'react-twentytwenty'

const FullPageGridTwenty = props =>
	<div className='full-page-twenty-grid-item'>
		<div className='full-page-twenty-grid-item-top'>
			<div className='full-page-grid-item-text'>
				<h2>{props.title}</h2>
				<p>{props.description}</p>
			</div>
			<i className="down"></i>
		</div>
		<div className='full-page-twenty-grid-item-bottom'>
			<TwentyTwenty>
	            <img src={props.old_image} alt='Screenshot of old website' />
	            <img src={props.new_image} alt='Screenshot of new website' />
	            <div className='slider'></div>
	        </TwentyTwenty>
        </div>
	</div>

export default FullPageGridTwenty