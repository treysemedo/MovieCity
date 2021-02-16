import React from 'react'
import './MovieList.css'
import noPoster from '../../imgs/no-poster.png'
import { Link } from 'react-router-dom'

const MovieList = ({ title, items }) => {
  return (
    <div className='movieGroup'>
      <h2>{title}</h2>
      <div className='movieGroup--listarea'>
        <div className='movieGroup--list'>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className='movieGroup--item'>
                <Link to={`/Movie/${item.id}`}>
                  {item.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                      alt={item.original_title}
                    />
                  )}
                  {!item.poster_path && (
                    <img src={noPoster} alt={item.original_title} />
                  )}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
