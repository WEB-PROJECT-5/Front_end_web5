import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

function Signup() {
  // Khởi tạo state cho các trường của form
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    day: '',
    month: '',
    year: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');

  // Hàm xử lý thay đổi dữ liệu trong các trường
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Đã có lỗi xảy ra.');
    }
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <h2>Đăng ký</h2>
        <div className="logo-container">
          <img src="logo.png" alt="UEH Discovery Logo" />
        </div>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="lastName">Họ <span style={{ color: 'red' }}>(*)</span></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Nhập họ của bạn"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Tên <span style={{ color: 'red' }}>(*)</span></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Nhập tên của bạn"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số điện thoại <span style={{ color: 'red' }}>(*)</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Nhập số điện thoại"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Ngày sinh <span style={{ color: 'red' }}>(*)</span></label>
            <div className="birthdate-select">
              <select id="day" name="day" value={formData.day} onChange={handleChange}>
                <option value="">Ngày</option>
                {[...Array(31).keys()].map((d) => (
                  <option key={d + 1} value={d + 1}>{d + 1}</option>
                ))}
              </select>
              <select id="month" name="month" value={formData.month} onChange={handleChange}>
                <option value="">Tháng</option>
                {[...Array(12).keys()].map((m) => (
                  <option key={m + 1} value={m + 1}>{m + 1}</option>
                ))}
              </select>
              <select id="year" name="year" value={formData.year} onChange={handleChange}>
                <option value="">Năm</option>
                {Array.from({ length: 124 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span style={{ color: 'red' }}>(*)</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập địa chỉ email của bạn"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập <span style={{ color: 'red' }}>(*)</span></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nhập tên đăng nhập"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu <span style={{ color: 'red' }}>(*)</span></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Nhập lại mật khẩu <span style={{ color: 'red' }}>(*)</span></label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">Tạo tài khoản</button>
          {message && <p className="message">{message}</p>}
        </form>
        <div className="social-login">
          <div className="or-divider">hoặc</div>
          <div className="google-login">
            <img src="/Google__G__logo.svg.webp" alt="Google" />
            <span>Google</span>
          </div>
        </div>
        <p className="footer-text">
          Bằng việc đăng ký, bạn đã đồng ý với EDUQUEST về 
          <a href="#" className="highlight-link">Điều khoản dịch vụ</a> và 
          <a href="#" className="highlight-link">Chính sách bảo mật</a>
        </p>
        <p className="footer-text">
          Bạn đã có tài khoản? <a href="./Login.html">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
