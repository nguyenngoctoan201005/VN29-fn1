import './App.css'
import { Header } from './header/Header.jsx'
import { Nav } from './header/Nav.jsx'
import { HomePage } from './pages/home/HomePage.jsx'
import { DetailPage } from './pages/detail/DetailPage.jsx'
import { FavouritePage } from './pages/favourite/FavouritePage.jsx'
import { RegionPage } from './pages/region/RegionPage.jsx'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/independent?status=true')
      .then((respone) => {
        setCountries(respone.data);
      })
  }, []);


  const [list, setList] = useState([]);
  useEffect(() => {
    // Mỗi khi 'list' thay đổi, cái hàm này sẽ chạy
    console.log("List đã được cập nhật:", list);
  }, [list]);


  return (
    <>
      <Header list={list} />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} setList={setList} list={list} />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/favourite" element={<FavouritePage list={list} countries={countries} />}></Route>
        <Route path="/region" element={<RegionPage region='africa' />}></Route>
      </Routes>
    </>
  )
}

export default App
