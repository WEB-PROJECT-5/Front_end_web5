import axiosClient from './axiosClient';

const login = {
    login(credentials) {
        const url = "/users/login";  // Endpoint cho đăng nhập
        return axiosClient.post(url, credentials); // Gửi POST request với dữ liệu đăng nhập
    }
}

export default login;
