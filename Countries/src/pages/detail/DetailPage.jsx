import './detailpage.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export function DetailPage() {
    const { countryCode } = useParams();

    const [cntry, setCntry] = useState(null);

    useEffect(() => {
        // Reset lại state để hiển thị "Đang tải..." khi đổi trang
        setCntry(null);
        const cont = async () => {
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            const data = await res.json();
            setCntry(data[0]);
        };

        cont();
    }, [countryCode]);

    // SỬA LỖI CRASH 
    // Component DetailPage được render lần đầu.

    // "Thằng bảo vệ" if (!cntry) kiểm tra. Nó thấy cntry đang là null. Điều kiện !cntry là đúng.

    // Nó ngay lập tức return ra giao diện "Đang tải...". Toàn bộ phần JSX phức tạp ở bên dưới bị bỏ qua. App của mày không bị sập.

    // Trong khi đó, useEffect vẫn đang chạy ngầm để gọi API.

    // Khi API trả về dữ liệu, setCntry(data) được gọi. State thay đổi, component được render lại.

    // Lần này, "thằng bảo vệ" if (!cntry) kiểm tra lại. Nó thấy cntry bây giờ đã là một object chứa đầy dữ liệu (giá trị truthy). Điều kiện !cntry bây giờ là sai.

    // Nó bỏ qua khối if và đi tiếp xuống dưới, chạy đến lệnh return chính để vẽ ra giao diện chi tiết của quốc gia.

    if (!cntry) {
        return <div className='det-container'>Đang tải...</div>;
    }


    // Xử lý dữ liệu phức tạp một cách an toàn
    const currencyInfo = Object.values(cntry.currencies || {})[0] || {};
    const languages = Object.values(cntry.languages || {}).join(', ');
    const nativeOfficialName = Object.values(cntry.name?.nativeName || {})[0]?.official || cntry.name.official;

    return (
        <main className='det-container'>
            <div className="det_title">
                CHI TIẾT
            </div>
            <div className="det_content">
                <div className="det_flag1">
                    <div className="det_flag_mt">Lá cờ</div>
                    
                    {/* Dùng optional chaining (?.) để code an toàn hơn */}

                    <img src={cntry.flags?.png} alt='' />
                </div>
                <div className="det_flag2">
                    <div className="det_flag_mt">Quốc Huy</div>
                    <img src={cntry.coatOfArms?.png} alt='' />
                </div>
            </div>

            <div className="det_title">
                MÔ TẢ
            </div>

            <div className="det_txt">
                <div className="det_txt-lf">
                    <div>- Tên chung : {cntry.name?.common}</div>
                    <div>- Tên chính thức : {cntry.name?.official}</div>
                    <div>- Tên chính thức (chuẩn ngôn ngữ)  : {nativeOfficialName}</div>
                    <div>- Ngôn ngữ : {languages}</div>
                    <div>- cca2 : {cntry.cca2} </div>
                    <div>- cioc : {cntry.cioc}</div>
                    <div>- Độc Lập : {cntry.independent ? 'Đã độc lập' : 'Chưa độc lập'}</div>
                    <div>- Thành viên LHQ : {cntry.unMember ? 'Có' : 'Không'}</div>
                    <div>- Thủ đô : {cntry.capital?.join(', ')}</div>
                    <div>- Giáp biên giới : {cntry.borders?.join(', ')}</div>
                    
                </div>
                <div className="det_txt-rg">
                    <div>- Khu Vực : {cntry.region}</div>
                    <div>- Tiểu vùng : {cntry.subregion}</div>
                    {/* Sửa lỗi 2: Lấy tiền tệ đúng cách */}
                    <div>- Kí hiệu tiền tệ : {currencyInfo.symbol}</div>
                    <div>- Tên tiền tệ : {currencyInfo.name}</div>
                    {/* Format lại số cho dễ đọc */}
                    <div>- Dân số : {cntry.population?.toLocaleString('vi-VN')}</div>
                    <div>- FIFA : {cntry.fifa}</div>
                    <div>- Hướng đi đường chuẩn : {cntry.car?.side}</div>
                    {/* Sửa lỗi 3: Cho vào thẻ <a> */}
                    <div>- Vị trí bản đồ : <a href={cntry.maps?.googleMaps} target="_blank" rel="noopener noreferrer">Xem trên bản đồ</a></div>
                    {/* Sửa lỗi 4: Dùng join cho mảng */}
                    <div>- Timezone : {cntry.timezones?.join(', ')}</div>
                </div>
            </div>
        </main>
    );
}