import './header.css'
import { Link } from 'react-router-dom'

export function Header({list}) {

  function Count(){
      return  list.length;
  }


  return (
    <header>
        <div className="hd_lf">
            <Link to="/"><img src="img/logo.png" alt=""/></Link>
        </div>
        <div className="hd_md">
            <div className="hd_md-ipt"><input type="text" name="" id="" placeholder="Search" /></div>
            <div className="hd_md-btn">Search</div>
        </div>
        <div className="hd_rg">
            <Link to="/favourite"><div><img src="img/heart.png" alt="" /></div></Link>
            <div className="hd_rg-count">{Count()}</div>
        </div>
    </header>
  )
}