import React from 'react'
import './Player.css'
const Error = () => {
  return (
    <div className='player'>
      <iframe
        title='myFrame'
        type='text/html'
        width='80%'
        height='80%'
        src='http://www.youtube.com/embed/i5qOzqD9Rms?autoplay=1'
        frameBorder='0'
        allowFullScreen='allowfullscreen'
      ></iframe>
    </div>
  )
}

export default Error
