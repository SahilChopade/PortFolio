import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const SkillsTag = () => {
  return (
    <div className='h-1/3'>
      <TypeAnimation
      sequence={[
        'Software Developer..',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer..',
        1000,
        'DevOps Engineer..',
        1000,
        'FullStack Developer..',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='text-[2rem] md:text-[5rem]'
      style={{ fontWeight: '900' ,display: 'inline-block',color: "blue" }}
      repeat={Infinity}
    />
    </div>
  )
}

export default SkillsTag
