import Layout from '../components/Layout.js';


const background = {
    backgroundColor: 'rgba(5, 0, 40, 0.85)',
    padding: '60px 40px',
    color: '#E1EBF7',
    position: 'relative'
};

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
                  background-size: 40%;
                }

                section.career .container {
                  width: 80%;
                  margin: 0 auto;
                }

                section.career .container.top {
                  padding: 15% 0 0;
                  display: flex;
                }

                section.career .container.bottom {
                  padding: 0 0 5%;
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
                  width: 300px;
                }

                .office-image.filled {
                  width: 400px;
                  position: absolute;
                  right: 0;
                  bottom: 0;
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
    }

}
// const Jobs = () => (
//     <Layout>

//         <div style={background}>
//             <h2>Career Opportunities</h2>

//             <h3>Software Engineer</h3>
//             <div className="job-section">
//                 <p className="job-description">
//                     <b>The company:</b><br />Vathes LLC (doing business as DataJoint Neuro) is a data solutions company supporting groundbreaking research in neuroscience and 
//                     machine learning. Our mission is to enable research teams to solve the most complex problems in the field by bringing scientific 
//                     rigor and clarity to big data and computations. We collaborate with top neuroscience and machine learning labs all over the world. 
//                     We are a team of passionate, self-driven neuroscientists, data scientists, and software engineers, striving to provide best-in-class 
//                     solutions for data-intensive scientific workflows. Our work culture is fast-paced, highly collaborative and encourages open 
//                     communication, innovation, and creative solutions. 
//                 </p>

//             </div>

//             Open Positions: <button>Software Engineer</button>&nbsp;&nbsp;<button>Data Scientist</button>
//             <div className="position1">
//                 <h3>Software Engineer</h3>
//                 <div className="job-section">
//                     <p className="job-description">
//                         <b>The position:</b><br />We are seeking a full-time experienced software engineer to support the development of scalable computational 
//                         infrastructure. The company is located in the Texas Medical Center, Houston, TX, but remote work arrangement 
//                         is also applicable.
//                     </p>
//                 </div>
                
//                 <div className="job-section">
//                     <p className="job-description">
//                         <b>Responsibilities:</b><br />The Software Engineer will work within a team to design and develop the full-stack framework for a data hosting and 
//                         processing web service for neuroscience and machine learning research labs. The framework will operate on a cloud 
//                         hosting services (AWS) and will provide for user account management, spawning relational database and computational 
//                         services in containerized fashion. The front-end is designed and developed utilizing the latest SPA framework to support 
//                         intuitive interaction. The back-end infrastructure will support and provide APIs for the front-end UIs, client-facing 
//                         software, and external database and computing resources. Within this project, primary responsibilities will entail 
//                         system design, coding, and testing for the system, with a focus on interfaces between the UI, Middle Tier, and Backend 
//                         services.The position will also entail development of open-source library <a target="_blank" href="https://datajoint.io">DataJoint</a>
//                         &nbsp;to power computational pipelines in science labs, working in a team of neuro- and data scientists to develop frameworks 
//                         and pipelines for analysis and visualization of scientific data.
//                     </p>
//                 </div>
//                 <div className="job-section">
//                     <p className="job-description">
//                         <b>Benefits:</b><br />
//                         <ul>
//                             <li>Competitive Salary</li>
//                             <li>Medical/Dental Plan</li>
//                             <li>Flexible Remote Work Options</li>
//                         </ul>
//                     </p>
//                 </div>
//                 <div className="job-section">
//                     <p className="job-description list-bottom">

//                         <b>Qualifications:</b><br />
//                         Required:
//                         <ul>
//                             <li>Strong background in software development (2+ years of demonstrated relevant professional experience)</li>
//                             <li>B.S.+  in Computer Science or a related field</li>
//                             <li>Proficiency in JavaScript and Python</li>
//                             <li>Proficiency in a system programming language (e.g. C/C++, Rust, Go)</li>
//                             <li>Working knowledge of algorithms and data structures</li>
//                             <li>Experience with GNU/Linux operating systems</li>
//                             <li>Experience with full-stack web development</li>
//                             <li>Experience in Node.js or equivalent back-end server framework</li>
//                             <li>Experience with SPA frameworks (e.g. React or Angular)</li>
//                             <li>Experience in test-driven development</li>
//                             <li>Experience developing in teams</li>
//                         </ul>
//                     </p>
//                 </div>
//                 <div className="job-section">
//                     <p className="job-description list-bottom">Preferred:
//                         <ul>
//                             <li>Experience in open source software development</li>
//                             <li>Experience with collaborative development process (e.g. GitHub, pull-request based development flow)</li>
//                             <li>Experience in scientific programming (e.g. NumPy/SciPy, MATLAB) and visualizations (e.g. Matplotlib, Plotly)</li>
//                             <li>Experience in networking and database management</li>
//                             <li>Experience in cloud computing (e.g. AWS)</li>
//                             <li>Experience in Docker/Kubernetes</li>
//                         </ul>
//                     </p>
//                 </div>
//                 <div className="job-section">
//                     <p className="job-description">
//                         <a href="mailto:jobs@vathes.com?subject=Interested in applying for the Software Engineer position" target="_blank" role="button">
//                         <button className="apply-button">Contact Us</button>
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div >
 
//         <style jsx>{`
//             a {
//                 text-decoration: none;
//                 color: #CAE7FF; // light bluish grey
//             }

//             a:hover {
//                 color: #41B0F7 ; 
//             }

//             div {
//                 background-repeat: no-repeat;
//                 color: #E1EBF7;  // blueish muted white
//                 background-image: url("/static/images/artwork/lighteningshape2.svg");
//                 background-attachment: fixed;
//                 background-position: top left;
//             }

//             div.job-section {
//             }

//             h2 {
//                 font-size: 2.2rem;
//                 m
//             }
//             h3 {
//                 font-size: 1.7rem;
//             }

//             p.job-description {
//                 text-align: left;
//                 padding: 5px 15% 2%;
//                 font-size: 18px;
//                 line-height: 1.9rem;
//             }

//             p.job-description.list-bottom {
//                 padding: 5px 15%;
//                 margin-top: -1em;
//             }

//             button.apply-button {
//                 padding: 30px 60px;
//                 background-color: blueviolet;
//                 color: white;
//                 font-size: 1.3rem;
//                 margin-top: 2%;
//                 margin-bottom: 30px;
//                 border-radius: 5px;
//                 border: 0px;
//             }

//             button.apply-button:hover {
//                 background-color: #701ac0; 
//                 cursor: pointer;
//             }

//             @media (max-width: 1440px) {
                
//             }
//             @media (max-width: 768px) {
//                 h3 {
//                     font-size: 1.3rem;
//                 }

//                 p.job-description {
//                     font-size: 1rem;
//                     line-height: 1.9rem;
//                     padding: 5px 7% 1.5%;
//                 }
//                 p.job-description.list-bottom {
//                     padding: 5px 7%;
//                 }
//             }
//             @media (max-width: 480px) {
//                 h3 {
//                     font-size: 1.2rem;
//                 }

//                 p.job-description {
//                     font-size: 0.95rem;
//                     line-height: 1.5rem;
//                     padding: 5px 3% 1%;
//                 }
//                 p.job-description.list-bottom {
//                     padding: 5px 3%;
//                 }
//             }

//         `}</style>
//         </Layout>
// );

export default Jobs;