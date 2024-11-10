import React from 'react';
// Nhập thư viện React để xây dựng giao diện.

import 'bootstrap/dist/css/bootstrap.min.css';
// Nhập CSS của Bootstrap, giúp trang có phong cách giao diện mặc định với các thành phần Bootstrap.

import 'aos/dist/aos.css';
// Nhập CSS của thư viện AOS (Animate on Scroll), cung cấp hiệu ứng khi cuộn trang.

import 'swiper/css';
// Nhập CSS mặc định của Swiper, giúp thiết lập phong cách cho trình chiếu ảnh.

import 'swiper/css/pagination';
// Nhập CSS cho chức năng phân trang của Swiper.

import 'swiper/css/navigation';
// Nhập CSS cho chức năng điều hướng của Swiper.

import 'font-awesome/css/font-awesome.min.css';
// Nhập thư viện Font Awesome để có thể sử dụng các biểu tượng (icon) phổ biến.

import './introduce.css';
// Nhập CSS tùy chỉnh cho trang Introduce, dùng để bổ sung phong cách riêng cho các thành phần giao diện.

import AOS from 'aos';
// Nhập thư viện AOS (Animate on Scroll), cung cấp các hiệu ứng khi cuộn trang.

import Swiper from 'swiper';
// Nhập thư viện Swiper cho trình chiếu ảnh.

import logoMini from '../../assets/Image/Trang/LOGO_MINI.png';
// Nhập ảnh logo nhỏ dùng trong header của trang.

import logoMini3 from '../../assets/Image/Trang/LOGO_MINI3.png';
// Nhập ảnh logo nhỏ cho footer của trang.

import avatar3 from '../../assets/Image/Trang/Avatar3.jpg';
// Nhập ảnh đại diện của tác giả đầu tiên.

import thumbnail1 from '../../assets/Image/Trang/BeGreen5.png';
// Nhập ảnh thumbnail cho banner chính của trang.

import picGame1 from '../../assets/Image/Trang/Hình_Game/10.jpg';
// Nhập ảnh cho slide game đầu tiên trong danh sách trình chiếu.

import picGame2 from '../../assets/Image/Trang/Hình_Game/17.jpg';
import picGame3 from '../../assets/Image/Trang/Hình_Game/18.jpg';
import picGame4 from '../../assets/Image/Trang/Hình_Game/11.jpg';
import picGame5 from '../../assets/Image/Trang/Hình_Game/12.jpg';
import picGame6 from '../../assets/Image/Trang/Hình_Game/13.jpg';
import picGame7 from '../../assets/Image/Trang/Hình_Game/14.jpg';
import picGame8 from '../../assets/Image/Trang/Hình_Game/15.jpg';
import picGame9 from '../../assets/Image/Trang/Hình_Game/16.jpg';
// Nhập ảnh cho các slide khác nhau trong danh sách game trình chiếu.

import leaf from '../../assets/Image/Trang/tải xuống.gif';
// Nhập ảnh động chiếc lá để tạo hiệu ứng trang trí động trên trang.



class Introduce extends React.Component {
   componentDidMount() {
      AOS.init();
      new Swiper('.mySwiper', {
         watchSlidesProgress: true,
         slidesPerView: 3,
         spaceBetween: 30,
      });
      // magicMouse({
      //   cursorOuter: 'circle',
      //   hoverEffect: 'circle-move',
      //   hoverItemMove: false,
      //   defaultCursor: false,
      //   outerWidth: 30,
      //   outerHeight: 30,
      // });

   }

