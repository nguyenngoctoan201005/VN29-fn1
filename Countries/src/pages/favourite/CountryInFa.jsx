import './favouritepage.css'
import { Link } from 'react-router-dom';

export function CountryInFa({ country }) {
    return (
        <section className="favourite-item">
            <div className="sc-img">
                <img src={country.flags?.png} alt={country.name?.common} />
            </div>
            <div className="sc-ctn">
                <div className="sc-ctn-if">
                    <div>- Name : {country.name?.common}</div>
                    <div>- cca2 : {country.cca2} </div>
                    <div>- cioc : {country.cioc} </div>
                </div>
                <div className="sc-ctn-btn">
                    <Link to="/detail"><div>Xem chi tiết</div></Link>
                    <div>Xóa khỏi danh sách</div>
                </div>
            </div>
        </section>
    )
}