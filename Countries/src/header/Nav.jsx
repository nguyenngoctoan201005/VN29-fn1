import './nav.css'
import { Link } from 'react-router-dom'
export function Nav() {
  return (
    <nav>
        <Link to="/region"><div className="tp">Africa</div></Link>
        <Link to="/region"><div className="tp">Americas</div></Link>
        <Link to="/region"><div className="tp">Asia</div></Link>
        <Link to="/region"><div className="tp">Europe</div></Link>
        <Link to="/region"><div className="tp">Oceania</div></Link>
        <Link to="/region"><div className="tp">Polar</div></Link>
    </nav>
    )
}