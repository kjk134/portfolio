import React from 'react'
import Button from '../../../partials/button/Button'
import './BlogPost.css'

const BlogPost = props =>
	<section className='blog-post-preview'>
		<h3>
			<a href={props.URL} 
				target='_blank'
				rel='nofollow noreferrer noopener'>
				{props.title}
			</a>
		</h3>
		<p>{props.text}</p>
		<Button 
			class='blog-post-preview-button'
			URL={props.URL}
			text='Read more'
			target='_blank'
			rel='nofollow noreferrer noopener'
		/>
	</section>

export default BlogPost