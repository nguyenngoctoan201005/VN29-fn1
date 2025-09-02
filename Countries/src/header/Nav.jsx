import './nav.css'
import { Link } from 'react-router-dom'
export function Nav({region}) {
  return (
    <nav>
        {region.map(reg =>
          <Link to={`/region/${reg}`}><div className="tp" key={reg}>{reg.charAt(0).toUpperCase() + reg.slice(1)}</div></Link>
        )}
    </nav>
    )
}