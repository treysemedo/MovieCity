import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return (
    <section
      className='banner'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
      }}
    >
      <div className='banner--vertical'>
        <div className='banner--horizontal'>
          <form onSubmit={props.onSubmit}>
            <div className='category'>
              <h2>filter</h2>
              <div className='hb'>
                <label>Category</label>
                <select id='category'>
                  <option value='28'>Action</option>
                  <option value='12'>Adventure</option>
                  <option value='16'>Animation</option>
                  <option value='35'>Comedy</option>
                  <option value='80'>Crime</option>
                  <option value='18'>Drama</option>
                  <option value='10751'>Family</option>
                  <option value='27'>Horror</option>
                  <option value='10749'>Romance</option>
                  <option value='878'>Science Fiction</option>
                </select>
              </div>
              <div className='hb'>
                <label>Sort By</label>
                <select id='sortBy'>
                  <option value='popularity.desc'>Popularity</option>
                  <option value='release_date.desc'>Latest Release</option>
                  <option value='vote_count.desc'>Imbd Votes</option>
                  <option value='vote_average.desc'>Imbd Rate</option>
                </select>
              </div>
              <div className='hb'>
                <input type='submit' value='Filter' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Banner
