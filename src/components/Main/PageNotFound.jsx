import React from 'react'
import notFountimg from '../constants/404 svg.svg'

function PageNotFound() {
  return (
    <div className='h-100 d-flex align-items-center'>
      <div className='w-100 d-flex justify-content-center'>
        <img src={notFountimg} alt='Not found Page' />
      </div>
    </div>
  )
}

export default PageNotFound