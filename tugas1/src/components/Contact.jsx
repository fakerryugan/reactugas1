export default function Contact() {
  return (
    <div className="container mt-5 pt-4 mb-5">
      <div className="text-center mb-5">
        <h6 className="text-info text-uppercase fw-bold">Transmission Secured</h6>
        <h2 className="fw-bold display-5 text-black mb-3">Hubungi Kami</h2>
        <div className="mx-auto bg-info" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
      </div>

      <div className="row justify-content-center g-5">
        <div className="col-lg-4">
          <div className="h-100 d-flex flex-column justify-content-center">
            <h4 className="fw-bold mb-4 text-black">Informasi Workshop</h4>
            <p className="text-secondary mb-5">Jelaskan detail kerusakan perangkat Anda untuk mendapatkan estimasi biaya dan waktu pengerjaan secara transparan.</p>
            
            <div className="d-flex align-items-center mb-4">
              <div className="bg-info bg-opacity-10 text-info rounded p-3 me-3 border border-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
              </div>
              <div>
                <h6 className="fw-bold mb-1 text-white">Lokasi Kami</h6>
                <p className="text-secondary mb-0 small">Muncar, Banyuwangi<br/>Jawa Timur, Indonesia</p>
              </div>
            </div>
            
            <div className="d-flex align-items-center">
              <div className="bg-info bg-opacity-10 text-info rounded p-3 me-3 border border-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16"><path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
              </div>
              <div>
                <h6 className="fw-bold mb-1 text-white">Konsultasi</h6>
                <p className="text-secondary mb-0 small">Fast response via Form<br/>atau DM Sosial Media</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card bg-dark border border-secondary shadow-lg rounded-4">
            <div className="card-body p-4 p-md-5">
              <form>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control bg-transparent text-white border-secondary focus-ring-info" id="name" placeholder="Nama" />
                  <label htmlFor="name" className="text-secondary">Nama Lengkap</label>
                </div>
                
                <div className="form-floating mb-3">
                  <select className="form-select bg-transparent text-white border-secondary" id="device">
                    <option className="text-dark" value="switch">Nintendo Switch Family</option>
                    <option className="text-dark" value="3ds">Nintendo 3DS / 2DS</option>
                    <option className="text-dark" value="dsi">Nintendo DSi / NDS</option>
                    <option className="text-dark" value="network">Setup Jaringan / MikroTik</option>
                  </select>
                  <label htmlFor="device" className="text-secondary">Kategori Layanan</label>
                </div>

                <div className="form-floating mb-4">
                  <textarea className="form-control bg-transparent text-white border-secondary" placeholder="Tuliskan keluhan" id="message" style={{ height: '140px' }}></textarea>
                  <label htmlFor="message" className="text-secondary">Deskripsikan kendala / request mod</label>
                </div>

                <button type="button" className="btn btn-info w-100 py-3 fw-bold rounded-3 shadow text-dark">
                  Kirim Tiket Antrean
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}