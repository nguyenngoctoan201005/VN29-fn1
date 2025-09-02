import './favouritepage.css'
import { Link } from 'react-router-dom'
import { CountryInFa } from './CountryInFa';


export function FavouritePage({ list, countries }) {

    const test = [];
    countries.forEach((country) => {      // ele đổi tên thành country cho dễ hiểu
        list.forEach(favoriteCode => { // element đổi tên thành favoriteCode

            // So sánh mã của country với mã yêu thích
            if (country.cca2 === favoriteCode) {

                // Push cả object country vào mảng kết quả
                test.push(country);
            }
        });
    });

    // Bây giờ mảng 'test' mới chứa đúng những gì mày cần

    return (
        <main className='fv-container'>
            {test.map(country => (
                <CountryInFa key={country.cioc} country={country} />
            ))}
        </main>
    )
}