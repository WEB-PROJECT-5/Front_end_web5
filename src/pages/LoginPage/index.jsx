import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';  // CSS riêng biệt cho trang Login

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn reload trang

        try {
            // Lấy danh sách người dùng từ API
            const response = await fetch('https://be-up-host.onrender.com/api/users');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();

            if (data.success) {
                const users = data.data;

                // Kiểm tra thông tin đăng nhập
                const user = users.find(user => user.user_name === username && user.password === password);

                if (user) {
                    console.log('Đăng nhập thành công:', user);
                    // Xử lý đăng nhập thành công (ví dụ: lưu thông tin người dùng)
                    // localStorage.setItem('user', JSON.stringify(user)); // Lưu thông tin người dùng
                    navigate('/'); // Chuyển hướng đến trang chính (home)
                } else {
                    setError('Thông tin đăng nhập không hợp lệ.');
                }
            } else {
                setError(data.message || 'Không thể lấy thông tin người dùng.');
            }
        } catch (error) {
            console.error('Lỗi:', error);
            setError('Có lỗi xảy ra, vui lòng thử lại sau.');
        }
    };

    return (
        <div className='login'>
            <div className="register-container">
                <div className="form-container">
                    <h2>Đăng nhập</h2>
                    <div className="logo-container">
                        {/* Logo ở đây */}
                    </div>

                    <form className="form-grid" onSubmit={handleSubmit}>
                        <div className="container-input">
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Nhập tên đăng nhập của bạn"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="container-input">
                            <label htmlFor="password">Mật khẩu</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Nhập mật khẩu của bạn"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button type="submit" className="btn">Đăng nhập</button>

                        <div className="social-login">
                            <div className="or-divider">hoặc</div>
                            <div className="google-login">
                                <span>Google</span>
                            </div>
                        </div>
                    </form>

                    <p className="footer-text">
                        <a href="#" className="highlight-link">Quên mật khẩu?</a>
                    </p>
                    <p className="footer">
                        Bạn chưa có tài khoản?
                        <a href="./signup.html" className="highlight-link"> Đăng ký</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
