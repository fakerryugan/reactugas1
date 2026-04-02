import gambarav from '../assets/av.png';
export default function Team() {
  return (
    <div className="container mt-5 pt-4 mb-5">
      <div className="text-center mb-5">
        <h6 className="text-info text-uppercase fw-bold letter-spacing-1">Meet The Expert</h6>
        <h2 className="fw-bold display-5 text-black mb-3">Lead Technician</h2>
        <div className="mx-auto bg-info" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card bg-transparent border-0 text-white">
            <div className="row g-0 align-items-center rounded-4 border border-secondary shadow-lg overflow-hidden" style={{ background: 'linear-gradient(145deg, #1a1d20 0%, #212529 100%)' }}>
              <div className="col-md-5 h-100">
                <img 
                  src={gambarav} 
                  className="img-fluid h-100 w-100" 
                  style={{ objectFit: 'cover', minHeight: '400px' }}
                  alt="Fatkur - Lead Tech"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body p-5">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="card-title fw-bold text-info mb-0">Fatkur Rohman</h3>
                    <span className="badge bg-primary bg-opacity-25 text-info border border-info rounded-pill px-3 py-2">
                      Politeknik Negeri Banyuwangi
                    </span>
                  </div>
                  <h6 className="text-secondary mb-4 font-monospace">Software Eng. & Hardware Technician</h6>
                  
                  <p className="card-text text-light opacity-75 mb-4" style={{ lineHeight: '1.7' }}>
                    Alumnus SMKN Darul Ulum Muncar yang memiliki keahlian mendalam dalam modifikasi konsol handheld dan <i>troubleshooting</i> hardware. Menguasai manajemen jaringan MikroTik, environment Linux Debian (Hyprland), serta Full-stack Web Development menggunakan Laravel, React, dan Flutter.
                  </p>
                  
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-dark border border-secondary text-light px-3 py-2">Nintendo Modding</span>
                    <span className="badge bg-dark border border-secondary text-light px-3 py-2">MikroTik Net</span>
                    <span className="badge bg-dark border border-secondary text-light px-3 py-2">Linux Debian</span>
                    <span className="badge bg-dark border border-secondary text-light px-3 py-2">Web Fullstack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}