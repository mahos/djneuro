import Layout from '../components/Layout.js';


const linesCenter = {
    height: '480px',
    borderRadius: '0',
    border: 'none',
    marginTop: '60px',
    transform: 'scale(2.2, 1.35) translate(-23%,0)',
    position: 'absolute'
}

const linesSide = {
    borderRadius: '0',
    border: 'none',
    marginTop: '60px',
    transform: 'scale(3.3, 1.68) translate(-127%,19%)',
    zIndex: '10',
    position: 'absolute'
}

const linesSide2 = {
    borderRadius: '0',
    border: 'none',
    marginTop: '60px',
    transform: 'scale(3.3, 1.68) translate(96%,19%) rotate(180deg)',
    zIndex: '10',
    position: 'absolute'
}

const Team = () => (
    <Layout>
        <div className="teamPageContainer">
            <div className="teamHead">
                <div className="teamHeadBackdrop">
                    <h4>Our Team</h4>
                    <p className="teamDescription">Our team comprises systems neuroscientists, data scientists, and software engineers with expertise in
                                systems neuroscience, data acquisition and analysis, databases, machine learning, and cloud computing.</p> 
                </div>
            </div>
            <div className="memberBackground">
                {/* <img style={linesCenter} src="./static/images/artwork/networkLines.svg" /> */}
                {/* <img style={linesSide} src="./static/images/artwork/networkLinesWide.svg" /> */}
                {/* <img style={linesSide2} src="./static/images/artwork/networkLinesWide.svg" /> */}
                <h4 className="team-title">Management Team</h4>
                <div className="row">
                    <div className="tabcard to-left animated fadeInLeft" >
                        <div className="memberText">
                            <p className="memberName">Dimitri Yatsenko, PhD</p>
                            <p className="memberRole">CEO, Co-Founder</p>
                        </div>
                        <img style={{ float: 'right' }} src="/static/images/team/dimitriyatsenko.jpg" />
                    </div>
                    <div className="tabcard to-right animated fadeInRight">
                        <div className="memberText2">
                            <p className="memberName">Shan Shen, PhD</p>
                            <p className="memberRole">Neuroscience Project Manager</p>
                        </div>
                        <img style={{ float: 'left' }} src="/static/images/team/shanshen.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="tabcard to-left animated fadeInRight">
                        <div className="memberText">
                            <p className="memberName">Thinh Nguyen, PhD</p>
                            <p className="memberRole">Neuroscience Project Manager</p>
                        </div>
                        <img style={{ float: 'right' }} src="/static/images/team/thinhnguyen.jpg" />
                    </div>
                    <div className="tabcard to-right animated fadeInLeft">
                        <div className="memberText2">
                            <p className="memberName">Chris Turner</p>
                            <p className="memberRole">Data Systems Engineering Manager</p>
                        </div>
                        <img style={{ float: 'left' }} src="/static/images/team/christurner.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="tabcard to-left animated fadeInLeft">
                        <div className="memberText">
                            <p className="memberName">Raphael Guzman</p>
                            <p className="memberRole">Software Engineering Manager</p>
                        </div>
                        <img style={{ float: 'right' }} src="/static/images/team/raphaelguzman.jpg" />
                    </div>
                    <div className="tabcard to-right animated fadeInRight">
                        <div className="memberText2">
                            <p className="memberName">Camila Lopez</p>
                            <p className="memberRole">Secretary, Company Manager</p>
                        </div>
                        <img style={{ float: 'left' }} src="/static/images/team/camilalopez.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="tabcard to-left animated fadeInLeft">
                        <div className="memberText">
                            <p className="memberName">Jason Kirkpatrick</p>
                            <p className="memberRole">COO</p>
                        </div>
                        <img style={{ float: 'right' }} src="/static/images/team/placeholder.png" />
                    </div>
                </div>
                
                <hr className="divider" />
                {/* <h4 className="team-title">Team</h4> */}
                <div className="row">
                    <div className="tabcard to-left animated fadeInLeft">
                        <div className="memberText">
                            <p className="memberName">Maho Sasaki</p>
                            <p className="memberRole">Front-end Web Developer</p>
                        </div>
                        <img style={{ float: 'right' }} src="/static/images/team/mahosasaki.jpg" />
                    </div>
                    <div className="tabcard to-right animated fadeInRight">
                        <div className="memberText2">
                            <p className="memberName">Kabilar Gunalan, MD/PhD</p>
                            <p className="memberRole">Data Scientist</p>
                        </div>
                        <img style={{ float: 'left' }} src="/static/images/team/kabilargunalan.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="tabcard to-left animated fadeInLeft">
                        <div className="memberText">
                            <p className="memberName">Daniel Sitonic</p>
                            <p className="memberRole">Software Engineer</p>
                        </div>
                        <img style={{ float: 'right' }} src="/static/images/team/danielsitonic.jpg" />
                    </div>
                    <div className="tabcard to-right animated fadeInRight">
                        <div className="memberText2">
                            <p className="memberName">David Godinez</p>
                            <p className="memberRole">Data Engineer</p>
                        </div>
                        <img style={{ float: 'left' }} src="/static/images/team/placeholder.png" />
                    </div>
                </div>
                <hr className="divider" />
                <h4 className="team-title">Scientific Advisors</h4>
                <div className="row">
                    <div className="tabcard to-left animated fadeInRight">
                        <div className="memberText">
                            <p className="memberName">Edgar Y. Walker, PhD</p>
                            <p className="memberRole">Co-Founder</p>
                        </div>
                        <img style={{float: 'right'}} src="/static/images/team/edgarwalker.jpg" />
                        
                    </div>
                    <div className="tabcard to-right animated fadeInLeft">
                        <div className="memberText2">
                            <p className="memberName">Jake Reimer, PhD</p>
                            <p className="memberRole">Co-Founder</p>
                        </div>
                        <img style={{ float: 'left' }} src="/static/images/team/jakereimer.jpg" />
                        
                    </div>
                </div>
                <div className="row">
                    <div className="tabcard to-left animated fadeInLeft">
                        <div className="memberText">
                            <p className="memberName">Andreas Tolias, PhD</p>
                            <p className="memberRole">Co-Founder</p>
                        </div>
                        <img style={{ float: 'right' }} src="/static/images/team/andreastolias.jpg" />
                        
                    </div>
                    {/* <div className="tabcard to-right animated fadeInRight">
                        <div className="memberText2">
                            <p className="memberName">Blank</p>
                            <p className="memberRole"></p>
                        </div>
                        <img style={{ float: 'left' }} src="/static/images/team/blank.jpg" />
                    </div> */}
                </div>
            </div>
        </div>
        <style jsx>{`
            .teamPageContainer {
                width: 100%;
            }
            .teamHead {
                background-color: rgba(0, 0, 0, 0.9);
                background-attachment: fixed;
                background-size: 180px;
                background-repeat: repeat;
                background-position: center;
                padding: 200px 300px 300px;
                color: #E1EBF7;
                position: relative;
                text-align: center;
            }
            .teamHeadBackdrop {
                background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85));
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                padding: 150px 200px 300px 200px;
                line-height: 1.8;
                font-size: 110%;
            }
            p.teamDescription {
                text-align: left;
            }
            .memberBackground {
                background-image: url("/static/images/artwork/LGN_injection.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: left;
                height: 100%;
                position: relative;
                padding-bottom: 10%;
            }

            .row {
                width: 100%;
                max-width: 1000px;
                display: inline-block;
            }

            h4.team-title {
              margin-top: 48px;
              font-size: 110%;
              color: #DDD;
            }

            hr.divider {
              border: 2px solid cyan;
              margin-top: 36px;
              width: 82%;
            }

            .tabcard {
                position: relative;
                width: 350px;
                height: 100px;
                border-radius: 50px;
                background-color: rgba(0, 0, 0, 0.5);    
                z-index: 100;
            }

            .to-right {
                float: right;
                margin: 30px 50px 0 50px;
            }

            .to-left {
                margin: 30px 50px 0;
                float: left;
            }

            img {
                width: 96px;
                border-radius: 50px;
                border: 2px solid cyan;
                transform: translateY(-85%);
            }

            .memberText {
                transform: translateX(-10%);
            }

            .memberText2 {
                transform: translateX(10%);
            }

            p {
                padding-top: 8px;
                color: white;
            }
            .memberRole {
                font-size: 75%;
                font-weight: 200;
                padding-top: 2px;
            }


            @media (min-width: 769px) {
                .memberBackground {
                    display: flex;
                    flex-direction: column;
                    align-items: center; 
                }
            }
            
            @media (max-width: 1024px) {
                .teamHead h4 {
                    margin-top: 0;
                }
                .teamHead {
                    padding: 150px 100px 250px;
                }
                .teamHead .teamHeadBackdrop {
                    padding: 100px 100px 250px;
                }

                .memberText2 {
                    width: 85%;
                    padding-left: 5%;
                    margin-right: 0;
                }
                .teamPageContainer {
                    width: 100%;
                }
                .to-left {
                    margin: 30px 15px 0;
                }
                .to-right {
                    margin: 30px 15px 0 15px;
                }
            }
            @media (max-width: 768px) {
                .teamHead {
                    padding: 150px 70px 250px;
                }
                .teamHead .teamHeadBackdrop {
                    padding: 100px 70px 250px;
                }
                .teamHead h4 {
                    font-size: 1.25rem;
                    margin-bottom: 0;
                }
                p.teamDescription {
                    font-size: 90%;
                }
                .memberBackground {
                    padding-bottom: 14%;
                }
            }
            @media (max-width: 480px) {
                .teamHead {
                    padding: 150px 70px 250px;
                }
                .teamHead .teamHeadBackdrop {
                    padding: 50px 70px 250px;
                }
                
                .memberBackground {
                    padding-bottom: 18%;
                }
                .tabcard {
                    max-width: 350px;
                    width: 95%;
                    height: 100px;
                    border-radius: 50px;
                    background-color: rgba(0, 0, 0, 0.5);    
                    z-index: 100;
                }
                .memberText2 {
                    width: 77%;
                    padding-left: 10%;
                    margin-right: 0;
                }
                .memberName {
                    // margin-right:
                }
                .memberRole {
                    // font-size: 75%;
                    // padding-top: 2px;
                }
                .to-left {
                    margin: 30px 0 0 0;
                }
                .to-right {
                    margin: 30px 0 0 0;
                }
            }
        `}</style>
    </Layout>
);

export default Team;