import React from 'react';
import Canvas from '../../partials/canvas/Canvas'
import './Contact.css'
import Form from '../../partials/form/Form'
import Banner from './Banner'
import data from './data'
import Footer from '../../partials/footer/Footer'

const Contact = props => 
		<section id='contact'>
		<Canvas />
			<Banner 
				header={data.header}
				subheader={data.subheader}
			/>
			<Form />
			<Footer />
		</section>

export default Contact;