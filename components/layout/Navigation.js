import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function Navigation() {
  const { data: session, status } = useSession();
  
  const handleLogoutClick = () => {
    signOut();
  };

  return (
    <header className="header z-index-50">
      <nav className="nav navbar py-3 px-0 shadow-sm text-white position-relative">
        <div className="container-fluid w-100">
          <div className="navbar-holder d-flex align-items-center justify-content-between w-100">
            <div className="navbar-header">
              <a
                className="navbar-brand d-none d-sm-inline-block"
                href="index.html"
              >
                <div className="brand-text d-none d-lg-inline-block">
                  <span>Next </span>
                  <strong>Dashboard</strong>
                </div>
                <div className="brand-text d-none d-sm-inline-block d-lg-none">
                  <strong>BD</strong>
                </div>
              </a>
              <a className="menu-btn active" id="toggle-btn" href="#">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
              {!session && (
                <li className="nav-item">
                  <Link className="nav-link text-white" href="/">
                    <span className="d-none d-sm-inline">Login</span>
                  </Link>
                </li>
              )}

              {session && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white" href="/dashboard">
                      <span className="d-none d-sm-inline">Dashboard</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" href="/logout">
                      <button
                        onClick={handleLogoutClick}
                        className="d-none d-sm-inline"
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
