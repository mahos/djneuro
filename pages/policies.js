import Layout from '../components/Layout.js';

export default function Policies() {
  return (
    <Layout>
      <div className="policies-section">
        <h3 className="section-title">Policies</h3>
        <div>
          <p>Please click on the policy to download. 
          <ul className="policy-list">
            <li><a href="/static/documents/FCOI POLICY - DataJoint Financial Conflict of Interest Policy - June 2021.pdf" download>DataJoint Financial Conflict of Interest Policy</a></li> 
          </ul>
          </p>
        </div >
      </div>
      <style jsx>{`
          .policies-section {
            position: relative;
            padding: 120px 0 10%;
            width: 80%;
            margin: 0 auto;
          }

          .section-title {
            font-weight: 600;
            font-style: italic;
            color: #0F3595;
            margin: 0;
          }

          .policy-list a {
            text-decoration: none;
            color: #3293F1;
          }

          .policy-list a:hover {
            color: #1CA9F9;
          }

          @media (max-width: 940px) {
            .policies-section {
              width: 90%;
            }
          }
      }
      `}</style>
    </Layout>
  );
}

