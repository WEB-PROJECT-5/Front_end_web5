import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import HomePageApi from '../../api/HomePage';
import ScoreApi from '../../api/Score';
export default function HomePage() {
   const [listGame, setListGame] = useState([]);
   const [listScore, setListScore] = useState([]);
   const [listSwiperGame, setListSwiperGame] = useState([]);
   const [listUehReview, setListUehReview] = useState([]);
   const [listUehGreen, setListUehGreen] = useState([]);
   const [listUehEduGames, setListUehEduGames] = useState([]);
   const [visibleTopGame, setvisibleTopGame] = useState(6);
   const [visibleUehReivew, setvisibleUehReivew] = useState(6);
   const [visibletopGamer, setvisibletopGamer] = useState(6);
   const [visibleUehGreen, setvisibleUehGreen] = useState(6);
   const [visibleEduGames, setvisibleEduGames] = useState(6);

   const handleSeeMore = (e) => {
      e.preventDefault();
      setvisibleTopGame(prevCount => prevCount + 3);
   };

   const handleSeeLess = (e) => {
      e.preventDefault();
      setvisibleTopGame(prevCount => Math.max(prevCount - 3, 4));
   };


   const handleSeeMoreRecently = (e) => {
      e.preventDefault();
      setvisibleUehReivew(prevCount => prevCount + 3);
   };

   const handleSeeLessRecently = (e) => {
      e.preventDefault();
      setvisibleUehReivew(prevCount => Math.max(prevCount - 3, 4));
   };

   const handleSeeMoreGamer = (e) => {
      e.preventDefault();
      setvisibletopGamer(prevCount => prevCount + 3);
   };

   const handleSeeLessGamer = (e) => {
      e.preventDefault();
      setvisibletopGamer(prevCount => Math.max(prevCount - 3, 4));
   };

   const handleSeeMoreUehGreen = (e) => {
      e.preventDefault();
      setvisibleUehGreen(prevCount => prevCount + 3);
   };

   const handleSeeLessUehGreen = (e) => {
      e.preventDefault();
      setvisibleUehGreen(prevCount => Math.max(prevCount - 3, 4));
   };

   const handleSeeMoreEduGames = (e) => {
      e.preventDefault();
      setvisibleEduGames(prevCount => prevCount + 3);
   };

   const handleSeeLessEduGames = (e) => {
      e.preventDefault();
      setvisibleEduGames(prevCount => Math.max(prevCount - 3, 4));
   };
   const [isJumped, setIsJumped] = useState(false);
   const topGamePlayerRef = useRef(null);
   const uehReivewPlayerRef = useRef(null);
   const uehGreenPlayerRef = useRef(null);
   const eduGamesPlayerRef = useRef(null);
   const handleJumpTopGame = (e) => {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
      setIsJumped(true); // Đặt state là true để áp dụng CSS

      // Cuộn đến vị trí
      if (topGamePlayerRef.current) {
         const offset = 120; // Chiều cao của header
         const top = topGamePlayerRef.current.getBoundingClientRect().top + window.scrollY - offset;
         window.scrollTo({ top, behavior: 'smooth' });
      }
   };

   const handleJumpUehReivew = (e) => {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
      setIsJumped(true); // Đặt state là true để áp dụng CSS

      // Cuộn đến vị trí
      if (uehReivewPlayerRef.current) {
         const offset = 120; // Chiều cao của header
         const top = uehReivewPlayerRef.current.getBoundingClientRect().top + window.scrollY - offset;
         window.scrollTo({ top, behavior: 'smooth' });
      }
   };

   const handleJumpUehGreen = (e) => {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
      setIsJumped(true); // Đặt state là true để áp dụng CSS

      // Cuộn đến vị trí
      if (uehGreenPlayerRef.current) {
         const offset = 120; // Chiều cao của header
         const top = uehGreenPlayerRef.current.getBoundingClientRect().top + window.scrollY - offset;
         window.scrollTo({ top, behavior: 'smooth' });
      }
   };

   const handleJumpEduGames = (e) => {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
      setIsJumped(true); // Đặt state là true để áp dụng CSS

      // Cuộn đến vị trí
      if (eduGamesPlayerRef.current) {
         const offset = 120; // Chiều cao của header
         const top = eduGamesPlayerRef.current.getBoundingClientRect().top + window.scrollY - offset;
         window.scrollTo({ top, behavior: 'smooth' });
      }
   };
   useEffect(() => {
      (
         async () => {
            try {

               const res = await HomePageApi.getTopGame();
               setListGame(res.data.data);
               console.log("data", res.data.data);
            } catch (error) {
               console.log(error);
            }
         }
      )()
   }, []);
   useEffect(() => {
      (
         async () => {
            try {
               const res = await ScoreApi.getAll();
               setListScore(res.data.data);

            } catch (error) {
               console.log(error);
            }
         }
      )()
   }, []);

   useEffect(() => {
      (
         async () => {
            try {
               const res = await HomePageApi.getUehReview();
               setListUehReview(res.data.data);

            } catch (error) {
               console.log(error);
            }
         }
      )()
   }, []);
   useEffect(() => {
      (
         async () => {
            try {
               const res = await HomePageApi.getUehGreen();
               setListUehGreen(res.data.data);


            } catch (error) {
               console.log(error);
            }
         }
      )()
   }, []);
   useEffect(() => {
      (
         async () => {
            try {
               const res = await HomePageApi.getUehEduGames();
               setListUehEduGames(res.data.data);


            } catch (error) {
               console.log(error);
            }
         }
      )()
   }, []);

   const mapClickGame = ["game1", "game2"]

   return (
      <div className='home'>
         <section>
            <div className="banner ">

               <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                     delay: 1500,
                     disableOnInteraction: false,
                  }}
                  spaceBetween={50}
                  slidesPerView={5}
                  className='banner-first'
               >
                  <SwiperSlide style={{ height: "220px" }}>
                     <div className="swiper-slide">
                        <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/173789/Originals/Tro-choi-mien-phi-khong-tai-ve-may-0.jpg" />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "220px" }}>
                     <div className="swiper-slide"><img src="https://baobariavungtau.com.vn/dataimages/202301/original/images1778766_11M_1.jpeg" /></div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "220px" }}>
                     <div className="swiper-slide"><img src="https://st.gamevui.vn/images/image/2024/01/12/ban-hop-voi-nhan-vat-nao-trong-mario-10.jpg" /></div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "220px" }}>
                     <div className="swiper-slide"><img src="https://st.gamevui.vn/images/image/2022/02/21/bieu-ngu-minecraft-1.jpg" /></div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "220px" }}>
                     <div className="swiper-slide"><img src="https://baobariavungtau.com.vn/dataimages/202301/original/images1778766_11M_1.jpeg" /></div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "220px" }}>
                     <div className="swiper-slide"><img src="https://st.gamevui.vn/images/image/2024/01/12/ban-hop-voi-nhan-vat-nao-trong-mario-10.jpg" /></div>
                  </SwiperSlide>
               </Swiper>
               <div className="play__now">
                  <p className="play__now-link">PLAY NOW</p>
               </div>
               <div className="collection" style={{ marginTop: "-24px" }}>
                  <div className="collection__slideshow">

                     <Swiper style={{ marginLeft: '130px' }}
                        // ID cho Swiper


                        spaceBetween={30} // Khoảng cách giữa các slide
                        slidesPerView={7} // Số lượng slide hiển thị

                     >
                        {/* Các slide */}
                        {listGame.map((item, index) => (
                           <SwiperSlide key={index}> <div className="item " style={{ height: "185px" }}>
                              <div className="item__img">
                                 <img src={item.image} alt="" /></div>
                              <div className="item__detail " style={{ margin: 0 }}>
                                 <div className="item__text " style={{ marginLeft: '4px' }}>
                                    <p className="fw-bold " style={{ marginBottom: 0 }}>{item.game_name}</p>
                                    <p className="fw-lighter" style={{ marginBottom: 0 }}>{item.genre}</p>
                                 </div>
                                 <div className="item__icon ">
                                    <span><i className="fa-solid fa-play fa-xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                    <span><i className="fa-regular fa-heart fa-xl" style={{ color: '#ffffff' }} /></span>
                                 </div>
                              </div>
                           </div></SwiperSlide>

                        ))}

                     </Swiper>
                  </div>
               </div>
            </div>
         </section>
         <section className="container-xl">
            <div className="section box-sidebar">
               <div className=" row gx-5">
                  <div className="main col-7">
                     {/* top  games */}
                     <div className={`bestgame ${isJumped ? 'jumped' : ''}`} ref={topGamePlayerRef}>
                        <p className="bestgame__title">Top games</p>
                        <div className="box-game">
                           <div className="row ">
                              {listGame.slice(0, visibleTopGame).map((item, index) => (
                                 <div className="col-4 my-3" key={index}>
                                    <div className="item">
                                       <a target='_blank' href='game1' className="item__img" style={{ display: 'block', cursor: 'pointer' }}>
                                          <img src={item.image} alt="" />
                                       </a>
                                       <div className="item__detail ">
                                          <div className="item__text ">
                                             <p className="fw-bold " style={{ marginBottom: 0 }}>{item.game_name}</p>
                                             <p className="fw-lighter" style={{ marginBottom: 0 }}>{item.genre}</p>
                                          </div>
                                          <div className="item__icon ">
                                             <span><i className="fa-solid fa-play fa-xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                             <span><i className="fa-regular fa-heart fa-xl" style={{ color: '#ffffff' }} /></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}

                           </div>
                           {visibleTopGame < listGame.length && (
                              <a href="" className="box-link" onClick={handleSeeMore}>See more</a>
                           )}
                           {visibleTopGame > 6 && (
                              <a href="" className="box-link" onClick={handleSeeLess}>See less</a>
                           )}
                        </div>
                     </div>
                     {/* Recently player */}
                     <div className={`bestgame ${isJumped ? 'jumped' : ''}`} ref={uehReivewPlayerRef} style={{ marginTop: "60px" }}>
                        <p className="bestgame__title mt-4">UEH Review</p>
                        <div className="box-game">
                           <div className="row">

                              {listUehReview.slice(0, visibleUehReivew).map((item, index) => (
                                 <div className="col-4 my-3" key={index}  >
                                    <div className="item ">
                                       <div className="item__img">
                                          <img src={item.image} alt="" /></div>
                                       <div className="item__detail ">
                                          <div className="item__text">
                                             <p className="fw-bold " style={{ marginBottom: 0 }}>{item.game_name}</p>
                                             <p className="fw-lighter" style={{ marginBottom: 0 }}>{item.tag}</p>
                                          </div>
                                          <div className="item__icon ">
                                             <span><i className="fa-solid fa-play fa-xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                             <span><i className="fa-regular fa-heart fa-xl" style={{ color: '#ffffff' }} /></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}


                              {visibleUehReivew < listUehReview.length && (
                                 <a href="" className="box-link" onClick={handleSeeMoreRecently}>See more</a>
                              )}
                              {visibleUehReivew > 6 && (
                                 <a href="" className="box-link" onClick={handleSeeLessRecently}>See less</a>
                              )}
                           </div>
                        </div>
                     </div>
                     <div className="jump row">
                        <p className="jump-title col-3 ">Jump to: </p>
                        <ul className="jump-list col-9 ">
                           <li className="jump-item"><a href="" className="jump-link" onClick={handleJumpTopGame}>Top games</a></li>
                           <li className="jump-item"><a href="" className="jump-link" onClick={handleJumpUehReivew}>UEH Review</a></li>
                           <li className="jump-item"><a href="" className="jump-link" onClick={handleJumpUehGreen}>UEH Green</a></li>
                           <li className="jump-item"><a href="" className="jump-link" onClick={handleJumpEduGames}>EduGames</a></li>
                        </ul>
                     </div>
                     {/* ueh green */}
                     <div className={`bestgame ${isJumped ? 'jumped' : ''}`} ref={uehGreenPlayerRef} style={{ marginTop: "60px" }}>
                        <p className="bestgame__title mt-4">UEH Green</p>
                        <div className="box-game">
                           <div className="row">

                              {listUehGreen.slice(0, visibleUehGreen).map((item, index) => (
                                 <div className="col-4 my-3" key={index}  >
                                    <div className="item ">
                                       <div className="item__img">
                                          <img src={item.image} alt="" /></div>
                                       <div className="item__detail ">
                                          <div className="item__text">
                                             <p className="fw-bold " style={{ marginBottom: 0 }}>{item.game_name}</p>
                                             <p className="fw-lighter" style={{ marginBottom: 0 }}>{item.tag}</p>
                                          </div>
                                          <div className="item__icon ">
                                             <span><i className="fa-solid fa-play fa-xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                             <span><i className="fa-regular fa-heart fa-xl" style={{ color: '#ffffff' }} /></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}


                              {visibleUehGreen < listUehGreen.length && (
                                 <a href="" className="box-link" onClick={handleSeeMoreUehGreen}>See more</a>
                              )}
                              {visibleUehGreen > 6 && (
                                 <a href="" className="box-link" onClick={handleSeeLessUehGreen}>See less</a>
                              )}
                           </div>
                        </div>
                     </div>
                     {/* edu games */}
                     <div className={`bestgame ${isJumped ? 'jumped' : ''}`} ref={eduGamesPlayerRef} style={{ marginTop: "60px" }}>
                        <p className="bestgame__title mt-4">EduGames</p>
                        <div className="box-game">
                           <div className="row">

                              {listUehEduGames.slice(0, visibleEduGames).map((item, index) => (
                                 <div className="col-4 my-3" key={index}  >
                                    <div className="item ">
                                       <div className="item__img">
                                          <img src={item.image} alt="" /></div>
                                       <div className="item__detail ">
                                          <div className="item__text">
                                             <p className="fw-bold " style={{ marginBottom: 0 }}>{item.game_name}</p>
                                             <p className="fw-lighter" style={{ marginBottom: 0 }}>{item.tag}</p>
                                          </div>
                                          <div className="item__icon ">
                                             <span><i className="fa-solid fa-play fa-xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                             <span><i className="fa-regular fa-heart fa-xl" style={{ color: '#ffffff' }} /></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}


                              {visibleEduGames < listUehEduGames.length && (
                                 <a href="" className="box-link" onClick={handleSeeMoreEduGames}>See more</a>
                              )}
                              {visibleEduGames > 6 && (
                                 <a href="" className="box-link" onClick={handleSeeLessEduGames}>See less</a>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="sidebar  col-5">
                     <div className="highscore">
                        <p className="highscore__title">Top Gamer
                        </p>
                        <div className="gamer">
                           <ul className="gamer-list">
                              {listScore.slice(0, visibletopGamer).map((item, index) => {
                                 return (
                                    <li className="gamer-item" key={index}>
                                       <div className="gamer-infor">
                                          <p className="thumbnail-wrranty m-0 "><img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Warranty_amqva9.png" alt="" />
                                          </p><p className="gamer-username m-0">{item.user_info.user_name}</p>
                                          <span className="gamer-score">Điểm: <b>{item.score}</b></span>
                                          <a href className="gamer-game">UEH Maze </a>
                                       </div>
                                       <div className="gamer-thumbnail"> <a href className><img src={item.game_info.image} alt="" /></a></div>
                                    </li>
                                 )

                              })}

                           </ul>

                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   )
}
