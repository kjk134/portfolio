import React from 'react';
import Particles from 'react-particles-js';
import './Canvas.css'
import data from './data.js'

const Canvas = props => 
    <div id='particles-js'>
      <Particles params={data}
/>
    </div>

export default Canvas;