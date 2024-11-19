const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top shadow-sm navbar-expand-lg navbar-light py-3 py-lg-0 px-lg-5"
      style={{
        background: "white", // Warna latar belakang putih
        borderBottom: "2px solid #f1f1f1", // Menambahkan garis bawah untuk efek elegan
      }}
    >
      <a href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5">
          <span className="text-primary">K</span>N <h6>King Najoan</h6>
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto py-0">
          <a href="#home" className="nav-item nav-link text-dark active">
            Home
          </a>
          <a href="#about" className="nav-item nav-link text-dark">
            About
          </a>
          <a href="#qualification" className="nav-item nav-link text-dark">
            Quality
          </a>
          <a href="#contact" className="nav-item nav-link text-dark">
            Contact
          </a>
        </div>
        <a href="#" className="btn btn-outline-primary d-none d-lg-block">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
