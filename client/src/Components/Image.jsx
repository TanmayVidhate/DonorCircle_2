import React from 'react'

function Image({ img_url }) {
  // console.log(img_url)
  return (
    <div className=' m-1 p-2 mt-9'>
      <img src={img_url} alt='Image blood' className='w-96 h-96 object-cover ' />
    </div>
  )
}

export default Image