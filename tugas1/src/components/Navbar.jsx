export default function Navbar({ setPage, page }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top border-bottom border-secondary" style={{ backgroundColor: 'rgba(33, 37, 41, 0.85)', backdropFilter: 'blur(12px)' }}>
      <div className="container py-2">
        <a className="navbar-brand fw-bolder fs-3 text-info" href="#" onClick={() => setPage('home')}>
          Fatkur<span className="text-white">Mods</span>
        </a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold align-items-lg-center">
            <li className="nav-item mx-2">
              <a className={`nav-link ${page === 'home' ? 'text-info' : 'text-light'}`} style={{ cursor: 'pointer', transition: '0.3s' }} onClick={() => setPage('home')}>
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link ${page === 'team' ? 'text-info' : 'text-light'}`} style={{ cursor: 'pointer', transition: '0.3s' }} onClick={() => setPage('team')}>
                Team
              </a>
            </li>
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <button className="btn btn-info rounded-pill px-4 fw-bold shadow-sm" onClick={() => setPage('contact')}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}