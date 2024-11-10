import React from 'react';
import './profile.css';

const Profile = () => {
    const toggleSettingsMenu = () => {
        const settingsMenu = document.getElementById('settingsMenu');
        settingsMenu.classList.toggle('show');
    };

    const setActiveTab = (tab) => {
        const tabs = document.querySelectorAll('.tabs div');
        const contentBoxes = document.querySelectorAll('.box');
        tabs.forEach(tab => tab.classList.remove('active'));
        contentBoxes.forEach(box => box.style.display = 'none');

        document.getElementById(tab).classList.add('active');
        document.getElementById(`${tab}Content`).style.display = 'block';
    };

    return (
        <div>
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

                    <h2>HUONG</h2>
                    <p>Add a short bio</p>
                </div>
            </div>
            <div className="tabs1">
                <div className="active1" id="aboutMe" onClick={() => setActiveTab('aboutMe')}>About Me</div>
                <div id="myRewards" onClick={() => setActiveTab('myRewards')}>My Rewards</div>
                <div id="history" onClick={() => setActiveTab('history')}>History</div>
            </div>
            <div className="content1">
                <div className="box1" id="aboutMeContent">
                    <h3>About Me <i className="fas fa-pencil-alt"></i></h3>
                </div>
                <div className="box1" id="myRewardsContent" style={{ display: 'none' }}>
                    <h3>My Rewards</h3>
                    <ul>
                        <li>Reward 1</li>
                        <li>Reward 2</li>
                        <li>Reward 3</li>
                    </ul>
                </div>
                <div className="box1" id="historyContent" style={{ display: 'none' }}>
                    <h3>History</h3>
                    <ul>
                        <li>History Item 1</li>
                        <li>History Item 2</li>
                        <li>History Item 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
