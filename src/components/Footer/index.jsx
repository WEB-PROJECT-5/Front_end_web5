import React from 'react'  // Nhập thư viện React để tạo component
import './style.css'  // Nhập file CSS để áp dụng các kiểu dáng cho Footer

export default function Footer() {  // Định nghĩa và xuất component Footer
  return (
    <div>  {/* Phần chứa toàn bộ Footer */}
        <footer className="container-xl">  {/* Phần Footer chính, sử dụng lớp container-xl để điều chỉnh kích thước */}
          <div className="footer ">  {/* Chứa các phần con của Footer */}
            <div className="footer-top row" data-aos="fade-right">  {/* Lớp "footer-top" bao gồm các phần logo, thông tin, liên hệ */}
              <div className="footer-logo col-md-6 col-lg-3">  {/* Phần logo trong Footer, chiếm 6 cột trên màn hình vừa và 3 cột trên màn hình lớn */}
                <img src="https://i.postimg.cc/Y2D91Zrq/LOGO-MINI-gnydkq.png" alt="Logo" />  {/* Hiển thị logo */}
                <p className="footer-text">Empowering education, promoting sustainability, and exploring the future—one game at a time!</p>  {/* Mô tả Footer */}
              </div>
              <div className="footer-item col-md-6 col-lg-3" data-aos="fade-right">  {/* Mục "About us", chiếm 6 cột trên màn hình vừa và 3 cột trên màn hình lớn */}
                <span class="magic-hover magic-hover__square">About us</span>  {/* Tiêu đề "About us" có hiệu ứng hover */}
                <ul className="footer-item-list">  {/* Danh sách các mục trong phần "About us" */}
                  <li>Introduce</li>  {/* Liệt kê các mục như "Introduce" */}
                  <li>Terms</li>  {/* Các mục "Terms", "Privacy", "Contact us" */}
                  <li>Privacy</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div className="footer-item col-md-6 col-lg-3" data-aos="fade-right">  {/* Mục "Contact us", chiếm 6 cột trên màn hình vừa và 3 cột trên màn hình lớn */}
                <span class="magic-hover magic-hover__square">Contact us</span>  {/* Tiêu đề "Contact us" có hiệu ứng hover */}
                <ul className="footer-contact ">  {/* Danh sách thông tin liên hệ */}
                  <li>Have questions or feedback? Reach out to us anytime!</li>  {/* Nội dung văn bản hỏi về câu hỏi hoặc phản hồi */}
                  <li>+84 932 092 302</li>  {/* Số điện thoại liên hệ */}
                </ul>
              </div>
              <div className="footer-item d-flex justify-content-between col-md-6 col-lg-3" data-aos="fade-right">  {/* Mục mạng xã hội, chiếm 6 cột trên màn hình vừa và 3 cột trên màn hình lớn */}
                <ul className="footer-social gap-4">  {/* Danh sách biểu tượng mạng xã hội, có khoảng cách giữa các biểu tượng */}
                  <li><span><i className="fa-brands fa-facebook fa-2xl" /></span></li>  {/* Biểu tượng Facebook */}
                  <li><span><i className="fa-brands fa-instagram fa-2xl" /></span></li>  {/* Biểu tượng Instagram */}
                  <li><span><i className="fa-brands fa-twitter fa-2xl" /></span></li>  {/* Biểu tượng Twitter */}
                  <li><span><i className="fa-brands fa-linkedin fa-2xl" /></span></li>  {/* Biểu tượng LinkedIn */}
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <hr />  {/* Đường kẻ phân cách giữa Footer và phần bản quyền */}
        <div className="copyright" data-aos="fade-right">  {/* Phần bản quyền */}
          <p className="copyright-text">Copyright ® 2024 web5 team</p>  {/* Văn bản bản quyền */}
        </div>
      </div>
  )
}
