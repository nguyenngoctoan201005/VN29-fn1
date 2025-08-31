import './detailpage.css'

export function DetailPage() {
    return (
        <main className='det-container'>
            <div className="det_title">
                CHI TIẾT
            </div>
            <div className="det_content">
                <div className="det_flag">
                    <div className="det_flag_mt">Lá cờ</div>
                    <img src="img/Co-Vietnam.png" alt="" />
                </div>

                <div className="det_flag">
                    <div className="det_flag_mt">Quốc Huy</div>
                    <img src="img/Quoc huy VN.jpg" alt="" />
                </div>
            </div>


            <div className="det_title">
                MÔ TẢ
            </div>

            <div className="det_txt">
                <div className="det_txt-lf">
                    <div>- Tên : Vietnam</div>
                    <div>- Tên chính thức : Cộng Hòa xã hội chủ nghĩa Việt Nam</div>
                    <div>- cca2 : VN </div>
                    <div>- cioc : VIE</div>
                    <div>- Độc Lập : Đã độc lập</div>
                    <div>- Thành viên LHQ : Có </div>
                    <div>- Thủ đô : Hà Nội</div>
                    <div>- Khu Vực : Asia</div>
                </div>
                <div className="det_txt-rg">
                    <div>- Mã tiền tệ quốc tế : VND</div>
                    <div>- Kí hiệu tiền tệ : đ</div>
                    <div>- Tên tiền tệ : Vietnam đồng</div>
                    <div>- Dân số : 100000000</div>
                    <div>- fifa : VIE</div>
                    <div>- Hướng đi đường : phải</div>
                    <div>- Vị trí bản đồ : link.........</div>
                    <div>- Timezone : ....</div>
                </div>
            </div>

        </main>
    )
}