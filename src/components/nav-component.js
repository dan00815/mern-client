import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import "../style/style.css";

const Nav = ({ currentUser, setCurrentUser }) => {
  const logout = () => {
    AuthService.logout();
    alert("登出成功，將導回首頁");
    setCurrentUser(null);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/" className="nav-a">
              首頁
            </Link>
          </li>
          {!currentUser && (
            <li className="nav-li">
              <Link to="/register" className="nav-a">
                註冊會員
              </Link>
            </li>
          )}
          {!currentUser && (
            <li className="nav-li">
              <Link to="/login" className="nav-a">
                登入頁面
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-li">
              <Link onClick={logout} className="nav-a" to="/">
                登出
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-li">
              <Link to="/profile" className="nav-a">
                個人頁面
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-li">
              <Link to="/course" className="nav-a">
                課程頁面
              </Link>
            </li>
          )}

          {currentUser && currentUser.user.role == "teacher" && (
            <li className="nav-li">
              <Link to="/post-course" className="nav-a">
                新增課程
              </Link>
            </li>
          )}

          {currentUser && currentUser.user.role == "student" && (
            <li className="nav-li">
              <Link to="/enroll" className="nav-a">
                註冊課程
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active aa" to="/">
                  首頁
                </Link>
              </li>
              {!currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    註冊會員
                  </Link>
                </li>
              )}
              {!currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    登入頁面
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link onClick={logout} className="nav-link" to="/">
                    登出
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    個人頁面
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/course">
                    課程頁面
                  </Link>
                </li>
              )}

              {currentUser && currentUser.user.role == "teacher" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/post-course">
                    新增課程
                  </Link>
                </li>
              )}

              {currentUser && currentUser.user.role == "student" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/enroll">
                    註冊課程
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Nav;
