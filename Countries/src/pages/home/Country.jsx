import './homepage.css';
import { Link } from 'react-router-dom';

export function Country({ country }) {
    return (
        <Link to="/detail">
            <div className="cpn-cont-det">
                <div className="cpn-cont-det-img"><img src={country.flags.png} alt="" /></div>
                <div className="cpn-cont-info">
                    <div>
                        <div>- Name : {country.name.common}</div>
                        <div>- cca2 : {country.cca2} </div>
                        <div>- cioc : {country.cioc} </div>
                    </div>

                </div>
                <div className="cpn-cont-info-heart">
                    <img src="img/heart.png" alt="" />
                </div>
            </div>
        </Link>
    )
}