import './App.css'
import { Header } from './header/Header.jsx'
import { Nav } from './header/Nav.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { DetailPage } from './pages/DetailPage.jsx'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <DetailPage />
    </>
  )
}

export default App
