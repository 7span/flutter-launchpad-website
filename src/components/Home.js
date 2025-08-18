const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img
          src="/open-source/dashing-kit/assets/img/effect-1.svg"
          className="svg"
          alt="image"
        />
      </div>
      <div className="effect-2">
        <img
          src="/open-source/dashing-kit/assets/img/effect-2.svg"
          className="svg"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center justify-content-center">
          <div className="col-lg-6 pe-xl-5 py-5 text-center">
            <div className="home-intro one-page-nav">
              <h6>
                <span>WIZARD-QUICK!</span>
              </h6>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                }}
              >
                Ship market-ready
                <br />
                Flutter apps at
                <br />
                lightning speed
              </h1>
              <p className="fw-light">
                Everything you need for Flutter development. Open source and
                ready to use boilerplate.
              </p>
              <div className="btn-bar">
                <a
                  className="px-btn px-btn-theme"
                  href="https://github.com/7span/flutter-launchpad"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
