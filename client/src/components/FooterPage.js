import React from "react";

const FooterPage = () => {
  return (
      <div className = "footer">
          <div className = "footer-inside">
            &copy; {new Date().getFullYear()} Copyright: <a className="footer-link" href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </div>
      </div>
  );
}

export default FooterPage;