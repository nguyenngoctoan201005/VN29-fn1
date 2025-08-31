import './header.css'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
        <div class="hd_lf">
            <Link to="/"><img src="img/logo.png" alt=""/></Link>
        </div>
        <div class="hd_md">
            <div class="hd_md-ipt"><input type="text" name="" id="" placeholder="Search" /></div>
            <div class="hd_md-btn">Search</div>
        </div>
        <div class="hd_rg">
            <Link to="/favourite"><div><img src="img/heart.png" alt="" /></div></Link>
            <div class="hd_rg-count">5</div>
        </div>
    </header>
  )
}