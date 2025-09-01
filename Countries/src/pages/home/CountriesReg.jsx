import './homepage.css';
import { Country } from './Country';
import { Link } from 'react-router-dom';

export function CountriesReg({ region ,namerg }) {
    return (
        <section className="cpn">
            <div className="cpn-tt">
                <div className="cpn-tt-txt">
                    {namerg}
                </div>
                <div>
                    <Link to="/region" className="cpn-tt-xem">
                        Xem tất cả
                    </Link>

                </div>
            </div>
            <div className="cpn-cont">
                {region.slice(0, 6).map((country, index) => (
                    <Country key={country.cca2 || index} country={country} />
                ))}
            </div>
        </section>
    );
}