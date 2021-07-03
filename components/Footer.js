import Link from 'next/link';

const Footer = () => (
    <div>
        <footer>
          <div className="footer-contents">
            <div className="footer-column">
              <h4 className="column-header">Connect</h4>
              <ul className="column-list">
                <li className="sns-list">
                  <a href="https://twitter.com/datajointneuro" target="_blank">
                    <img src="/static/images/icons/tw-icon-white-sq.svg" />
                  </a>
                  <a href="https://github.com/datajoint" target="_blank">
                    <img src="/static/images/icons/github-icon-white-sq.svg" />
                  </a>
                  <a href="https://www.linkedin.com/company/datajoint" target="_blank">
                    <img src="/static/images/icons/ldn-icon-white-sq.svg" />
                  </a>
                  <a href="https://medium.com/datajoint" target="_blank">
                    <img src="/static/images/icons/mblog-icon-white-sq.svg" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCRtKuW3Y_gpr2nA4H8k_Vhg" target="_blank">
                    <img src="/static/images/icons/ytube-icon-white-sq.svg" />
                  </a>
                </li>
                <li><a href="mailto:info@datajoint.com" target="_blank">Contact Us</a></li>
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
                <li><a href="https://datajoint.org/"><span>DataJoint Open Source</span><img className="ext-link-icon" src="/static/images/icons/external-link-icon.svg" /></a></li>
                <li><a href="https://playground.datajoint.io/"><span>DataJoint Playground</span><img className="ext-link-icon" src="/static/images/icons/external-link-icon.svg" /></a></li>
                <li><a href="https://accounts.datajoint.io"><span>Accounts Management</span><img className="ext-link-icon" src="/static/images/icons/external-link-icon.svg" /></a></li>
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
          display: grid;
          width: 80%;
          margin: 42px auto;
          grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr 1fr;
          //justify-content: space-between;
        }

        .footer-column .column-header {
          font-size: 1rem;
          margin-top: 0;
          margin-bottom: 16px;
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
        
        @media (max-width: 1054px) {
          footer .footer-contents {
            grid-template-columns: 1.5fr 1fr 1fr;
            grid-row-gap: 24px;
          }    
        }
        @media (max-width: 940px) {
          footer .footer-contents {
            width: 90%;
            margin: 24
          }  
        }
        @media (max-width: 768px) {
          footer .footer-contents {
            grid-template-columns: 1fr 1fr;
          }  
        }
        @media (max-width: 480px) {
          footer .footer-contents {
            margin: 12px auto;
            grid-column-gap: 12px;
          } 
          ul.column-list li.sns-list {
            width: 100%;
          }
          ul.column-list li.sns-list img {
            width: 32px;
            margin-right: 8px;
          }
        }


    `}</style>
    </div>
);

export default Footer;