import axiosClient from './axiosClient';

const signup = {
    signup(userData) {
        const url = "/users/signup";  // Endpoint cho đăng ký người dùng
        return axiosClient.post(url); // Gửi POST request với dữ liệu đăng ký
    }
}

export default signup;
