import './favouritepage.css'
import { Link } from 'react-router-dom'
export function FavouritePage() {
    return (
        <main className='fv-container'>
            <section className="favourite-item">
                <div className="sc-img">
                    <img src="img/Co-Vietnam.png" alt="" />
                </div>
                <div className="sc-ctn">
                    <div className="sc-ctn-if">
                        <div>- Name : VietNam</div>
                        <div>- cca2 : VN </div>
                        <div>- cioc : VIE </div>
                    </div>
                    <div className="sc-ctn-btn">
                        <Link to="/detail"><div>Xem chi tiết</div></Link>
                        <div>Xóa khỏi danh sách</div>
                    </div>
                </div>
            </section>

            <section className="favourite-item">
                <div className="sc-img">
                    <img src="img/Co-Vietnam.png" alt="" />
                </div>
                <div className="sc-ctn">
                    <div className="sc-ctn-if">
                        <div>- Name : VietNam</div>
                        <div>- cca2 : VN </div>
                        <div>- cioc : VIE </div>
                    </div>
                    <div className="sc-ctn-btn">
                        <Link to="/detail"><div>Xem chi tiết</div></Link>
                        <div>Xóa khỏi danh sách</div>
                    </div>
                </div>
            </section>
             <section className="favourite-item">
                <div className="sc-img">
                    <img src="img/Co-Vietnam.png" alt="" />
                </div>
                <div className="sc-ctn">
                    <div className="sc-ctn-if">
                        <div>- Name : VietNam</div>
                        <div>- cca2 : VN </div>
                        <div>- cioc : VIE </div>
                    </div>
                    <div className="sc-ctn-btn">
                        <Link to="/detail"><div>Xem chi tiết</div></Link>
                        <div>Xóa khỏi danh sách</div>
                    </div>
                </div>
            </section>

        </main>
    )
}