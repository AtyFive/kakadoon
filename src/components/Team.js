import React from 'react';
import '../index.css';
import TeamMember from './TeamMember';

export default function Team() {
 
  return (
    <div className = 'team__row'>
        <TeamMember name = 'Mr Kakadoon' />


        <h2 className = 'clear'>Chubbies</h2>
        <TeamMember name = 'Snowflake' />
        <TeamMember name = 'Stick' />
        <TeamMember name = 'Sean Sample' />
        
    </div>
  );
}
