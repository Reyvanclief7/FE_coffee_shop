import React from "react";

function Header() {
  return (
    <header id="header" className="site-header header-scrolled bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Homepage">
            <img src="/images/main-logo.png" className="logo" alt="Main Logo" />
          </a>
          <button
            className="navbar-toggler d-flex d-lg-none order-3 p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg className="navbar-icon">
              <use xlinkHref="#navbar-icon" />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="bdNavbar"
            aria-labelledby="bdNavbarOffcanvasLabel"
          >
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand" href="index.html">
                <img src="/images/main-logo.png" className="logo" alt="logo" />
              </a>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                data-bs-target="#bdNavbar"
              />
            </div>
            <div className="offcanvas-body">
              <ul
                id="navbar"
                className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3"
              >
                <li className="nav-item">
                  <a className="nav-link me-4 active" href="/Homepage">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#company-services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="/Product">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#yearly-sale">
                    Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#latest-blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      <li className="search-item pe-3">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #ccc",
                            borderRadius: "20px",
                            padding: "5px 10px",
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Search"
                            style={{
                              border: "none",
                              outline: "none",
                              flexGrow: 1,
                              marginRight: "10px",
                            }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </div>
                      </li>
                      <li className="pe-3">
                        <a href="/profile">
                          <svg className="user">
                            <use xlinkHref="#user" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="/chart">
                          <svg className="cart">
                            <use xlinkHref="#cart" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
