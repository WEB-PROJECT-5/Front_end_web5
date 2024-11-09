import React, { useState } from 'react';
import './setprofile.css';

const SetProfile = () => {
    const [avatar, setAvatar] = useState('avata.jpg');
    const [name, setName] = useState('Thien Huong');
    const [dob, setDob] = useState('**/**/2004');
    const [email, setEmail] = useState('p****@gmail.com');
    const [phone, setPhone] = useState('*******400');
    const [username, setUsername] = useState('T********');

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAvatar(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src="./LOGO.png" alt="UEH Discovery Logo" className="logo-image" />
                </div>
                <button className="sign-out">Sign Out</button>
            </header>

            <main className="profile-container">
                <div className="profile-card">
                    <div className="info-section">
                        <div className="section-header">
                            <i className="fas fa-info-circle"></i>
                            <h2>Information</h2>
                            <a href="#" id="edit-info" className="edit-link">Edit</a>
                        </div>
                        <div className="avatar-section">
                            <img id="avatar-image" src={avatar} alt="Avatar" className="avatar" />
                            <div className="edit-icon" id="edit-avatar">✎</div>
                            <input
                                type="file"
                                id="avatar-input"
                                style={{ display: 'none' }}
                                onChange={handleAvatarChange}
                            />
                        </div>
                        <p><strong>Name:</strong> <span id="name">{name}</span></p>
                        <p><strong>Date of birth:</strong> <span id="dob">{dob}</span></p>
                        <p><strong>Email:</strong> <span id="email">{email}</span></p>
                        <p><strong>Phone:</strong> <span id="phone">{phone}</span></p>
                    </div>

                    <div className="account-section">
                        <div className="section-header">
                            <i className="fas fa-user-circle"></i>
                            <h2>Account</h2>
                            <a href="#" id="edit-account" className="edit-link">Edit</a>
                        </div>
                        <p><strong>Username:</strong> <span id="username">{username}</span></p>
                        <p><strong>Password:</strong> <span>**********</span></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SetProfile;
