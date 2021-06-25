import Layout from '../components/Layout.js';
// import PipelinePage from './pipelines.js';

export default function Resources() {
    return (
        <Layout>
            <section className="resources-section">
              <div className="container">
                <h4 className="section-title">Resources</h4>
                <div className="resources-listing">
                  <div className="resource-card">
                    <div className="resource-image">
                      <img className="dj-oss-logo" src="/static/images/logo/datajoint-oss-logo.svg" />
                    </div>
                    <p className="resource-detail">DataJoint proudly develops multiple open-source applications for the DataJoint community. 
                    More information on our open-source projects can be found at <a href="https://datajoint.org" target="_blank">DataJoint.org</a> site.</p>
                  </div>
                  <div className="resource-card">
                    <div className="resource-image">
                      <img className="demo" src="/static/images/playgrounddemo.gif" />
                      <img className="frame" src="/static/images/laptopFrame.png" />
                    </div>
                    <p className="resource-detail">DataJoint also hosts <a href="https://playground.datajoint.io" target="_blank">DataJoint Playground</a>, a free,  online interactive tutorial where 
                    users can try DataJoint (the open-source software) out without any local setup.</p>
                  </div>
                  <div className="resource-card">
                    <div className="resource-image">
                      <img className="user-account" src="/static/images/user-management-image.svg" />
                    </div>
                    <p className="resource-detail">User <a href="https://accounts.datajoint.io" target="_blank">account management</a> for all users of Data&shy;Joint Playground, as well as existing DataJoint 
                    users, can be found <a href="https://accounts.datajoint.io" target="_blank">here</a>.</p>
                  </div>
                </div>
              </div>
                
            </section>
            {/* <PipelinePage></PipelinePage> */}
            <style jsx>{` 
                section .container {
                  position: relative;
                  width: 80%;
                  margin: 0 auto;
                  padding: 10%;
                }

                section .section-title {
                  font-weight: 600;
                  font-style: italic;
                  color: #0F3595;
                  margin: 0;
                }

                .resources-listing {
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr;
                  margin-top: 24px;
                }

                .resource-card {
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding: 10% 5%;
                }

                .resource-image {
                  width: 96%;
                  margin: 0 auto;
                  height: 200px;;
                  position: relative;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                .resource-image .dj-oss-logo {
                  width: 80%;
                }

                .resource-image .demo {
                  width: 76%;
                  position: absolute;
                }

                .resource-image .frame {
                  width: 100%;
                  position: absolute;
                }

                .resource-image .user-account {
                  height: 120px;
                }

                .resource-detail {
                  position: relative;
                }

                .resource-detail a {
                  text-decoration: none;
                  color: #3293F1;
                }

                .resource-detail a:hover {
                  color: #1CA9F9;
                }

                @media (max-width: 1024px) {
                    
                }
               
                @media (max-width: 768px) {
                  

                        
                }

                @media (max-width: 480px) {
                 
                }
            }
            `}</style>
        </Layout>
    );
}

