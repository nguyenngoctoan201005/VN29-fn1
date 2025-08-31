import './App.css'
import { Header } from './header/Header.jsx'
import { Nav } from './header/Nav.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { DetailPage } from './pages/DetailPage.jsx'
import { FavouritePage } from './pages/FavouritePage.jsx'
import { RegionPage } from './pages/RegionPage.jsx'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/favourite" element={<FavouritePage />}></Route>
        <Route path="/region" element={<RegionPage />}></Route>
      </Routes>
    </>
  )
}

export default App
