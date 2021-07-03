import Layout from '../components/Layout.js';

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position1selected: true,
            position2selected: false
        }
    }

    togglePosition(id) {
        if (id == 1) {
            this.setState(() => {
                return {position1selected: true, 
                        position2selected: false}
            });
        } else if (id == 2) {
            this.setState(() => {
                return {position1selected: false, 
                        position2selected: true}
            });
        }
        
    }

    render() {
        return (
            <Layout>

            <section className="career">
                <div className="container top">
                  <div className="top-area">
                    <h4 className="section-title">Company</h4>
                        {/* <button className="togglePosition" onClick={() => this.togglePosition(1)}>Software Engineer</button>&nbsp;&nbsp; */}
                        {/* <button className="togglePosition" onClick={()=>this.togglePosition(2)}>Data Scientist</button> */}

                    <p className="company-description">
                        DataJoint Inc. is a data solutions company supporting groundbreaking research in neuroscience and 
                        machine learning. Our mission is to enable research teams to solve the most complex problems in the field by bringing scientific 
                        rigor and clarity to big data and computations. We collaborate with top neuroscience and machine learning labs all over the world. 
                        We are a team of passionate, self-driven neuroscientists, data scientists, and software engineers, striving to provide best-in-class 
                        solutions for data-intensive scientific workflows. 
                        <br /><br />
                        Our work culture is fast-paced, highly collaborative and encourages open 
                        communication, innovation, and creative solutions. 
                    </p>
                  </div>
                  <div className="office-image-area">
                    <img className="office-image empty" src="/static/images/office.png" />
                    <img className="office-image filled" src="/static/images/team/office-scene2.jpg" />
                  </div>
                </div>
                <div className="container bottom">
                  <h4 className="section-title">Open Positions</h4>
                    <p>There are currently no open positions available.</p>
                {/* <div className="position1" style={this.state.position1selected ? {display: 'block'} : {display: 'none'}}>
                    
                    <div className="job-section">
                        <h3>Software Engineer</h3>
                        <p className="job-description">
                            <b>The position:</b><br />We are seeking a full-time experienced software engineer to support the development of scalable computational 
                            infrastructure. The company is located in the Texas Medical Center, Houston, TX, but remote work arrangement 
                            is also applicable.
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description">
                            <b>Responsibilities:</b><br />The Software Engineer will work within a team to design and develop the full-stack framework for a data hosting and 
                            processing web service for neuroscience and machine learning research labs. The framework will operate on a cloud 
                            hosting services (AWS) and will provide for user account management, spawning relational database and computational 
                            services in containerized fashion. The front-end is designed and developed utilizing the latest SPA framework to support 
                            intuitive interaction. The back-end infrastructure will support and provide APIs for the front-end UIs, client-facing 
                            software, and external database and computing resources. Within this project, primary responsibilities will entail 
                            system design, coding, and testing for the system, with a focus on interfaces between the UI, Middle Tier, and Backend 
                            services.The position will also entail development of open-source library <a target="_blank" href="https://datajoint.io">DataJoint</a>
                            &nbsp;to power computational pipelines in science labs, working in a team of neuro- and data scientists to develop frameworks 
                            and pipelines for analysis and visualization of scientific data.
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description">
                            <b>Benefits:</b><br />
                            <ul>
                                <li>Competitive Salary</li>
                                <li>Medical/Dental Plan</li>
                                <li>Flexible Remote Work Options</li>
                            </ul>
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description list-bottom">

                            <b>Qualifications:</b><br />
                            Required:
                            <ul>
                                <li>Strong background in software development (2+ years of demonstrated relevant professional experience)</li>
                                <li>B.S.+  in Computer Science or a related field</li>
                                <li>Proficiency in JavaScript and Python</li>
                                <li>Proficiency in a system programming language (e.g. C/C++, Rust, Go)</li>
                                <li>Working knowledge of algorithms and data structures</li>
                                <li>Experience with GNU/Linux operating systems</li>
                                <li>Experience with full-stack web development</li>
                                <li>Experience in Node.js or equivalent back-end server framework</li>
                                <li>Experience with SPA frameworks (e.g. React or Angular)</li>
                                <li>Experience in test-driven development</li>
                                <li>Experience developing in teams</li>
                            </ul>
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description list-bottom">Preferred:
                            <ul>
                                <li>Experience in open source software development</li>
                                <li>Experience with collaborative development process (e.g. GitHub, pull-request based development flow)</li>
                                <li>Experience in scientific programming (e.g. NumPy/SciPy, MATLAB) and visualizations (e.g. Matplotlib, Plotly)</li>
                                <li>Experience in networking and database management</li>
                                <li>Experience in cloud computing (e.g. AWS)</li>
                                <li>Experience in Docker/Kubernetes</li>
                            </ul>
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description">
                            <a href="mailto:jobs@vathes.com?subject=Interested in applying for the Software Engineer position" target="_blank" role="button">
                            <button className="apply-button">Contact Us</button>
                            </a>
                        </p>
                    </div>
                </div>

                <div className="position2" style={this.state.position2selected ? {display: 'block'} : {display: 'none'}}>
                    
                    <div className="job-section">
                        <h3>Data Scientist</h3>
                        <p className="job-description">
                            <b>The position:</b><br />We are seeking a full-time data scientist to support the development of scalable computational 
                            data pipelines for neuroscience projects. The company is located in the Texas Medical Center, Houston, TX, but remote work 
                            arrangement is also applicable. 
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description">
                            <b>Responsibilities:</b><br />The Data Scientist will work within a team to design and develop design standardized data processing
                             pipelines for neuroscience projects. Work with academic research groups to co-develop data analysis using the DataJoint framework. 
                             This may include traveling to clients’ labs (once safe) to configure systems, teaching database and programming concepts, and working 
                             directly with clients, and providing remote support. This may include custom code development to interface clients’ existing data 
                             acquisition systems. Generate documentation, tutorials, and presentations. 
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description">
                            <b>Benefits:</b><br />
                            <ul>
                                <li>Competitive Salary</li>
                                <li>Medical/Dental Plan</li>
                                <li>Flexible Remote Work Options</li>
                            </ul>
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description list-bottom">

                            <b>Qualifications:</b><br />
                            Required:
                            <ul>
                                <li>Ph.D. in neuroscience, bioinformatics, data science, or related fields</li>
                                <li>Excellent communication skills: presentations, work in groups, writing tutorials and manuals</li>
                                <li>Understanding of database concepts and practices</li>
                                <li>Proficiency in Python and MATLAB</li>
                                <li>Experience with data processing</li>
                                <li>Relational database design, SQL</li>
                                <li>Server configuration</li>
                                <li>OS experience: Linux, MacOS, Windows</li>
                            </ul>
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description list-bottom">Preferred:
                            <ul>
                                <li>Research experience in computational neuroscience or other data-intensive science fields</li>
                                <li>Statistical analysis, signal and image processing</li>
                                <li>Shell programming, system-level coding</li>
                                <li>Cloud architectures, AWS</li>
                                <li>Docker</li>
                            </ul>
                        </p>
                    </div>
                    <div className="job-section">
                        <p className="job-description">
                            <a href="mailto:jobs@vathes.com?subject=Interested in applying for the Data Scientist position" target="_blank" role="button">
                            <button className="apply-button">Contact Us</button>
                            </a>
                        </p>
                    </div>
                </div> */}

                </div>
            </section>
    
            <style jsx>{`
                section.career {
                  width: 100%;
                  position: relative;
                  background-image: url('/static/images/title-career.svg');
                  background-attachment: fixed;
                  background-position: 95% 12%;
                  background-repeat: no-repeat;
                  background-size: 28%;
                }

                section.career .container {
                  width: 80%;
                  margin: 0 auto;
                }

                section.career .container.top {
                  padding: 120px 0 0;
                  display: flex;
                }

                section.career .container.bottom {
                  padding: 2.5% 0 5%;
                }

                section.career .section-title {
                  font-weight: 600;
                  font-style: italic;
                  color: #0F3595;
                  margin: 0;
                }

                .career .container .top-area {
                  width: 50%;
                  position: relative;
                }

                .career .container .top-area .company-description {
                  width: 90%;
                }

                .office-image-area {
                  width: 50%;
                  position: relative;
                  min-height: 420px;
                }

                .office-image-area .office-image {
                  border-radius: 50%;
                }

                .office-image.empty {
                  width: 60%
                }

                .office-image.filled {
                  width: 80%;
                  position: absolute;
                  right: 0;
                  top: 50%;
                  box-shadow: 1px 1px 124px gray;
                }

                @media (max-width: 1054px) {
                    section.career {
                        background-size: 40%;
                    }
                    .career .container .top-area {
                        width: 66%;
                    }
                    .office-image-area {
                        width: 33%;
                        min-height: fit-content;
                        margin-top: 7.5%;
                    }
                    .office-image.empty {
                        width: 75%
                    }

                    .office-image.filled {
                        width: 90%;
                        top: 35%;
                    }
                }
                @media (max-width: 940px) {
                    section.career .container {
                        width: 90%;
                    }
                    .office-image-area {
                        margin-top: 7.5%;
                    }
                }
                @media (max-width: 700px) {
                    section.career {
                        background-position: 90% 10%;
                        background-size: 50%;
                    }
                    section.career .container {
                        display: flex;
                        flex-direction: column;
                    }
                    .career .container .top-area {
                        width: 100%;
                    }
                    .office-image-area {
                        width: 80%;
                        margin: 0 auto;
                        min-height: fit-content;
                    }
                    .office-image.empty {
                        display: none;
                    }

                    .office-image.filled {
                        position: relative;
                        box-shadow: none;
                    }
                }

            `}</style>
        </Layout>
        );
    }

}


export default Jobs;