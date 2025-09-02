import './favouritepage.css'
import { Link } from 'react-router-dom';

export function CountryInFa({ country , list , setList }) {
    // 2. Viết hàm xử lý việc xóa
    const handleDelete = () => {
        // Dùng `filter` để tạo ra một mảng mới không chứa cca2 của nước này
        const newList = list.filter(code => code !== country.cca2);
        
        // Cập nhật lại state ở component App bằng mảng mới
        setList(newList);
    }


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
                    <Link to={`/detail/${country.cca2}`}><div>Xem chi tiết</div></Link>
                    <div onClick={handleDelete}>Xóa khỏi danh sách</div>
                </div>
            </div>
        </section>
    )
}