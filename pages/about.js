import Layout from '../components/Layout.js';

const About = () => (
    <Layout>
        <section className="about-datajoint">
          <div className="container">
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
          </div>
        </section>
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
            section.about-datajoint .container {
                width: 80%;
                margin: 0 auto;
                padding: 5% 0 0;
            }
            .about-grid-row {
                position: relative;
                display: grid;
                grid-template-columns: 1.2fr 1fr 1.2fr;
                width: 100%;
                padding: 5% 0;
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
                justify-content: center;
                max-width: 300px;
                margin: 0 auto;
            }
            .lab-img-container img {
                width: 100%;
                border-radius: 50%;
                max-width: 300px;
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
              background-position: 90% 20%;
              background-repeat: no-repeat;
              background-size: 33%;
            }

            .about-history-section .container {
              width: 80%;
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
              margin-top: 5%;
              position: absolute;
              width: 95%;
              margin-left: 2.5%;
              z-index: 0;
            }

            .history-stages .timeline {
              display: flex;
              position: relative;
              z-index: 20;
              justify-content: space-between;
            }

            .timeline .stage {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 30%;
              padding: 0 24px;
            }

            .timeline .stage .company-logo {
              height: 64px;
            }

            .timeline .stage .history-text {
              margin-top: 48px;
            }


            @media (min-width: 1277px) {
              .about-history-section {
                margin: 56px 0 10%;
              }
              .about-history-section {
                background-position: 90% 8%;
                background-size: 420px;
              }
              .history-stages {
                margin-top: 12%;
              }
              .history-stages img.arrow {
                margin-top: 0%;
                transform: scaleY(50%);
              }
            }
            @media (max-width: 1024px) {
              .about-grid-row .cell-item .cell-content {
                  margin-top: 0%;
              }
              .about-history-section {
                background-position: 90% 15%;
                background-size: 40%;
              }
              .history-stages img.arrow {
                margin-top: 10%;
                transform: scaleY(75%);
              }
            }
            @media (max-width: 912px) {
              section.about-datajoint .container {
                padding: 120px 0 0;
              }
              .about-grid-row {
                grid-template-columns: 48% 0 48%;
                grid-gap: 4%;
              }

              .about-grid-row.flip {
                grid-template-columns: 48% 48% 0fr;
                grid-gap: 8%;
              }
              .about-history-section {
                background-position: 90% 10%;
                background-size: 40%;
              }
              .about-history-section .timeline {
                display: flex;
                flex-direction: column;
              }
              .about-history-section .timeline .stage {
                width: 70%;
                margin: 4% auto;
              }
              .history-stages img.arrow {
                transform: rotate(90deg);
                margin-top: 45%;
              }
            }
            @media (max-width: 640px) {
              .about-grid-row {
                grid-template-columns: 1fr;
                grid-gap: 2%;
              }
              .about-grid-row.flip {
                grid-template-columns: 1fr;
                grid-gap: 2%;
              }
              .lab-img-container {
                margin: 0 auto;
              }
              hr.row-divider {
                visibility: hidden;
              }
              .about-history-section {
                background-attachment: scroll;
                background-position: 90% 1%;
              }
              .about-history-section .timeline .stage {
                width: 90%;
              }
              .history-stages img.arrow {
                transform: rotate(90deg) scaleX(150%);
                margin-top: 66%;
              }
            }

        `}</style>
        </Layout>
);

export default About;