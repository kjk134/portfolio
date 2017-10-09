import React from 'react'
import './FullPageGrid.css'

const FullPageGrid = props =>
	<div className='full-page-grid-item' id={props.title}>
		<div className='full-page-grid-item-top'>
			<div className='full-page-grid-item-text'>
				<h2>
					<a href={props.URL} target='_blank' rel='noopenner nofererrer nofollow'>
						{props.title}
					</a>
				</h2>
				<p>{props.description}</p>
			</div>
			<i className="down"></i>
		</div>
		<div className='full-page-grid-item-bottom'>
	            {/*<img src={props.screenshot} alt='Screenshot of website' />*/}
	            <iframe src={props.URL} title={props.title} frameBorder="0" allowFullScreen></iframe>
        </div>
	</div>

export default FullPageGrid