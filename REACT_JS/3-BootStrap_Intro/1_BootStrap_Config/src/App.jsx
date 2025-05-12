export default function App() {
  return (
    <div>
      {/* Advanced Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <i className="fas fa-code me-2"></i>MySite
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fas fa-home me-1"></i>Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-info-circle me-1"></i>About
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-laptop-code me-1"></i>Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Consulting
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-envelope me-1"></i>Contact
                </a>
              </li>
            </ul>

            <div className="d-flex">
              <button className="btn btn-outline-light me-2">Login</button>
              <button className="btn btn-warning">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mt-5">
        <h1>HELLO</h1>
        <p>Welcome to your Bootstrap-powered React app!</p>
      </div>
    </div>
  );
}
