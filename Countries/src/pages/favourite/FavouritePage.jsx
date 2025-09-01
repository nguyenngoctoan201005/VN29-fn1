import './favouritepage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CountryInFa } from './CountryInFa';


export function FavouritePage() {

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
        <main className='fv-container'>
            {oceania.map((country) => (
                <CountryInFa key={country.cca2} country={country} />
            ))}
        </main>
    )
}