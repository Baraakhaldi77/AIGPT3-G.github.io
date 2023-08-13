import React from 'react'
import "./header.css"
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='Header-Padding' id='home'>
      <div className='Header-content'> 
        <h1 className='Text-Gradient'>
            Lets Build Something Amazing With GPT-3 OpenAI
             </h1>

        <div className='Header-input'>
          <p className='Header-p'>  
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>

          <div className='IInput'>
        <input className='input' type="email"  placeholder='Your Email Adress'/>
         <button className='Header-Button'>
          Get Started
         </button>
        </div>
        </div>
        
        <div className='Header-People'>
         <img src={people} alt='people' className='Header-image' />
          <p> 
          1.6k+
          1,600 people requested access a visit in last 24 hours
          </p>
        </div>
        </div>
        
        <div className='Header-Image'>
         <img src={ai}  alt='ai'/>
        </div>
      </div>
    
  )
}

export default Header;