import React from 'react'
import './Services.css'
import data from './data.js'
import FullPageGrid from '../../partials/fullPageGrid/FullPageGrid'

const Services = props => 
		<section id='services'>		
            {
                data.map(page => 
                    <FullPageGrid 
                        key={page.id}
                        title={page.title} 
                        description={page.description}
                        id={page.id}
                    />
                )
            }
		</section>

export default Services;