import './homepage.css';
import { Link } from 'react-router-dom';

export function Country({ country, setList, list  }) {
    function addCountry() {
            if(list.includes(country.cca2)){
                alert('Đất nước đã có trong thư mục yêu thích rồi ❤️ ');
                return ;
            }
        setList([...list, country.cca2])
    }

    return (
        <div className="cpn-cont-det">
            <Link to="/detail">
                <div className="cpn-cont-det-img"><img src={country.flags.png} alt="" /></div>
                <div className="cpn-cont-info">
                    <div>
                        <div>- Name : {country.name.common}</div>
                        <div>- cca2 : {country.cca2} </div>
                        <div>- cioc : {country.cioc} </div>
                    </div>

                </div>
            </Link>
            <div className="cpn-cont-info-heart" >
                <img src="img/heart.png" alt="" onClick={addCountry} />
            </div>
        </div>
    )
}