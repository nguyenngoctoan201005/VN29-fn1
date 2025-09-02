import './homepage.css';
import { Country } from './Country';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export function CountriesReg({ region, namerg, setList, list }) {
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
        <section className="cpn">
            <div className="cpn-tt">
                <div className="cpn-tt-txt">
                    {namerg}
                </div>
                <div>
                    <Link to={`/region/${namerg.toLowerCase()}`} className="cpn-tt-xem">
                        Xem tất cả
                    </Link>

                </div>
            </div>
            <div className="cpn-cont">
                {region === 'asia' && asia.slice(0, 6).map((country, index) => (
                    <Country key={country.cca2 || index} country={country} setList={setList} list={list} />
                ))
                }

                {region === 'europe' && europe.slice(0, 6).map((country, index) => (
                    <Country key={country.cca2 || index} country={country} setList={setList} list={list} />
                ))
                }

                {region === 'africa' && africa.slice(0, 6).map((country, index) => (
                    <Country key={country.cca2 || index} country={country} setList={setList} list={list} />
                ))
                }

                {region === 'americas' && americas.slice(0, 6).map((country, index) => (
                    <Country key={country.cca2 || index} country={country} setList={setList} list={list} />
                ))
                }

                {region === 'oceania' && oceania.slice(0, 6).map((country, index) => (
                    <Country key={country.cca2 || index} country={country} setList={setList} list={list} />
                ))
                }
                
            </div>
        </section>
    );
}