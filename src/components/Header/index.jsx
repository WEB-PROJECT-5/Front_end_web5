import React from 'react'
import "./style.css"
export default function Header() {
   return (
      <header className="header">
         <div className="row header_top scrolled">
            <div className="logo col-3 ">
               <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/LOGO_MINI_gnydkq.png" alt="Logo is not exits" />
            </div>
            {/* col-4 */}
            <div className="navbar-header ">
               <nav className="navbar-header navbar-expand-lg ">
                  <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <a className="nav-link " href="/">Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/introduce">Introduce</a>
                        </li>
                        <li className="nav-item">
                           <div className="dropdown">
                              <a className=" nav-link btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Games
                              </a>
                              <ul className="dropdown-menu">
                                 <li><a className="dropdown-item" href="#">Action</a></li>
                                 <li><a className="dropdown-item" href="#">Another action</a></li>
                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
            <div className="header_right col-5">
               <div className="search_game">
                  <span><i className="fa-solid fa-magnifying-glass" /></span>
                  <input type="text" placeholder=" Search for games" />
               </div>
               <div className="favourites">
                  <span><i className="fa-solid fa-heart" style={{ color: '#FFFFFF' }} /></span>
               </div>
               <div className="profile">
                  <div className="dropdown">
                     <a className=" " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730815107/ygmfpeympiidkfqsbvb5.png" style={{ width: '40px' }} alt="" />
                     </a>
                     <ul className="dropdown-menu" style={{ marginTop: '30px' }}>
                        <li><a className="dropdown-item" href="#">Thông tin cá nhân</a></li>
                        <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}
