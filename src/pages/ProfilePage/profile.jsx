import React from 'react';
import './profile.css';

const Profile = () => {
    // Hàm này để hiển thị hoặc ẩn menu cài đặt khi nhấp vào biểu tượng bánh răng
    const toggleSettingsMenu = () => {
        const settingsMenu = document.getElementById('settingsMenu');
        settingsMenu.classList.toggle('show');
    };

    // Hàm này để thay đổi tab hoạt động và hiển thị nội dung tương ứng
    const setActiveTab = (tab) => {
        const tabs = document.querySelectorAll('.tabs div'); // Lấy tất cả các tab
        const contentBoxes = document.querySelectorAll('.box'); // Lấy tất cả các hộp nội dung
        tabs.forEach(tab => tab.classList.remove('active')); // Xóa lớp 'active' khỏi tất cả các tab
        contentBoxes.forEach(box => box.style.display = 'none'); // Ẩn tất cả nội dung

        document.getElementById(tab).classList.add('active'); // Thêm lớp 'active' vào tab đã chọn
        document.getElementById(`${tab}Content`).style.display = 'block'; // Hiển thị nội dung của tab đã chọn
    };

    return (
        <div>
<<<<<<< HEAD
            <div className="header1">
                <i className="fas fa-arrow-left1"></i>
                Profile
            </div>
            <div className="profile-section1">
                <div className="profile-card1">
                    <i className="fas fa-cog settings-icon1" onClick={toggleSettingsMenu}></i>
                    <div className="settings-menu1" id="settingsMenu">
                        <a href="#">Quản lí tài khoản</a>
                        <a href="#">Đăng xuất</a>
                    </div>
                    <img src="https://i.postimg.cc/Y9npzLwy/ygmfpeympiidkfqsbvb5.png" alt="Profile picture of a person with long black hair and a serious expression" width="100" height="100" />
=======
            <div className="header">
                <i className="fas fa-arrow-left"></i> {/* Biểu tượng mũi tên quay lại */}
                Profile {/* Tiêu đề của trang */}
            </div>
            <div className="profile-section">
                <div className="profile-card">
                    <i className="fas fa-cog settings-icon" onClick={toggleSettingsMenu}></i> {/* Biểu tượng cài đặt */}
                    <div className="settings-menu" id="settingsMenu">
                        <a href="#">Quản lí tài khoản</a> {/* Link Quản lý tài khoản */}
                        <a href="#">Đăng xuất</a> {/* Link Đăng xuất */}
                    </div>
                    <img src="./avata.jpg" alt="Profile picture of a person with long black hair and a serious expression" width="100" height="100" /> {/* Ảnh đại diện */}
>>>>>>> 50f68da386b4d124be961d11d3bd1e484ca33582

                    <h2>HUONG</h2> {/* Tên người dùng */}
                    <p>Add a short bio</p> {/* Mô tả ngắn */}
                </div>
            </div>
<<<<<<< HEAD
            <div className="tabs1">
                <div className="active1" id="aboutMe" onClick={() => setActiveTab('aboutMe')}>About Me</div>
                <div id="myRewards" onClick={() => setActiveTab('myRewards')}>My Rewards</div>
                <div id="history" onClick={() => setActiveTab('history')}>History</div>
            </div>
            <div className="content1">
                <div className="box1" id="aboutMeContent">
                    <h3>About Me <i className="fas fa-pencil-alt"></i></h3>
=======
            <div className="tabs">
                <div className="active" id="aboutMe" onClick={() => setActiveTab('aboutMe')}>About Me</div> {/* Tab About Me */}
                <div id="myRewards" onClick={() => setActiveTab('myRewards')}>My Rewards</div> {/* Tab My Rewards */}
                <div id="history" onClick={() => setActiveTab('history')}>History</div> {/* Tab History */}
            </div>
            <div className="content">
                <div className="box" id="aboutMeContent">
                    <h3>About Me <i className="fas fa-pencil-alt"></i></h3> {/* Nội dung tab About Me */}
>>>>>>> 50f68da386b4d124be961d11d3bd1e484ca33582
                </div>
                <div className="box1" id="myRewardsContent" style={{ display: 'none' }}>
                    <h3>My Rewards</h3>
                    <ul>
                        <li>Reward 1</li>
                        <li>Reward 2</li>
                        <li>Reward 3</li>
                    </ul> {/* Danh sách phần thưởng */}
                </div>
                <div className="box1" id="historyContent" style={{ display: 'none' }}>
                    <h3>History</h3>
                    <ul>
                        <li>History Item 1</li>
                        <li>History Item 2</li>
                        <li>History Item 3</li>
                    </ul> {/* Danh sách lịch sử */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
