import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

const PlayButton = (props) => {
  return (
   <button {...props}>
    <AiFillPlayCircle />
   </button>
  )
}

export default PlayButton