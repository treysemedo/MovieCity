import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Tmdb from '../../api/Tmdb'
import noPoster from '../../imgs/no-poster.png'
import noBanner from '../../imgs/cinema.jpg'
import './Movie.css'
import firebase from '../../firebase'
import { useHistory } from 'react-router-dom'

const Movie = (props) => {
  const [data, setData] = useState('Default User')
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const loadData = async () => {
      setData(await Tmdb.getMovie(id))
    }
    loadData()
  }, [id])

  function writeUserData() {
    if (!props.email) {
      history.push('/signin')
    } else {
      firebase
        .database()
        .ref(props.email.replace('.', ''))
        .orderByKey()
        .limitToLast(100)
      firebase.database().ref(props.email.replace('.', '')).push(data.title)
      history.push('/')
    }
  }

  const getBanner = () => {
    if (data.backdrop_path) {
      return {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }
    }
    return {
      backgroundImage: `url(${noBanner})`,
    }
  }

  return (
    <div className='Movie--container' style={getBanner()}>
      <div className='Movie--container1'>
        <div className='Movie--details'>
          <div className='Movie'>
            <h2>{data.title}</h2>
            {data.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
              />
            ) : (
              <img src={noPoster} alt={data.title} />
            )}
            <p>{data.overview}</p>
            <button onClick={writeUserData}>Rent</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
