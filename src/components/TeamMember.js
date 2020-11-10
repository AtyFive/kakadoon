import React from 'react';
import '../App.css';

export default function TeamMember(props) {
 
  return (
    <div>
        <h4 className = 'clear'>{props.name}</h4>
        <div>
          <img className='team__image' src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg' alt = '' />
          <p className = 'team__text'>Mr Kakadoon is magnificent</p>
        </div>


    </div>
  );
}
