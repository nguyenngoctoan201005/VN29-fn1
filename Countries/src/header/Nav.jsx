import './nav.css'
import { Link } from 'react-router-dom'
export function Nav() {
  return (
    <nav>
        <Link to="/region"><div class="tp">Africa</div></Link>
        <Link to="/region"><div class="tp">Americas</div></Link>
        <Link to="/region"><div class="tp">Asia</div></Link>
        <Link to="/region"><div class="tp">Europe</div></Link>
        <Link to="/region"><div class="tp">Oceania</div></Link>
        <Link to="/region"><div class="tp">Polar</div></Link>
    </nav>
    )
}