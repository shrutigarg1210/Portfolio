// import React from 'react'
// import CBrace from "../fakeTag/Brace/CBrace";
// import OBrace from "../fakeTag/Brace/OBrace";
import './SkillsStyle.css'
import SphereAnimate from './SphereAnimate';

const Skills = () => {
  return (
    <div className='ṣection' id='skills'>
        <h1 className='head'>
          Skills<br />
        </h1>
        <div className='sphere'>
          <SphereAnimate rad="250" />
        </div>
    </div>
  )
}

export default Skills
