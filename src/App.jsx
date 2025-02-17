import Home from './pages/homepage.jsx'
import Watchlist from './pages/watchlistpage.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path='/watchlist' element={<Watchlist />}/>
      </Routes>
    </>
  )
}

export default App
