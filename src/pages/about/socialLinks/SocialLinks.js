import React from 'react'
import './SocialLinks.css'

const SocialLinks = props => 
		<div id='social-links'>
			{
				props.social.map(social => 
					<a key={social.ref} href={social.profileURL} target='_blank' rel='nofollow noopener noreferrer'>
						<img src={social.imageURL} alt={social.title} />
					</a>
				)
			}
		</div>

export default SocialLinks