import './regionpage.css'
import { Link } from 'react-router-dom';
export function CountryInRg({ country }) {
    return (
        <Link to="/detail">
            <div className="cpn-cont-detr">
                <div className="cpn-cont-det-imgr"><img src={country.flags.png} alt="" /></div>
                <div className="cpn-cont-infor">
                    <div>
                        <div>- Name : {country.name.common}</div>
                        <div>- cca2 : {country.cca2} </div>
                        <div>- cioc : {country.cioc} </div>
                    </div>
                </div>
                <div className="cpn-cont-info-heartr">
                    <img src="img/heart.png" alt="" />
                </div>
            </div>
        </Link>
    );
}

