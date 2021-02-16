import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../external/bootstrap.css'
import './NavBar.css'
import user_icon from '../../imgs/user_icon.png'
const NavBar = (props) => {
  const [search, setsearch] = useState('')
  function handleChange(evt) {
    setsearch(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        MovieCity
      </Link>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              About Us <span className='sr-only'>(current)</span>
            </Link>
          </li>
          {!props.email ? (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>
                  Register <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signin'>
                  Sign In <span className='sr-only'>(current)</span>
                </Link>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <Link
                className='nav-link'
                onClick={props.handleSignOut}
                to='/signup'
              >
                Sign Out <span className='sr-only'>(current)</span>
              </Link>
            </li>
          )}
        </ul>
        {props.email && (
          <Link to='/profile'>
            <img src={user_icon} alt='user--Icon' className='Icon'></img>
          </Link>
        )}
        <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            id='query'
            className='form-control mr-sm-2'
            type='search'
            placeholder='Movie name'
            aria-label='Search'
            required={true}
          ></input>
          <Link to={`/search/${search}`}>
            <button className='btn btn-outline-success my-2 my-sm-0'>
              Search
            </button>
          </Link>
        </form>
      </div>
    </nav>
  )
}

export default NavBar
