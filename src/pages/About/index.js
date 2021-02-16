import React from 'react'
import SmoothImage from 'react-smooth-image'
import './About.css'
import Igor from '../../imgs/igor.jpg'
import Nuno from '../../imgs/nuno.jpg'
import Vincent from '../../imgs/vincent.jpg'
const About = () => {
  return (
    <div className='container'>
      <h2>About Us</h2>
      <div className='card-deck'>
        <div className='card'>
          <SmoothImage className='card-img-top' src={Igor} alt='Igor Semedo' />
          <div className='card-body'>
            <h5 className='card-title'>Igor Semedo</h5>

            <p className='card-text'>
              <small className='text-muted'>
                3rd year Computer Science in English
              </small>
            </p>
            <a
              href='https://github.com/treysemedo'
              className='btn btn-dark '
              target='blank'
            >
              Github
            </a>
          </div>
        </div>
        <div className='card'>
          <SmoothImage className='card-img-top' src={Nuno} alt='Nuno Azevedo' />
          <div className='card-body'>
            <h5 className='card-title'>Nuno Azevedo</h5>
            <p className='card-text'>
              <small className='text-muted'>
                3rd year Computer Science in English
              </small>
            </p>

            <a
              href='https://github.com/'
              className='btn btn-dark'
              target='blank'
            >
              Github
            </a>
          </div>
        </div>
        <div className='card'>
          <SmoothImage
            className='card-img-top'
            src={Vincent}
            alt='Vincent Arioli'
          />
          <div className='card-body'>
            <h5 className='card-title'>Vincent Arioli</h5>
            <p className='card-text'>
              <small className='text-muted'>
                3rd year Computer Science in English
              </small>
            </p>
            <a
              href='https://github.com/'
              className='btn btn-dark'
              target='blank'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
