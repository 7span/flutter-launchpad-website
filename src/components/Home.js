const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img src="assets/img/effect-1.svg" className="svg" alt="image" />
      </div>
      <div className="effect-2">
        <img src="assets/img/effect-2.svg" className="svg" alt="image" />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Hello</span>
              </h6>
              <h1>
                Your Next <br />
                Flutter App
                <br />
                Starts Here
              </h1>
              <p>
                The ultimate starting point for any Flutter developer: Clean architecture, essential integrations, and developer-friendly structure, ready to go.
              </p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#contactus">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img src="assets/img/home-banner.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
