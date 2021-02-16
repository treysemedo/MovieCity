import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Tmdb from '../../api/Tmdb'
import MovieList from '../../components/MovieList'

const Search = () => {
  const { query } = useParams()
  const [results, setresults] = useState([])

  useEffect(() => {
    const loadData = async () => {
      let list = []
      list[0] = await Tmdb.getSearchList({ query: query, page: 1 })
      setresults(list)
    }
    loadData()
  }, [query])
  return results.map((item, key) => (
    <MovieList key={key} title={item.title} items={item.items} />
  ))
}

export default Search
