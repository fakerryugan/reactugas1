import gambarPcb from '../assets/pcb.jpg';

export default function Home({ setPage }) {
  return (
    <div className="container mt-5 pt-4 mb-5">
      <div className="row align-items-center g-5 mb-5 pb-5" style={{ minHeight: '75vh' }}>
        <div className="col-lg-6 pe-lg-5">
          <div className="d-inline-flex align-items-center bg-info bg-opacity-10 text-info border border-info rounded-pill px-3 py-2 mb-4">
            <span className="spinner-grow spinner-grow-sm me-2 text-info" role="status" aria-hidden="true"></span>
            <strong className="small tracking-wide">Muncar, Banyuwangi - Ready to Serve</strong>
          </div>
          <h1 className="display-4 fw-bold mb-4 text-dark" style={{ lineHeight: '1.2' }}>
            Revive Your <br />
            <span style={{ background: 'linear-gradient(45deg, #0dcaf0, #0d6efd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Handheld Consoles
            </span>
          </h1>
          <p className="lead text-secondary mb-5" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
            Spesialis reparasi dan modifikasi Nintendo DSi, 3DS, hingga Switch. Kami juga melayani setup jaringan MikroTik RT/RW Net dan optimasi sistem dengan standar profesional.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <button onClick={() => setPage('contact')} className="btn btn-info btn-lg rounded-pill px-5 fw-bold text-dark shadow" style={{ transition: 'all 0.3s' }}>
              Konsultasi Masalah
            </button>
            <button onClick={() => setPage('team')} className="btn btn-outline-dark btn-lg rounded-pill px-5 fw-bold">
              Profil Teknisi
            </button>
          </div>
        </div>
        <div className="col-lg-6 position-relative text-center">
          <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 bg-info rounded-circle opacity-25" style={{ filter: 'blur(80px)', zIndex: 0 }}></div>
          <img 
            src={gambarPcb}
            alt="Console Repair" 
            className="img-fluid rounded-4 shadow-lg position-relative" 
            style={{ zIndex: 1, border: '1px solid rgba(0,0,0,0.1)' }}
          />
        </div>
      </div>
      
      <div className="py-5 mt-4 border-top border-secondary border-opacity-25 pt-5">
        <div className="text-center mb-5">
          <h6 className="text-info text-uppercase fw-bold letter-spacing-1">Layanan Utama</h6>
          <h2 className="fw-bold display-6 text-dark mb-3">Spesialisasi Kami</h2>
          <div className="mx-auto bg-info" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 bg-white border border-secondary border-opacity-25 rounded-4 shadow-sm p-4" style={{ transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="mb-4">
                <i className="bi bi-tools text-info display-5"></i>
              </div>
              <h4 className="fw-bold text-dark">Hardware Repair</h4>
              <p className="text-secondary mb-0">Solusi analog drifting, layar blank, ganti baterai, hingga mati total pada konsol Nintendo kesayangan Anda.</p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 bg-white border border-secondary border-opacity-25 rounded-4 shadow-sm p-4" style={{ transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="mb-4">
                <i className="bi bi-cpu text-info display-5"></i>
              </div>
              <h4 className="fw-bold text-dark">Software & CFW</h4>
              <p className="text-secondary mb-0">Instalasi Custom Firmware (CFW), unbrick sistem, downgrade/upgrade OS, dan optimasi software konsol.</p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 bg-white border border-secondary border-opacity-25 rounded-4 shadow-sm p-4" style={{ transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="mb-4">
                <i className="bi bi-router text-info display-5"></i>
              </div>
              <h4 className="fw-bold text-dark">MikroTik Network</h4>
              <p className="text-secondary mb-0">Manajemen jaringan, setting billing RT/RW Net, load balancing, dan troubleshooting infrastruktur WiFi.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-5">
        <div className="card bg-info border-0 rounded-4 overflow-hidden shadow-lg position-relative">
          <div className="position-absolute top-0 end-0 w-50 h-100 bg-white opacity-25" style={{ transform: 'skewX(-20deg) translateX(20%)' }}></div>
          <div className="card-body p-5 text-dark d-flex flex-column flex-lg-row align-items-center justify-content-between position-relative z-index-1">
            <div className="text-center text-lg-start mb-4 mb-lg-0">
              <h2 className="fw-bold mb-2">Konsol Anda Bermasalah?</h2>
              <p className="lead fw-medium mb-0">Jangan biarkan debu menumpuk. Segera konsultasikan dan kembalikan performanya.</p>
            </div>
            <button onClick={() => setPage('contact')} className="btn btn-dark btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm text-info">
              Buat Tiket Antrean Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}