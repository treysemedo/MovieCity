import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
  return (
    <div className='hb1'>
      {props.current > 1 && (
        <button
          className='bt1'
          value={props.current - 1}
          onClick={props.onClick}
        >
          Previous
        </button>
      )}
      ,
      {props.current > 2 && (
        <button
          className='bt1'
          value={props.current - 2}
          onClick={props.onClick}
        >
          {props.current - 2}
        </button>
      )}
      {props.current > 1 && (
        <button
          className='bt1'
          value={props.current - 1}
          onClick={props.onClick}
        >
          {props.current - 1}
        </button>
      )}
      <button className='bt1C' value={props.current} onClick={props.onClick}>
        {props.current}
      </button>
      {props.current < 20 && (
        <button
          className='bt1'
          value={props.current + 1}
          onClick={props.onClick}
        >
          {props.current + 1}
        </button>
      )}
      {props.current < 18 && (
        <button
          className='bt1'
          value={props.current + 2}
          onClick={props.onClick}
        >
          {props.current + 2}
        </button>
      )}
      {props.current < 20 && (
        <button
          className='bt1'
          value={props.current + 1}
          onClick={props.onClick}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Pagination
