import Layout from '../components/Layout.js';

export default function Policies() {
  return (
    <Layout>
      <div className="policies-section">
        <h3 className="section-title">Policies</h3>
        <div>
          <h4>Policy</h4>
          <p>Please click on the policy to download. 
          <ul>
            <li><a href="/static/documents/FCOI POLICY - DataJoint Financial Conflict of Interest Policy - June 2021.pdf" download>DataJoint Financial Conflict of Interest Policy</a></li> 
          </ul>
          </p>
        </div >
      </div>
      <style jsx>{`
          .policies-section {

          }

          .section-title {
            
          }
          

          @media (max-width: 480px) {
          
          }
      }
      `}</style>
    </Layout>
  );
}

