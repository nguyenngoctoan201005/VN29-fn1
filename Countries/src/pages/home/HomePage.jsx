import './homepage.css';
import { Link } from 'react-router-dom';
import { CountriesReg } from './CountriesReg';
import { useState, useEffect } from 'react';
export function HomePage() {

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

    console.log(europe);


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
                <div className="imgintro-img1">
                    <img src="img/1.png" alt="" />
                </div>
                <div className="imgintro-img2">
                    <img src="img/2.png" alt="" />
                </div>
            </section>

            <CountriesReg region={asia} namerg="ASIA" />
            <CountriesReg region={europe} namerg="EUROPE" />
            <CountriesReg region={americas} namerg="AMERICAS" />
            <CountriesReg region={oceania} namerg="OCEANIA" />
            <CountriesReg region={africa} namerg="AFRICA" />
        </main>

    );
}