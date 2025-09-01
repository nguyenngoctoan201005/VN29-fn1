import './homepage.css';
import { Country } from './Country';
import { Link } from 'react-router-dom';
export function CountriesReg() {

    return (
        <section className="cpn">
            <div className="cpn-tt">
                <div className="cpn-tt-txt">
                    ASIA
                </div>
                <div>
                    <Link to="/region" className="cpn-tt-xem">
                        Xem tất cả
                    </Link>

                </div>
            </div>
            <div className="cpn-cont">
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
            </div>
        </section>
    );
}