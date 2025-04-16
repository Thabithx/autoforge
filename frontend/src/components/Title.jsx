import React from 'react'

const Title = ({text1, text2})  => {
  return (
    <div className='flex felx-row text-2xl font-bold pt-10 items-center justify-center'>
      <p className='text-[#1d1d1f]'>{text1}&nbsp;</p>
      <p className='text-[#6e6e73]'>{text2}</p>
    </div>
  )
}

export default Title