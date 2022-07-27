import { useState } from 'react'
import Main from './pages/Main'
import './styles/App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [movieSearch, setSearch] = useState('')

  return (
    <div className="App">
      <Main
        movies={movies}
        setMovies={setMovies}
        search={movieSearch}
        setSearch={setSearch}
      ></Main>
    </div>
  )
}

export default App
