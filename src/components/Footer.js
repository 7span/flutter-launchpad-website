const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="https://discord.gg/g8ZgjZsp" target="_blank">
                <i className="fab fa-discord" />
              </a>
              <a href="https://x.com/7SpanHQ" target="_blank">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/company/7span/" target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="m-0">
              © {new Date().getFullYear()} copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
