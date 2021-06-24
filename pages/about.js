import Layout from '../components/Layout.js';

const background0 = {
    backgroundImage: 'url("/static/images/artwork/above_white_matter.jpg")',
    backgroundAttachment: 'fixed'
    
};

const background1 = {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    padding: '60px 40px',
    color: '#E1EBF7',
    position: 'relative',
    zIndex: '10'
};

const djWire = {
    width: '380px',
    position: 'absolute',
    zIndex: '5',
    left: '-55px',
    bottom: '2px',
    opacity: '0.3'
}

const background2 = {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: '60px 40px',
    color: '#E1EBF7',
    position: 'relative'
};

const sphereWire = {
    width: '540px',
    position: 'absolute',
    zIndex: '5',
    right: '0',
    bottom: '0',
    opacity: '0.4'
}

const background3 = {
    backgroundImage: 'url("/static/images/artwork/pipette.png")',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: '60px 40px',
    backgroundPosition: 'bottom',
    color: '#E1EBF7'
};

const background4 = {
    // backgroundImage: 'linear-gradient(white, white, white,  #E6FF42)',
    backgroundColor: '#E1EBF7',
    padding: '60px 40px',
    color: 'black',
    position: 'relative'
};

const background5 = {
    // background: 'linear-gradient(#E6FF42, white, white, white)',
    backgroundImage: 'url("/static/images/artwork/watermelon.png")',
    padding: '60px 40px',
    color: 'white',
    position: 'relative',

};

const background6 = {
  backgroundColor: '#001226',
  padding: '60px 40px',
  color: 'white',
  position: 'relative'
};

const djNeuroLogoColor = {
    transform: 'rotate(10deg)',
    width: '220px',
    position: 'absolute',
    zIndex: '5',
    right: '15%',
    bottom: '24%',
    opacity: '0.2'
}




const About = () => (
    <Layout>
        <div style={background0}>
            <div style={background1}>
                <img style={djWire} src="/static/images/icons/member-gh.svg" className="animated pulse"/>
                <h4>The DataJoint experts</h4>
                <p>Our team is the principal developer of <a href="https://datajoint.io">DataJoint®</a> — a free, open-source framework 
                for shared scientific databases and computational data pipelines programmed and accessed directly from MATLAB and Python. </p>
            </div>
            <div style={background2}>
                <img style={sphereWire} src="/static/images/icons/member-gh.svg" />
                <h4>We work with top neuroscience labs worldwide</h4>
                <p>We help neuroscientists use DataJoint to accelerate their research.  DataJoint Neuro provides solutions for project planning, 
                    training, data infrastructure, as well as tools and resources for maximizing the productivity of individual labs and large 
                    consortia. We lead in providing comprehensive solutions for custom scientific data pipelines in neuroscience.</p>
            </div>
        </div>
        <div style={background3}>
            <h4>Committed to data integrity and reproducibility</h4>
            <p>DataJoint Neuro works closely with the <a href="https://www.imagwiki.nibib.nih.gov/working-groups/other-nih-brain-initiative-u19-data-science-consortium">NIH 
            BRAIN Initiative U19 Data Science Consortium</a> and <a href="https://www.nwb.org/">Neurodata Without Borders</a> to ensure 
            smooth integration with the NIH BRAIN Initiative Informatics infrastructure.</p> 
            {/* DataJoint is endorsed as a neuroinformatics data 
            standard by the <a href="https://www.incf.org/">International Neuroinformatics Coordinating Facility</a> (INCF). */}
        </div >
        <div style={background4}>
            <img style={djNeuroLogoColor} src="/static/images/logo/color_djneuro.png" className="animated heartBeat"/>
            <h4>Bringing scientific rigor to AI research</h4>
            <p>DataJoint has also gained popularity in AI research as a data framework for model selection and parameter optimization. DataJoint 
                Neuro offers expertise and solutions to support AI research.</p>
        </div >
        <div style={background5}>
            <h4>Lab grown</h4>
            <p>DataJoint Neuro is run by Vathes LLC based in Houston, Texas. Vathes LLC spun off from the Lab of Andreas Tolias at Baylor
                College of Medicine in 2017 after receiving initial SBIR funding from DARPA.</p> 
                {/* and  is a BCM family company */}
        </div >
        <div style={background6}>
            <h4>Policy</h4>
            <p>Please click on the policy to download. 
            <ul>
              <li><a href="/static/documents/FCOI POLICY - DataJoint Financial Conflict of Interest Policy - June 2021.pdf" download>DataJoint Financial Conflict of Interest Policy</a></li> 
            </ul>
            </p>
        </div >
        <style jsx>{`
            a {
                text-decoration: none;
                color: #CAE7FF; // light bluish grey
            }

            a:hover {
                color: #41B0F7 ; 
            }

            div {
                background-repeat: no-repeat;
                background-size: cover;
                color: #E1EBF7;  // blueish muted white
            }

            h4 {
                margin-top: 10%;
                font-size: 24px;
            }

            p {
                text-align: left;
                padding: 10px 15% 10%;
                font-size: 18px;
                line-height: 1.9rem;
            }

            @media (max-width: 1440px) {
                
            }
            @media (max-width: 768px) {
                h4 {
                    font-size: 1.3rem;
                }

                p {
                    font-size: 1rem;
                    line-height: 1.9rem;
                }
            }
            @media (max-width: 480px) {
                h4 {
                    font-size: 1.2rem;
                }

                p {
                    font-size: 0.95rem;
                    line-height: 1.5rem;
                }
            }

        `}</style>
        </Layout>
);

export default About;