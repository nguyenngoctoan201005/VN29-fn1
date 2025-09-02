import './regionpage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { CountryInRg } from './CountryInRg';
import { useParams } from 'react-router-dom';
export function RegionPage({ region ,list , setList }) {

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


    const{regionCode} = useParams();

    return (
        <>
            <div className='tt'>{region}</div>
            <main className="region-container">
                {regionCode === 'asia' && asia.map(country => (
                    <CountryInRg key={country.cca2} country={country} list ={list} setList={setList} />
                ))}
                {regionCode === 'europe' && europe.map(country => (
                    <CountryInRg key={country.cca2} country={country} list ={list} setList={setList} />
                ))}
                {regionCode === 'americas' && americas.map(country => (
                    <CountryInRg key={country.cca2} country={country} list ={list} setList={setList} />
                ))}
                {regionCode === 'africa' && africa.map(country => (
                    <CountryInRg key={country.cca2} country={country} list ={list} setList={setList} />
                ))}
                {regionCode === 'oceania' && oceania.map(country => (
                    <CountryInRg key={country.cca2} country={country} list ={list} setList={setList} />
                ))}
            </main>
        </>

    )

}