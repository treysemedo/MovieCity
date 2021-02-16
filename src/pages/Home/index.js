import React, { useEffect, useState } from 'react'
import Tmdb from '../../api/Tmdb'
import MovieList from '../../components/MovieList'
import Banner from '../../components/Banner'
import Pagination from '../../components/Pagination'
import loadingImg from '../../imgs/loading.gif'
import './Home.css'

const Home = () => {
  const [bannerImg, setBannerImg] = useState(null)
  const [filterData, setFilterData] = useState(null)
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(2)

  useEffect(() => {
    const loadAll = async () => {
      if (!filterData) {
        let list = await Tmdb.getHomeList()
        setMovieList(list)
        // fetch banner movie
        let top_rated = list.filter((i) => i.slug === 'trending')
        let randomChosen = Math.floor(
          Math.random() * (top_rated[0].items.results.length - 1)
        )
        let chosen = top_rated[0].items.results[randomChosen]

        setBannerImg(chosen)
      } else {
        let newList = []
        newList[0] = await Tmdb.getFilteredList(filterData)
        setMovieList(newList)
      }
    }

    loadAll()
  }, [filterData])

  function handleFilterAplied(evt) {
    evt.preventDefault()
    setFilterData({
      category: evt.target.category.value,
      sortBy: evt.target.sortBy.value,
      page: 1,
      query: null,
    })
    setPage(1)
  }

  function handlePageChange(evt) {
    evt.preventDefault()
    setPage(Number(evt.target.value))
    setFilterData({ ...filterData, page: Number(evt.target.value) })
  }

  // function searchHandle(value) {
  //   if (value.length <= 0) return
  //   setFilterData({
  //     category: null,
  //     sortBy: null,
  //     page: 1,
  //     query: value,
  //   })
  //   setPage(1)
  // }

  return (
    <div className='page'>
      {bannerImg && <Banner item={bannerImg} onSubmit={handleFilterAplied} />}

      {movieList.length > 0 ? (
        <section className='moviesContainer'>
          {movieList.map((item, key) => (
            <MovieList key={key} title={item.title} items={item.items} />
          ))}
        </section>
      ) : (
        <div className='loading'>
          <img src={loadingImg} alt='loading' />
        </div>
      )}

      {filterData && <Pagination current={page} onClick={handlePageChange} />}
    </div>
  )
}

export default Home
