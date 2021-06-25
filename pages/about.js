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
                    <p>DataJoint Neuro works closely with the <a href="https://www.imagwiki.nibib.nih.gov/working-groups/other-nih-brain-initiative-u19-data-science-consortium">NIH 
                    BRAIN Initiative U19 Data Science Consortium</a> and <a href="https://www.nwb.org/">Neurodata Without Borders</a> to ensure 
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
                    <p>We help neuroscientists use DataJoint to accelerate their research.  DataJoint Neuro provides solutions for project planning, 
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
                        Neuro offers expertise and solutions to support AI research.
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
                    <p>DataJoint Neuro is run by Vathes LLC based in Houston, Texas. Vathes LLC spun off from the Lab of Andreas Tolias at Baylor
                        College of Medicine in 2017 after receiving initial SBIR funding from DARPA.
                    </p>
                </div>
            </div >
        </div>
        <style jsx>{`
            .about-grid-row {
                display: grid;
                grid-template-columns: 1.2fr 1fr 1.2fr;
                width: 90%;
                margin: 5% auto;
            }

            .about-grid-row.flip {
                grid-template-columns: 1fr 1.2fr 1fr;
            }

            .about-grid-row .cell-item {
                padding: 24px;
            }

            .about-grid-row .cell-item .cell-content {
                margin-top: 20%;
            }

            .about-grid-row.flip .cell-item .cell-content {
                margin-top: 16%;
            }

            .cell-content .section-title {
                  font-weight: 600;
                  font-style: italic;
                  color: #0F3595;
                  margin: 0;
                }

            .cell-content p {
                line-height: 1.6rem;
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
                //opacity: 50%;
            }

            hr.row-divider {
                width: 60%;
                margin: 0 auto;
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