   render() {
      return (
         <div>
            <div class="drop-leaf">
               <img src={leaf} alt="Leaf" />
            </div>
            <header className="header-intro">
               <nav className="navbar header_top scrolled navbar-expand-lg">
                  <div className="container-fluid">
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                     <a className="navbar-brand logo" href="#">
                        <img src={logoMini} alt="Logo" />
                     </a>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                           <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#">Introduce</a>
                           </li>
                           <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Games
                              </a>
                              <ul className="dropdown-menu">
                                 <li><a className="dropdown-item" href="#">UEH Review</a></li>
                                 <li><a className="dropdown-item" href="#">UEH Green</a></li>
                                 <li><hr className="dropdown-divider" /></li>
                                 <li><a className="dropdown-item" href="#">EduGames</a></li>
                              </ul>
                           </li>
                           <li className="nav-item search-container">
                              <div className="search_game">
                                 <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                 <input type="text" placeholder=" Search for games" />
                              </div>
                           </li>
                        </ul>
                        <div className="favourites">
                           <span><i className="fa-solid fa-heart" style={{ color: '#FFFFFF' }}></i></span>
                        </div>
                        <div className="profile">
                           <div className="dropdown">
                              <a className="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <img src="../assets/Image/Trang/Profile.png" style={{ width: '40px' }} alt="" />
                              </a>
                              <ul className="dropdown-menu" style={{ marginTop: '30px' }}>
                                 <li><a className="dropdown-item" href="#">Profile</a></li>
                                 <li><a className="dropdown-item" href="#">Settings</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </nav>
            </header>
            <div className="banner-container" style={{ marginTop: '100px' }}>
               <div className="row">
                  <div className="col-sm-4" data-aos="fade-up" data-aos-duration="3000" data-aos-easing="linear" data-aos-delay="50" data-aos-offset="200" style={{ marginTop: '100px' }}>
                     <h1>Explore our University Web Game!</h1>
                     <pre>
                        Learn, protect the environment, and discover what makes our campus special
                        through fun and interactive challenges!
                     </pre>
                     <a className="btn btn-warning magic-hover magic-hover__square" href="#" role="button">Play Now</a>
                  </div>
                  <div className="thumbnail col-sm-8" data-aos="zoom-in-up" data-aos-duration="3000">
                     <img src={thumbnail1} className="pulse img-fluid float-end" alt="Game Thumbnail" />
                  </div>
               </div>
            </div>
            <div className="swiper mySwiper">
               <div>
                  <h1 className="float-start" style={{ textAlign: 'left', marginLeft: '140px' }}>GAME HOT</h1>
                  <button type="button" className="btn btn-outline-warning float-end magic-hover magic-hover__square" style={{ textAlign: 'left', marginRight: '140px' }}>See more</button>
               </div>
               <div className="swiper-wrapper" data-aos="fade-up" data-aos-duration="3000" data-aos-offset="200" data-aos-delay="30" data-aos-mirror="true">
                  <div className="swiper-slide">
                     <img src={picGame1} alt="Game 10" />
                  </div>
                  <div className="swiper-slide">
                     <img src={picGame2} alt="Game 17" />
                  </div>
                  <div className="swiper-slide">
                     <img src={picGame3} alt="Game 18" />
                  </div>
                  <div className="swiper-slide">
                     <img src={picGame4} alt="Game 11" />
                  </div>
                  <div className="swiper-slide">
                     <img src={picGame5} alt="Game 12" />
                  </div>
                  <div className="swiper-slide">
                     <img src={picGame6} alt="Game 13" />
                  </div>
                  <div className="swiper-slide">
                     <img src={picGame7} alt="Game 14" />
                  </div>
                  <div className="swiper-slide">
                     <img src={picGame8} alt="Game 15" />
                  </div>
                  <div className="swiper-slide">
                     <img src={picGame9} alt="Game 16" />
                  </div>
               </div>
               <div className="swiper-pagination"></div>
            </div>
            <div className="background-section" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="50" data-aos-offset="200">
               <h1>Explore our University Web Game!</h1>
               <p>Join us in an exciting journey where learning meets fun! <br />Our University Web Game is designed to engage students in a variety of interactive challenges that not only educate but also entertain.</p>
               <div className="service-icons row">
                  <div className="service col-sm-6 col-md-4">
                     <i className="fa-solid fa-chess-rook"></i>
                     <p>Top Games</p>
                  </div>
                  <div className="service col-sm-6 col-md-4">
                     <i className="fa-solid fa-hand"></i>
                     <p>UEH Review</p>
                  </div>
                  <div className="service col-sm-6 col-md-4">
                     <i className="fa-brands fa-pagelines"></i>
                     <p>UEH Green</p>
                  </div>
                  <div className="service col-sm-6 col-md-4">
                     <i className="fa-solid fa-chalkboard-user"></i>
                     <p>EduGames</p>
                  </div>
                  <div className="service col-sm-6 col-md-4">
                     <i className="fa-solid fa-person-arrow-up-from-line"></i>
                     <p>Top Gamer</p>
                  </div>
               </div>
            </div>
            <div className="author-introduce">
               <div className="row">
                  <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration="200" data-aos-easing="linear" data-aos-delay="100" data-aos-anchor-placement="top-center">
                     <div className="img-box" style={{ '--img': `url(${avatar3})` }}>
                        <div className="author-name">Nhu Ngoc</div>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration="200" data-aos-easing="linear" data-aos-delay="100" data-aos-anchor-placement="top-center">
                     <div className="img-box" style={{ '--img': `url(${avatar3})` }}>
                        <div className="author-name">Thien Huong</div>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration="200" data-aos-easing="linear" data-aos-delay="50" data-aos-anchor-placement="top-center">
                     <div className="img-box" style={{ '--img': `url(${avatar3})` }}>
                        <div className="author-name">My Truc</div>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration="200" data-aos-easing="linear" data-aos-delay="100" data-aos-anchor-placement="top-center">
                     <div className="img-box" style={{ '--img': `url(${avatar3})` }}>
                        <div className="author-name">Gia Han</div>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration="200" data-aos-easing="linear" data-aos-delay="100" data-aos-anchor-placement="top-center">
                     <div className="img-box" style={{ '--img': `url(${avatar3})` }}>
                        <div className="author-name">Yen Nhi</div>
                     </div>
                  </div>
               </div>
            </div>
            <footer className="container-xl mt-5">
               <div className="footer">
                  <div className="footer-top row" data-aos="fade-right">
                     <div className="footer-logo col-md-6 col-lg-3">
                        <img src={logoMini3} alt="Logo" />
                        <p className="footer-text">Empowering education, promoting sustainability, and exploring the future—one game at a time!</p>
                     </div>
                     <div className="footer-item col-md-6 col-lg-3" data-aos="fade-right">
                        <span className="magic-hover magic-hover__square">About us</span>
                        <ul className="footer-item-list">
                           <li>Introduce</li>
                           <li>Terms</li>
                           <li>Privacy</li>
                           <li>Contact us</li>
                        </ul>
                     </div>
                     <div className="footer-item col-md-6 col-lg-3" data-aos="fade-right">
                        <span className="magic-hover magic-hover__square">Contact us</span>
                        <ul className="footer-contact">
                           <li>Have questions or feedback? Reach out to us anytime!</li>
                           <li>+84 932 092 302</li>
                        </ul>
                     </div>
                     <div className="footer-item d-flex justify-content-between col-md-6 col-lg-3" data-aos="fade-right">
                        <ul className="footer-social gap-4">
                           <li><span><i className="fa-brands fa-facebook fa-2xl"></i></span></li>
                           <li><span><i className="fa-brands fa-instagram fa-2xl"></i></span></li>
                           <li><span><i className="fa-brands fa-twitter fa-2xl"></i></span></li>
                           <li><span><i className="fa-brands fa-linkedin fa-2xl"></i></span></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <hr />
               <div className="copyright" data-aos="fade-right">
                  <p className="copyright-text">Copyright ® 2024 WEB-PROJECT-5</p>
               </div>
            </footer>
         </div>
      );
   }
}

export default Introduce;
