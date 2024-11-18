const Navbar = () => {
  return (
    <nav className="navbar fixed-top -sm navbar-expand-lg bg-black navbar-light py-3 py-lg-5 px-lg-5">
      <a href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-1 display-5">
          <span className="teks-white">D</span>M <h6>Dicky Mamentu</h6>
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
          <a href="#home" className="nav-item nav-link active">
            Home
          </a>
          <a href="#about" className="nav-item nav-link">
            About
          </a>
          <a href="#qualification" className="nav-item nav-link">
            Quality
          </a>
          <a href="#contact" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <a href className="btn btn-outline-primary d-none d-lg-block">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
