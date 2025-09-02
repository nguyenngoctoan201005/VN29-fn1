import './regionpage.css'
import { Link } from 'react-router-dom';
export function CountryInRg({ country, list, setList }) {

    function addCountry() {
        if (list.includes(country.cca2)) {
            alert('Đất nước đã có trong thư mục yêu thích rồi ❤️ ');
            return;
        }
        setList([...list, country.cca2])
    }

    return (

        <div className="cpn-cont-detr">
            <Link to={`/detail/${country.cca2}`}>
                <div className="cpn-cont-det-imgr"><img src={country.flags.png} alt="" /></div>
                <div className="cpn-cont-infor">
                    <div>
                        <div>- Name : {country.name.common}</div>
                        <div>- cca2 : {country.cca2} </div>
                        <div>- cioc : {country.cioc} </div>
                    </div>
                </div>
            </Link>
            <div className="cpn-cont-info-heartr">
                <img src="/img/heart.png" alt="" onClick={addCountry} />
            </div>

        </div>

    );
}

