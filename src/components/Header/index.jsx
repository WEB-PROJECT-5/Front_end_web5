import React from 'react';
import "./style.css";

// Khai báo component Header
export default function Header() {
   return (
      <header className="header">
         {/* Thanh điều hướng */}
         <nav className="navbar header_top scrolled navbar-expand-lg">
            <div className="container-fluid">
               {/* Nút để mở menu trên các màn hình nhỏ */}
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               {/* Logo */}
               <a className="navbar-brand logo" href="/">
                  <img src="https://i.postimg.cc/Y2D91Zrq/LOGO-MINI-gnydkq.pngnp" alt="Logo" />
               </a>

               {/* Phần danh sách menu */}
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                     {/* Mục Home */}
                     <li className="nav-item">
                        <a className="nav-link active magic-hover magic-hover__square" aria-current="page" href="/">Home</a>
                     </li>

                     {/* Mục Introduce */}
                     <li className="nav-item">
                        <a className="nav-link magic-hover magic-hover__square" href="/introduce">Introduce</a>
                     </li>

                     {/* Mục dropdown cho Games */}
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle magic-hover magic-hover__square" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Games
                        </a>
                        <ul className="dropdown-menu">
                           <li><a className="dropdown-item" href="#">UEH Review</a></li>
                           <li><a className="dropdown-item" href="#">UEH Green</a></li>
                           <li><hr className="dropdown-divider" /></li>
                           <li><a className="dropdown-item" href="#">EduGames</a></li>
                        </ul>
                     </li>

                     {/* Mục tìm kiếm game */}
                     <li className="nav-item search-container">
                        <div className="search_game">
                           <span><i className="fa-solid fa-magnifying-glass"></i></span>
                           <input type="text" placeholder=" Search for games" />
                        </div>
                     </li>
                  </ul>

                  {/* Mục yêu thích */}
                  <div className="favourites">
                     <span><i className="fa-solid fa-heart" style={{ color: '#FFFFFF' }} /></span>
                  </div>

                  {/* Mục thông tin người dùng */}
                  <div className="profile">
                     <div className="dropdown">
                        <a className=" " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <img src="https://i.postimg.cc/Y9npzLwy/ygmfpeympiidkfqsbvb5.png" style={{ width: '40px' }} alt="" />
                        </a>
                        <ul className="dropdown-menu" style={{ marginTop: '30px' }}>
                           {/* Mục Profile */}
                           <li><a className="dropdown-item" href="/profile">Profile</a></li>
                           {/* Mục Settings */}
                           <li><a className="dropdown-item" href="/profile/setprofile">Settings</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
}
