import './header.css'

export function Header() {
  return (
    <header>
        <div class="hd_lf">
            <a href="HomePage.html"><img src="img/logo.png" alt=""/></a>
        </div>
        <div class="hd_md">
            <div class="hd_md-ipt"><input type="text" name="" id="" placeholder="Search" /></div>
            <div class="hd_md-btn">Search</div>
        </div>
        <div class="hd_rg">
            <a href="FavouriteList.html"><div><img src="img/heart.png" alt="" /></div></a>
            <div class="hd_rg-count">5</div>
        </div>
    </header>
  )
}