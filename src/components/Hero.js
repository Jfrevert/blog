// const imgLink = 
import React from 'react'
import authorImage from '../../content/assets/author.jpg'

export const Hero = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const style = {
      // 'position': 'fixed',
      'top': 0, 
      'left': 0,
      'min-width': '100%',
      'min-height': '100%',
      // 'height': '100vh',
      'clip-path': 'polygon(100% 0, 100% 40%, 40% 90%, 0 90%, 0 0, 0 0)'
      
    }
    
    return(
      <div style={style}>
        <img src={authorImage} style={style}/>
      </div>
    )
  }
  
