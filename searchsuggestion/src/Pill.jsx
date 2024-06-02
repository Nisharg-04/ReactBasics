import React from 'react'

function Pill({img,name,onClick}) {
  return (
<span className='userPill' onClick={onClick}>
    <img src={
        img
    } alt={name} />
    <span>{name} &times;</span>
</span>
  )
}

export default Pill