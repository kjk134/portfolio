import React from 'react'
import './Blog.css'
import data from './data'
import BlogPost from './blogPost/BlogPost'

const Blog = props => 
	<section id='blog'>
		{
			data.posts.map(post =>
				<BlogPost 
					URL={post.URL}
					title={post.title}
					text={post.text}
					key={post.id}
				/>
			)
		}
	</section>

export default Blog;