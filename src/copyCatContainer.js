import React from 'react';
import {CopyCat} from './CopyCat.js';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input:'Copy Cat'
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    if(this.state.copying === false) return
    this.setState({input: e.target.value})
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.input;
    const handleChange = this.handleChange
    
    return <CopyCat
      copying = {copying}
      toggleTape = {toggleTape}
      value = {value}
      handleChange = {handleChange}
     />
   
  };
}


