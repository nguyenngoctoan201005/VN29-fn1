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
    console.log("List đã được cập nhật:", list);
  }, [list]);

  const region = ['asia' , 'europe' , 'americas', 'oceania', 'africa']
  return (
    <>
      <Header list={list} />
      <Nav region={region} />
      <Routes>
        <Route path="/" element={<HomePage region={region} countries={countries} setList={setList} list={list} />}></Route>
        <Route path="/detail/:countryCode" element={<DetailPage />}></Route>
        <Route path="/favourite" element={<FavouritePage setList={setList} list={list} countries={countries} />}></Route>
        <Route path="/region/:regionCode" element={<RegionPage list ={list} setList={setList} />} ></Route>
      </Routes>
    </>
  )
}

export default App
