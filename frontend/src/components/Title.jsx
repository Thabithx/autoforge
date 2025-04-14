import React from 'react'

const Title = ({text1, text2})  => {
  return (
    <div className='flex felx-row text-2xl font-bold'>
      <p className='text-black'>{text1}&nbsp;</p>
      <p className='text-gray-500'>{text2}</p>
    </div>
  )
}

export default Title