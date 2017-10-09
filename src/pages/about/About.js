import React from 'react';
import './About.css'
import SocialLinks from './socialLinks/SocialLinks'
import data from './data.js'

const About = props => 
	<section id='about'>
		<div className='about-image'>
			<img src={data.profile} alt='Sean Lawrence profile' />
		</div>
		<div className='about-text'>
			<h2>About</h2>
			<p>I'm a front end JavaScript developer based out of Chicago, IL.</p>
			<p>I love building awesome websites with React.js, Express.js, Webpack, Handlebars, AWS (Amazon Web Services) and/or jQuery, contributing to open source projects like <a href="https://github.com/freecodecamp/mail-for-good" target="_blank" rel="nofollow noreferrer noopener" title="Mail For Good">Mail For Good</a> and learning new technologies and software on a daily basis.</p> 
			<p>I also travel a lot (you can see where I've been here), and spend my weekends playing guitar, powerlifting (see my PR's here), hanging out with my wife, or taking Clementine out for a ride around the Great Lakes.</p>
			<SocialLinks social={data.social}/>
		</div>
	</section>

export default About;

