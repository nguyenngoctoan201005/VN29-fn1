import './homepage.css';
import { Link } from 'react-router-dom';

export function Country() {
    return (
        <Link to="/detail">
            <div className="cpn-cont-det">
                <div className="cpn-cont-det-img"><img src="img/Co-Vietnam.png" alt="" /></div>
                <div className="cpn-cont-info">
                    <div>
                        <div>Name : VietNam</div>
                        <div>cca2 : VN </div>
                        <div>cioc : VIE </div>
                    </div>
                    <div className="cpn-cont-info-heart">
                        <img src="img/heart.png" alt="" />
                    </div>
                </div>
            </div>
        </Link>
    )
}