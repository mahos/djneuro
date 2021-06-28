import Layout from '../components/Layout.js';

const Team = () => (
    <Layout>
        <div className="section-wrapper">
        <section className="team-group">
          <img className="group-photo" src="/static/images/team/group2.jpg" />
        </section>
        <section className="team-titled">
            <div className="container">
                <h4 className="team-title section-title">Management Team</h4>
                <div className="grid-area">
                    <div className="member-card animated fadeInLeft" >
                        <div className="member-sns">
                          <a href="#"><img src="/static/images/icons/ldn-individual.svg" /></a>
                          <a href="#"><img src="/static/images/icons/github-individual.svg" /></a>
                        </div>
                        <img className="member-photo" src="/static/images/team/dimitriyatsenko.jpg" />
                        <div className="member-text">
                            <p className="member-name">Dimitri Yatsenko, PhD</p>
                            <p className="member-role">CEO, Co-Founder</p>
                        </div>
                    </div>
                    <div className="member-card animated fadeInLeft">
                        <img className="member-photo" src="/static/images/team/jasonkirkpatrick.jpg" />
                        <div className="member-text">
                            <p className="member-name">Jason Kirkpatrick</p>
                            <p className="member-role">COO</p>
                        </div>
                    </div>
                    <div className="member-card animated fadeInRight">
                        <img className="member-photo" src="/static/images/team/camilalopez.jpg" />
                        <div className="member-text">
                            <p className="member-name">Camila Lopez</p>
                            <p className="member-role">Secretary, Company Manager</p>
                        </div>
                    </div>
                    <div className="member-card animated fadeInLeft">
                        <div className="member-sns">
                          <a href="#"><img src="/static/images/icons/ldn-individual.svg" /></a>
                          <a href="#"><img src="/static/images/icons/github-individual.svg" /></a>
                        </div>
                        <img className="member-photo" src="/static/images/team/christurner.jpg" />
                        
                        <div className="member-text">
                            <p className="member-name">Chris Turner</p>
                            <p className="member-role">Data Systems Engineering Manager</p>
                        </div>
                    </div>
                    <div className="member-card animated fadeInRight">
                        <img className="member-photo" src="/static/images/team/shanshen.jpg" />
                        <div className="member-text">
                            <p className="member-name">Shan Shen, PhD</p>
                            <p className="member-role">Neuroscience Project Manager</p>
                        </div>
                    </div>
                    <div className="member-card animated fadeInRight">
                        <img className="member-photo" src="/static/images/team/thinhnguyen.jpg" />
                        <div className="member-text">
                            <p className="member-name">Thinh Nguyen, PhD</p>
                            <p className="member-role">Neuroscience Project Manager</p>
                        </div>
                    </div>
                    <div className="member-card animated fadeInLeft">
                        <img className="member-photo" src="/static/images/team/raphaelguzman.jpg" />
                        <div className="member-text">
                            <p className="member-name">Raphael Guzman</p>
                            <p className="member-role">Software Engineering Manager</p>
                        </div>
                    </div>
                </div>
                
                <h4 className="team-title section-title">Scientific Advisors</h4>
                <div className="grid-area">
                    <div className="member-card animated fadeInRight">
                        <div className="member-sns">
                          <a href="#"><img src="/static/images/icons/tw-individual.svg" /></a>
                          <a href="#"><img src="/static/images/icons/ldn-individual.svg" /></a>
                          <a href="#"><img src="/static/images/icons/github-individual.svg" /></a>
                        </div>
                        <img className="member-photo" src="/static/images/team/edgarwalker.jpg" />
                        <div className="member-text">
                            <p className="member-name">Edgar Y. Walker, PhD</p>
                            <p className="member-role">Co-Founder</p>
                        </div>
                    </div>
                    <div className="member-card animated fadeInLeft">
                        <img className="member-photo" src="/static/images/team/jakereimer.jpg" />
                        <div className="member-text">
                            <p className="member-name">Jake Reimer, PhD</p>
                            <p className="member-role">Co-Founder</p>
                        </div>
                    </div>
                    <div className="member-card animated fadeInLeft">
                        <img className="member-photo" src="/static/images/team/andreastolias.jpg" />
                        <div className="member-text">
                            <p className="member-name">Andreas Tolias, PhD</p>
                            <p className="member-role">Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          </div>
        <style jsx>{`
            .section-wrapper {
              background-image: url('/static/images/title-team.svg');
              background-attachment: fixed;
              background-position: 94.5% 12%;
              background-repeat: no-repeat;
              background-size: 40%;
            }
        
            section.team-group,
            section.team-titled {
              width: 100%;
              position: relative;
            }

            section.team-titled .section-title {
              font-weight: 600;
              font-style: italic;
              color: #0F3595;
              margin: 0;
            }

            .team-group img.group-photo {
              width: 80%;
              margin: 0 auto;
              display: flex;
              padding: 15% 0 5%;
            }

            .team-titled .container {
              width: 80%;
              margin: 0 auto;
            }

            .team-titled .grid-area {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-gap: 8px;
              margin-top: 24px;
              padding-bottom: 64px;
            }

            .member-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              border: 1px solid #d3d3d320;
              border-radius: 4px;
              padding: 24px 24px 24px 20px;
              background-color: #FCFCFC;
              box-shadow: lightgrey 1px 2px 2px;
            }

            .member-card img.member-photo {
              width: 100px;
              border-radius: 50%;
              border: 1px solid #bdbdbd;
            }

            .member-text {
              text-align: center;
            }

            .member-text .member-name {
              margin: 8px 0;
            }

            .member-text .member-role {
              margin: 4px 0;
              font-size: 0.8rem;
              color: slategrey;
              line-height: 1rem;
            }

            .member-sns {
              position: absolute;
              right: 0;
              top: 16px;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
              padding: 8px;
              width: 16px;
              background-image: linear-gradient(to bottom, #1A1A1A, #0F3595 70%);
            }

            .member-sns a {
              line-height: 1rem;
              margin-top: 4px;
            }

            .member-sns a img {
              width: 100%;
              
            }


            @media (min-width: 769px) {
                
            }
            
            @media (max-width: 1024px) {
                
            }
            @media (max-width: 768px) {
                
            }
            @media (max-width: 480px) {
                
            }
        `}</style>
    </Layout>
);

export default Team;