import axiosClient from './axiosClient';

const profile = {
    // Lấy thông tin hồ sơ người dùng
    getProfile() {
        const url = "/users/profile";  // Endpoint lấy thông tin hồ sơ
        return axiosClient.get(url);  // Gửi GET request
    },

    // Cập nhật thông tin hồ sơ người dùng
    updateProfile(profileData) {
        const url = "/users/profile";  // Endpoint cập nhật hồ sơ
        return axiosClient.put(url, profileData);  // Gửi PUT request với dữ liệu hồ sơ mới
    },

    // Đổi mật khẩu người dùng
    changePassword(passwordData) {
        const url = "/users/profile/password";  // Endpoint đổi mật khẩu
        return axiosClient.put(url, passwordData);  // Gửi PUT request với dữ liệu mật khẩu
    }
};

export default profile;
