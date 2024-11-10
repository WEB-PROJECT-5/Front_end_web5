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
        <div classname="setprofile">
            <header className="header">
                <div className="logo2">
                    <img src="./LOGO.png" alt="UEH Discovery Logo" className="logo-image2" />
                </div>
                <button className="sign-out2">Sign Out</button>
            </header>

            <main className="profile-container2">
                <div className="profile-card2">
                    <div className="info-section2">
                        <div className="section-header2">
                            <i className="fas fa-info-circle2"></i>
                            <h2>Information</h2>
                            <a href="#" id="edit-info" className="edit-link">Edit</a>
                        </div>
                        <div className="avatar-section2">
                            <img id="avatar-image" src={avatar} alt="Avatar" className="avatar2" />
                            <div className="edit-icon2" id="edit-avatar">✎</div>
                            <input
                                type="file"
                                id="avatar-input"
                                style={{ display: 'none' }}
                                onChange={handleAvatarChange}
                            />
                        </div>
                        <p classname="F"><strong>Name:</strong> <span id="name">{name}</span></p>
                        <p classname="F"><strong>Date of birth:</strong> <span id="dob">{dob}</span></p>
                        <p classname="F"><strong>Email:</strong> <span id="email">{email}</span></p>
                        <p classname="F"><strong>Phone:</strong> <span id="phone">{phone}</span></p>
                    </div>

                    <div className="account-section2">
                        <div className="section-header2">
                            <i className="fas fa-user-circle2"></i>
                            <h2>Account</h2>
                            <a href="#" id="edit-account" className="edit-link2">Edit</a>
                        </div>
                        <p classname="F"><strong>Username:</strong> <span id="username">{username}</span></p>
                        <p classname="F"><strong>Password:</strong> <span>**********</span></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SetProfile;
