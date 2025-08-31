import './App.css'
import { Header } from './header/Header.jsx'
import { Nav } from './header/Nav.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { DetailPage } from './pages/DetailPage.jsx'
import { FavouritePage } from './pages/FavouritePage.jsx'
import { RegionPage } from './pages/RegionPage.jsx'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <RegionPage />
    </>
  )
}

export default App
