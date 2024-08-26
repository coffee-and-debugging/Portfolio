import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TextEffect = () => {
  return (
    <TypeAnimation sequence={[
        'Data Scientist',
        1500,
        'ML Engineer',
        1500,
        'Backend Dev.',
        1500,
        'Programmer',
        1500,
    ]}
    speed={50} className='text-[2rem] md:text-[2.5rem] text-[#55e6a5] font-bold uppercase'
    repeat={Infinity} />
  );
};

export default TextEffect
