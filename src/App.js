// import { Link, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import Introduce from "./pages/Introduce";
// import Header from "./components/Header";


// function App() {
//   return (
//     <div className="App">
//       <Header /> 
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/introduce" element={<Introduce />} />
//       </Routes> 
//       <Footer />
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useEffect } from 'react'; // Import useEffect here
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Introduce from "./pages/Introduce";
import Header from "./components/Header";
import Login from "./pages/LoginPage/index";  // Đảm bảo bạn đã tạo trang này
import Profile from "./pages/ProfilePage/profile";
import SetProfile from "./pages/SetProfilePage/setprofile";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Only animate once
      });
    }, []);
   const location = useLocation();

   // Định nghĩa mảng chứa các đường dẫn không cần Header/Footer
   const routesWithoutHeaderFooter = ['/introduce', '/login'];  // Thêm '/login' vào đây

   // Kiểm tra xem trang hiện tại có nằm trong danh sách loại trừ không
   const shouldShowHeaderFooter = !routesWithoutHeaderFooter.includes(location.pathname);

   return (
      <div className="App">
         {shouldShowHeaderFooter && <Header />}
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/setprofile" element={<SetProfile />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/login" element={<Login />} /> {/* Định nghĩa route cho login */}
         </Routes>
         {shouldShowHeaderFooter && <Footer />}
      </div>
   );
}

export default App;
