import React from 'react'
import './Grid.css'

const Grid = (props) => {
	const data = props.data;

	return (
		<section className='grid'>
			{
				data.map(obj => (
					<GridItem 
						key={obj.id} 
						imageURL={obj.imageURL}
						title={obj.title}
						description={obj.description}
						buttonURL={obj.buttonURL}
					/>
				))
			}
		</section>
	)
}

const GridItem = (props) => {
	return (
		<div className='grid-item'>
			<img className='grid-item-image' src={props.imageURL} alt={props.title} />
			<h3 className="grid-item-title">{props.title}</h3>
			<p className='grid-item-description'>{props.description}</p>
			<button className='grid-item-button' type='button'>
				<a href={props.buttonURL}>Visit site</a>
			</button>
		</div>
	)
}

export default Grid;