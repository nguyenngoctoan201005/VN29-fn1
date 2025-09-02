import './homepage.css';
import { Link } from 'react-router-dom';
import { CountriesReg } from './CountriesReg';
import { useState, useEffect } from 'react';
export function HomePage({setList , list }) {

    const [asia, setAsia] = useState([]);
    useEffect(() => {
        const cont = async () => {
            const res = await fetch('https://restcountries.com/v3.1/region/asia');
            const data = await res.json();
            setAsia(data);
        }

        cont();
    }, [])


    const [europe, setErope] = useState([]);
    useEffect(() => {
        const cont = async () => {
            const res = await fetch('https://restcountries.com/v3.1/region/europe');
            const data = await res.json();
            setErope(data);
        }

        cont();
    }, [])

    


    const [americas, setAmericas] = useState([]);
    useEffect(() => {
        const cont = async () => {
            const res = await fetch('https://restcountries.com/v3.1/region/americas');
            const data = await res.json();
            setAmericas(data);
        }

        cont();
    }, [])

    const [africa, setAfrica] = useState([]);
    useEffect(() => {
        const cont = async () => {
            const res = await fetch('https://restcountries.com/v3.1/region/africa');
            const data = await res.json();
            setAfrica(data);
        }

        cont();
    }, [])

    const [oceania, setOceania] = useState([]);
    useEffect(() => {
        const cont = async () => {
            const res = await fetch('https://restcountries.com/v3.1/region/oceania');
            const data = await res.json();
            setOceania(data);
        }

        cont();
    }, [])


    return (
        <main className='hm-container'>
            <section className="imgintro">
                <div className="imgintro-img1" onClick={()=>{alert('Mừng kỉ niệm 80 năm ngày Bác đọc bản tuyên ngôn độc lập khai sinh ra nước Việt Nam Dân Chủ Cộng Hòa 🎉🎉🎉')}}>
                    <a href="https://www.youtube.com/watch?v=xRKUB3fUTJM" target='_blank'><img src="img/1.png" alt="" /></a>
                </div>
                <div className="imgintro-img2" onClick={()=>{alert('2/9/1945 - 2/9/2025🎉🎉🎉')}}>
                    <a href="https://www.youtube.com/watch?v=-WjOCaAa5bY" target='_blank'><img src="img/2.png" alt="" /></a>
                </div>
            </section>

            <CountriesReg region={asia} namerg="ASIA"  setList={setList} list ={list} />
            <CountriesReg region={europe} namerg="EUROPE" setList={setList}  list ={list} />
            <CountriesReg region={americas} namerg="AMERICAS" setList={setList}  list ={list}  />
            <CountriesReg region={oceania} namerg="OCEANIA" setList={setList} list ={list}  />
            <CountriesReg region={africa} namerg="AFRICA" setList={setList} list ={list}  />
        </main>

    );
}