import Layout from '../components/Layout.js';

const About = () => (
    <Layout>
        <div className="about-grid-row">
            <div className="cell-item">
                <div className="cell-content">
                    <h4 className="section-title">The DataJoint experts</h4>
                    <p>Our team is the principal developer of <a href="https://datajoint.io">DataJoint®</a> — a free, open-source framework 
                    for shared scientific databases and computational data pipelines programmed and accessed directly from MATLAB and Python. 
                    </p>
                </div>
            </div>
            <div className="cell-item">
                <div className="lab-img-container">
                    <img src="/static/images/artwork/above_white_matter.jpg" />
                </div>
            </div>
            <div className="cell-item">
                <div className="cell-content">
                    <h4 className="section-title">Committed to data integrity and reproducibility</h4>
                    <p>DataJoint Inc. works closely with the NIH 
                    BRAIN Initiative  <a href="https://www.imagwiki.nibib.nih.gov/working-groups/other-nih-brain-initiative-u19-data-science-consortium">
                    U19 Data Science Consortium</a> and <a href="https://www.nwb.org/">Neurodata Without Borders</a> to ensure 
                    smooth integration with the NIH BRAIN Initiative Informatics infrastructure.
                    </p> 
                </div>
            </div >
        </div>
        <hr className="row-divider" />
        <div className="about-grid-row flip">
            <div className="cell-item">
                <div className="lab-img-container">
                    <img src="/static/images/artwork/blue-cherry-flicker.gif" />
                </div>
            </div>
            <div className="cell-item">
                <div className="cell-content">
                    <h4 className="section-title">We work with top neuroscience labs worldwide</h4>
                    <p>We help neuroscientists use DataJoint to accelerate their research.  DataJoint Inc. provides solutions for project planning, 
                        training, data infrastructure, as well as tools and resources for maximizing the productivity of individual labs and large 
                        consortia. We lead in providing comprehensive solutions for custom scientific data pipelines in neuroscience.
                    </p>
                </div>
            </div>
            <div className="cell-item">
                <div className="lab-img-container">
                    <img src="/static/images/artwork/3P_surface_bright.jpg" />
                </div>
            </div>
        </div>
        <hr className="row-divider" />
        <div className="about-grid-row">
            <div className="cell-item">
                <div className="cell-content">
                    <h4 className="section-title">Bringing scientific rigor to AI research</h4>
                    <p>DataJoint has also gained popularity in AI research as a data framework for model selection and parameter optimization. DataJoint 
                        Inc. offers expertise and solutions to support AI research.
                    </p>
                </div>
            </div >
            <div className="cell-item">
                <div className="lab-img-container">
                    <img src="/static/images/artwork/pipette.png" />
                </div>
            </div>
            <div className="cell-item">
                <div className="cell-content">
                    <h4 className="section-title">Lab grown</h4>
                    <p>DataJoint Inc. is based in Houston, Texas. DataJoint spun off from the Lab of Andreas Tolias at Baylor College of Medicine 
                      in 2017 after receiving initial SBIR funding from DARPA.
                    </p>
                </div>
            </div >
        </div>
        <section className="about-history-section">
          <div className="container">
            <div className="history-stages">
              <img src="/static/images/arrow-light.svg" className="arrow" />
              <div className="timeline">
                <div className="stage">
                  <img src="/static/images/logo/vathes-logo.png" className="company-logo" />
                  <p className="history-text">
                  DataJoint Inc, originally named Vathes LLC, was founded in 2016, to provide support for and build data hosting 
                  service based on DataJoint enabling distributed teams of scientists to work with the same data transparently and efficiently.
                  </p>
                </div>
                <div className="stage">
                  <img src="/static/images/logo/datajoint-neuro-logo.png" className="company-logo" />
                  <p className="history-text">
                  In 2019, Vathes began business as DataJoint Neuro, providing services specifically for neuroscience laboratories to 
                  configure their data processing pipelines, develop custom interfaces, and publish data.
                  </p>
                </div>
                <div className="stage">
                  <img src="/static/images/logo/datajoint-logo.png" className="company-logo" />
                  <p className="history-text">
                  In 2021, DataJoint Neuro rebranded itself to DataJoint Inc. and will continue to offer services around DataJoint software and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
            .about-grid-row {
                display: grid;
                grid-template-columns: 1.2fr 1fr 1.2fr;
                width: 80%;
                margin: 5% auto;
            }

            .about-grid-row.flip {
                grid-template-columns: 1fr 1.2fr 1fr;
                align-items: center;
            }

            .about-grid-row .cell-item {
                padding: 24px;
            }

            .about-grid-row .cell-item .cell-content {
                margin-top: 14%;
            }

            .about-grid-row.flip .cell-item .cell-content {
                margin-top: 0;
            }

            .cell-content .section-title {
                  font-weight: 600;
                  font-style: italic;
                  color: #0F3595;
                  margin: 0;
                }

            .cell-content p a {
                text-decoration: none;
                color: #3293F1;
            }

            .cell-content p a:hover {
                color: #1CA9F9;
            }

            .lab-img-container {
                border-radius: 50%;
                box-shadow: gray 2px 2px 3px;
                display: flex;
                align-items: center;
            }
            .lab-img-container img {
                width: 100%;
                border-radius: 50%;
            }

            hr.row-divider {
                width: 54%;
                margin: 0 auto;
                color: lightgray;
            }

            .about-history-section {
              width: 100%;
              position: relative;
              background-image: url('/static/images/title-history.svg');
              background-attachment: fixed;
              background-position: 90% 35%;
              background-repeat: no-repeat;
              background-size: 40%;
            }

            .about-history-section .container {
              width: 90%;
              margin: 0 auto;
              position: relative;
              border-top: 1px solid lightgray;
              padding: 56px 0;
            }

            .history-stages {
              position: relative;
              z-index: 20;
              margin-top: 6%;
              
            }

            .history-stages img.arrow {
              position: absolute;
              width: 90%;
              margin-left: 5%;
              z-index: 10;
            }

            .history-stages .timeline {
              display: flex;
              position: relative;
              z-index: 20;
            }

            .timeline .stage {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 30%;
              margin: 5%;
            }

            .timeline .stage .company-logo {
              height: 64px;
            }

            .timeline .stage .history-text {
              margin-top: 48px;
            }

            @media (max-width: 1440px) {
                
            }
            @media (max-width: 768px) {
                
            }
            @media (max-width: 480px) {
               
            }

        `}</style>
        </Layout>
);

export default About;