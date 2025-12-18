import React from 'react'

function Image({ img_url,className }) {
  // console.log(img_url)
  return (
    <div className=''>
      <img src={img_url} alt='Image blood' loading="lazy" className={`w-96 h-96 object-cover ${className}`} />
    </div>
  )
}

export default Image