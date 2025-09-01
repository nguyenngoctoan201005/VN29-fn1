import './homepage.css';
import { Link } from 'react-router-dom';
import { CountriesReg } from './CountriesReg';

export function HomePage() {
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

            <CountriesReg />
            

        </main>

    );
}