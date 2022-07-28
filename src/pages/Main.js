import axios from 'axios'
import { useEffect } from 'react'
import { domain, imageBasePath, aPI } from '../globals'

const Main = ({ movies, setMovies, search, setSearch }) => {
  useEffect(() => {
    const getDailyMovies = async () => {
      const dailyMovies = await axios.get(
        `${domain}/trending/movie/day?api_key=${aPI}`
      )

      let dailyArr = dailyMovies.data.results
      setMovies(dailyArr)
    }
    getDailyMovies()
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const renderSearch = async (e) => {
    e.preventDefault()
    let searchRes = await axios.get(
      `${domain}/search/movie?query=${search}&api_key=${aPI}`
    )
    let searchArr = searchRes.data.results
    setMovies(searchArr)
  }

  return (
    <div className="page-wrap">
      <div className="header">
        <h1>TMDB LIBRARY</h1>
        <div className="search-section">
          <form onSubmit={renderSearch}>
            <input
              id="search-input"
              type="text"
              placeholder="Movie Title"
              value={search}
              onChange={handleChange}
            />
            <button id="search">Search</button>
          </form>
        </div>
      </div>
      <div className="titles-wrap">
        <h2>Titles</h2>
        {movies.map((movie) => (
          <ul key={movie.id}>
            <li>{movie.title}</li>
          </ul>
        ))}
      </div>
      <div className="poster-wrapper">
        <div className="poster-section">
          <h2 id="poster-title">Posters</h2>
          <div className="poster-images">
            {movies.map(
              (movie) =>
                movie.poster_path !== null && (
                  <div key={movie.id} className="img-card">
                    <img
                      id="poster"
                      src={`${imageBasePath}${movie.poster_path}`}
                      alt="Poster"
                    />
                    <p className="titles">{movie.title}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
