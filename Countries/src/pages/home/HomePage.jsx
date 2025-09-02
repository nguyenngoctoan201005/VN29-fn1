import './homepage.css';
import { Link } from 'react-router-dom';
import { CountriesReg } from './CountriesReg';
export function HomePage({setList , list , region }) {

    return (
        <main className='hm-container'>
            <section className="imgintro">
                <div className="imgintro-img1" onClick={()=>{alert('Mừng kỉ niệm 80 năm ngày Bác đọc bản tuyên ngôn độc lập khai sinh ra nước Việt Nam Dân Chủ Cộng Hòa 🎉🎉🎉')}}>
                    <a href="https://www.youtube.com/watch?v=xRKUB3fUTJM" target='_blank'><img src="img/1.png" alt="" /></a>
                </div>
                <div className="imgintro-img2" onClick={()=>{alert('2/9/1945 - 2/9/2025🎉🎉🎉')}}>
                    <a href="https://www.youtube.com/watch?v=-WjOCaAa5bY" target='_blank'><img src="img/2.png" alt="" /></a>
                </div>
            </section>
            
            {region.map(rg =>
                <CountriesReg region={rg} namerg={rg.toUpperCase()}  setList={setList} list ={list} />
            )}
        </main>

    );
}