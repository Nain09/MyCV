const Qualification = () => {
  return (
    <div
      id="qualification"
      className="container py-5"
      style={{ direction: "ltr", textAlign: "left", color: "white" }} // Tambahkan color: "white"
    >
      <h1
        className="text-center text-uppercase"
        style={{ WebkitTextStroke: "1px #dee2e6", color: "white" }} // Teks putih
      >
        Quality
      </h1>
      <h2 className="text-center text-primary">Education &amp; Experience</h2>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="mb-4">My Education</h3>
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5>SMP</h5>
              <p>
                <strong>Smp Advent 03 Ranotana</strong> | 2016 - 2019
              </p>
              <p></p>
            </li>
            <li className="mb-4">
              <h5>SMA</h5>
              <p>
                <strong>Sma Negeri 01 Pineleng</strong> | 2019 - 2022
              </p>
              <p>.</p>
            </li>
            <li className="mb-4">
              <h5>Perguruan Tinggi</h5>
              <p>
                <strong>Universitas Klabat</strong> | 2022 - Sekarang
              </p>
              <p></p>
            </li>
          </ul>
        </div>

        <div className="col-lg-6">
          <h3 className="mb-4">My Experience</h3>
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5>Gamers</h5>
            </li>
            <li className="mb-4">
              <h5>Cyber Security</h5>
            </li>
            <li className="mb-4">
              <h5>Programmer</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
