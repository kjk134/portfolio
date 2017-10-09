import React from 'react'
import './Form.css'

const Form = props => 
		<form id='form' method="post">
	        <input type="hidden" name="form-name" value="contact" />
	        <p>
	          <label>
	            <input type="text" name="name" placeholder="Name" required />
	          </label>
	        </p>
	        <p>
	          <label>
	            <input type="email" name="email" placeholder="Email" required />
	          </label>
	        </p>
	        <p>
	          <label>
	            <textarea name="message" placeholder="Message" required></textarea>
	          </label>
	        </p>
	        <p>
	          <button type="submit">Send</button>
	        </p>
      </form>

export default Form;