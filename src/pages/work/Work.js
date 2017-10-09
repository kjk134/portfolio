import React from 'react'
/*import FullPageGridTwenty from '../../partials/fullPageGridTwenty/FullPageGridTwenty'*/
import FullPageGrid from '../../partials/fullPageGrid/FullPageGrid'
import './Work.css'
import data from './data.js'

const Work = props => 
    <section id='work'>   
        {
            data.projects.map(project =>
                <FullPageGrid 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    screenshot={project.screenshot}
                    URL={project.URL}
                />
            )
        }  
        {/*{
            data.revamps.map(project => 
                <FullPageGridTwenty
                    key={project.id}
                    title={project.title} 
                    description={project.description}
                    id={project.id}
                    old_image={project.old_image}
                    new_image={project.new_image}
                />
            )
        }*/}
    </section>

export default Work;