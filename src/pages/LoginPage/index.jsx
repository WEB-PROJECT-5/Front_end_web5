// src/pages/Login/index.js
import React from 'react';
import './Login.css';  // CSS riêng biệt cho trang Login

const Login = () => {
   return (
      <div className='login'>
         <div className="register-container">
            <div className="form-container">
               <h2>Đăng nhập</h2>
               <div className="logo-container">
                  {/* Logo ở đây */}
               </div>

               <div className="form-grid">
                  <div className="container-input">
                     <label htmlFor="username">Tên đăng nhập</label>
                     <input type="text" id="username" name="username" placeholder="Nhập tên đăng nhập của bạn" />
                  </div>

                  <div className="container-input">
                     <label htmlFor="password">Mật khẩu</label>
                     <input type="password" id="password" name="password" placeholder="Nhập mật khẩu của bạn" />
                  </div>

                  <button type="submit" className="btn">Đăng nhập</button>

                  <div className="social-login">
                     <div className="or-divider">hoặc</div>
                     <div className="google-login">
                        <span>Google</span>
                     </div>
                  </div>
               </div>

               <p className="footer-text">
                  <a href="#" className="highlight-link">Quên mật khẩu ?</a>
               </p>
               <p className="footer">
                  Bạn chưa có tài khoản ?
                  <a href="./signup.html" className="highlight-link"> Đăng ký</a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
