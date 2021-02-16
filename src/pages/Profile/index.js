import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import firebase from '../../firebase'
import './Profile.css'

export default function Profile(props) {
  const [movieList, setMovieList] = useState([])
  const [fix, setFix] = useState('fix')

  useEffect(() => {
    if (props.email) {
      setFix(props.email.replace('.', ''))
    }
  }, [props.email])

  useEffect(() => {
    const todoRef = firebase.database().ref(fix)
    todoRef.on('value', (snapshot) => {
      if (snapshot.val()) {
        let value = snapshot.val()

        setMovieList(value)
      }
    })
  }, [fix])

  function handleRemove(value) {
    var ref = firebase.database().ref(props.email.replace('.', ''))
    // Query applesQuery = ref.child("firebase-test").orderByChild("title").equalTo("Apple");
    //     firebase
    ref.child(value).remove()
  }

  return (
    <>
      <div className='Profile--Background'>
        <div className='Profile--Background1'>
          <div className='Profile--container'>
            <h2 className='Title'>My movies</h2>
            {movieList ? (
              Object.entries(movieList).map((item, key) => (
                <div className='Movie--item' key={key}>
                  <p className='Moviesp'>{item[1]}</p>
                  <div className='hb--bt'>
                    <Link to='/player'>
                      <Button className='btn btn-outline-success my-2 my-sm-0'>
                        watch
                      </Button>
                    </Link>
                    <Button
                      className='btn btn-outline-success my-2 my-sm-0'
                      onClick={() => handleRemove(item[0])}
                    >
                      remove
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p>empty</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
