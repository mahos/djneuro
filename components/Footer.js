import Link from 'next/link';

const footerText = {
    fontSize: '75%',
}

const snsLink = {
    right: '0',
    bottom: '12px',
    position: 'absolute'
}
const Footer = () => (
    <div>
        <footer>
          <div className="footer-contents">
            <div className="footer-column">
              <h4 className="column-header">Connect</h4>
              <ul className="column-list">
                <li className="sns-list">
                  <a href="#">
                    <img src="/static/images/icons/tw-icon-white-sq.svg" />
                  </a>
                  <a href="#">
                    <img src="/static/images/icons/github-icon-white-sq.svg" />
                  </a>
                  <a href="#">
                    <img src="/static/images/icons/ldn-icon-white-sq.svg" />
                  </a>
                  <a href="#">
                    <img src="/static/images/icons/mblog-icon-white-sq.svg" />
                  </a>
                  <a href="#">
                    <img src="/static/images/icons/ytube-icon-white-sq.svg" />
                  </a>
                </li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="column-header">About Us</h4>
              <ul className="column-list">
                <li><a href="/about">About</a></li>
                <li><a href="/team">Our Team</a></li>
                <li><a href="/policies">Policies</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="column-header">Services</h4>
              <ul className="column-list">
                <li><a href="/services">SciOps</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="column-header">Resources</h4>
              <ul className="column-list">
                <li><a href="#"><span>DataJoint Open Source</span><img className="ext-link-icon" src="/static/images/icons/external-link-icon.svg" /></a></li>
                <li><a href="#"><span>DataJoint Playground</span><img className="ext-link-icon" src="/static/images/icons/external-link-icon.svg" /></a></li>
                <li><a href="#"><span>Accounts Management</span><img className="ext-link-icon" src="/static/images/icons/external-link-icon.svg" /></a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="column-header">News</h4>
              <ul className="column-list">
                <li><a href="/news">News & Press Release</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="column-header">Career</h4>
              <ul className="column-list">
                <li><a href="/jobs">Current Openings</a></li>
              </ul>
            </div>
          </div>

          <p className="footer-text">DataJoint 2021 All Rights Reserved</p>
        </footer>
    <style jsx>{`
        footer {
          width: 100%;
          position: relative;
          padding: 10px 0px 4px;
          color: #FCFCFC;
          background-image: linear-gradient(to left top, #050E27, #4977ED 80%, #3293F1 90%, #3B85F0 96%);
        }

        footer .footer-contents {
          display: flex;
          width: 80%;
          margin: 42px auto;
          justify-content: space-between;
        }

        .footer-column .column-header {
          font-size: 1rem;
        }

        .footer-column ul.column-list {
          list-style: none;
          padding-left: 0;
        }

        ul.column-list li.sns-list {
          width: 70%;
        }

        ul.column-list li a {
          text-decoration: none;
          color: #FCFCFC;
          font-size: 0.85rem;
        }

        ul.column-list li a:hover {
          color: #1CA9F9;
        }

        ul.column-list li.sns-list img {
          width: 24px;
          margin-right: 4px;
        }

        ul.column-list li {
          margin-bottom: 16px;
          line-height: 1rem;
        }

        ul.column-list li a img.ext-link-icon {
          // this is for eternal link icon
          margin-left: 4px;
          height: 0.85rem;
        }

        .footer-text {
          text-align: center;
          font-size: 0.7rem;
        }
        


    `}</style>
    </div>
);

export default Footer;