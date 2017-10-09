import React from 'react'
import './Navigation.css'
import data from './data.js'

const Navigation = props =>
		<nav>
			<ul>
				{	
					data.map(page => 
						<li key={page.id}><a key={page.id} href={page.url} title={page.title}>{page.title}</a></li>
					)
				}
			</ul>
		</nav>

export default Navigation;