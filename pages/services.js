import Layout from '../components/Layout.js';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

class ApplyButton extends React.Component {

    onClickApply(id, e) {
        this.props.check(id);
    }

    render(id=this.props.id) {
        return (
            <div>
                <button onClick={(e) => this.onClickApply(id, e)}>Inquire</button>
                <style jsx>{`
                    button {
                        // border: 2px solid black;
                        border: 2px solid blueviolet;
                        // background-color: transparent;
                        background-color: blueviolet;
                        // color: black;
                        color: #DDD;
                        padding: 12px 28px;
                        border-radius: 4px;
                        margin-top: 2px;
                    }
                    button:hover {
                        color: white;
                        // background-color: rgba(100, 0, 121, 0.9);
                        // border: 2px solid rgba(100, 0, 121, 0.9);
                        background-color: indigo;
                        border: 2px solid indigo;
                    }

                    @media (max-width: 480px) {
                        button {
                            padding: 12px 28px;
                            border-radius: 0 0 4px 4px;
                            border: 2px solid rgb(175,110,235);
                            background-color: rgb(175,110,235);
                            margin: 0;
                            width: 100%;
                            color: white;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

class Services extends React.Component {
    
    constructor(props) {
        super(props);
        this.formOpenedRef = React.createRef();
        this.state = {
            radioChecked: [false, false, false],
            formLoaded: false,
            form: {
                email: '',
                name: '',
                pi: '',
                department: '',
                institution: '',
                project: ''
            },
            formErrors: {
                email: '', name: '', pi: '', department: '', institution: '', project: ''
            },
            fieldStatus: {
                emailValid: false, nameValid: false, piValid: false, departmentValid: false, institutionValid: false, projectValid: false
            },
            reCaptchaChecked: false,
            allFormFieldsValid: false
        };
        this.check = this.check.bind(this);
        // this.scroll = this.scroll.bind(this);
        
    }

    handleReturn(e) {
        if (e && e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    }

    handleUserInput(e) {
        const fieldname = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [fieldname]: value
            }
            }), 
            () => { this.validateField(fieldname, value)}
        );
        // console.log('current form value is: ', this.state.form);
    }

    validateField(fieldname, value) {
        let validationErrors = this.state.formErrors;
        let validationStatus = this.state.fieldStatus;

        switch(fieldname) {
            case 'name':
                validationStatus.nameValid = value.length > 0 ? true : false;
                validationErrors.name = validationStatus.nameValid ? '' : 'name is required';
                break;
            case 'email':
                validationStatus.emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                validationErrors.email = validationStatus.emailValid ? '' : 'email format invalid';
                break;
            case 'institution':
                validationStatus.institutionValid = value.length > 0 ? true : false;
                validationErrors.institution = validationStatus.institutionValid ? '' : 'institution is required';
                break;
            default:
                validationStatus.piValid = true;
                validationStatus.departmentValid = true;
                validationStatus.projectValid = true;
                break;
        }
        this.setState({formErrors: validationErrors,
                       fieldStatus: validationStatus 
                    }, this.validateForm);
    }

    validateForm() {
        this.setState({allFormFieldsValid: this.state.fieldStatus.nameValid &&
                                        this.state.fieldStatus.emailValid &&
                                        this.state.fieldStatus.piValid &&
                                        this.state.fieldStatus.departmentValid &&
                                        this.state.fieldStatus.institutionValid &&
                                        this.state.fieldStatus.projectValid &&
                                        this.state.reCaptchaChecked
                      });
        // console.log('field status is...', this.state.fieldStatus);
        // console.log('form validation status is...', this.state.allFormFieldsValid);
    }

    errorClass(error) {
        return(error.length === 0 ? '': 'error-field');
    }

    check(id) {
        if (id === 1) {
            this.setState(state => ({
                radioChecked: [true, false, false],
                formLoaded: true
            }));
        } else if (id === 2) {
            this.setState(state => ({
                radioChecked: [false, true, false],
                formLoaded: true
            }));
        } else if (id === 3) {
            this.setState(state => ({
                radioChecked: [false, false, true],
                formLoaded: true
            }));
        }
        // this.formOpenedRef.current.scrollIntoView({ behavior: 'smooth' });
        // this.scroll();
    }

    scroll() {
        this.formOpenedRef.current.scrollIntoView({ behavior: "smooth" });
        // console.log('scroll ran! formLoaded Status - ', this.state.formLoaded);

    }

    componentDidUpdate() {
        if (this.state.formLoaded) {
            // console.log('inside comp did update - form is loaded');
            this.scroll();
        }
    }

    onReCaptchaCheck(value) {
        if (!this.state.reCaptchaChecked) {
            this.setState({
                reCaptchaChecked: true,
                reCaptchValue: value
            }, this.validateForm);
            console.log('state: ', this.state)
        }
        
    }

    render() {
        
        return (
            <Layout>
              <section className="sciOps-overview">
                  <div className="container">
                    <img className="overview-image A" src="/static/images/form-imageA-temp.svg" alt="illustration of user looking at plan options" />
                    {/* <img className="overview-image B" src="/static/images/form-imageB-temp.svg" alt="illustration of users looking at plan options" /> */}
                    <div className="overview-cta-area">  
                      <p className="overview-text">
                        The <b>DataJoint SciOps</b> service provides a comprehensive approach to organize your team around data analysis workflows—tested in many successful team projects 
                        in neuroscience and machine learning research. The service uses the open-source DataJoint framework for integrating diverse data collection and 
                        analysis tools into collaborative data workflows.
                      </p>
                      <div className="button-wrapper">
                        <div className="left-butt"></div>
                        <button className="show-form-button">Inquire about SciOps</button>
                        <div className="right-butt"></div>
                      </div>
                    </div>
                  </div>
              </section>
              <section className="sciOps-detail">
                  <div className="container">
                    <p className="detail-intro">DataJoint SciOps includes four service components:</p>
                    <div className="service-options">
                      <div className="service-container">
                        <div className="panel-head">
                          <img className="service-icon" src="/static/images/sciopIcon1.svg" />
                          <span className="service-name">Data Science Planning</span>
                          <span className="arrow up hide">&#x2191</span><span className="arrow down">&#x2193</span>
                        </div>
                        <div className="panel-content">
                          <ul className="service-list">
                            <li className="service-item">Project proposals, budgeting, and management</li>
                            <li className="service-item">Computing resource management</li>
                            <li className="service-item">Code management and data provenance</li>
                            <li className="service-item">Data protection and sharing</li>
                            <li className="service-item">Training programs</li>
                          </ul>
                        </div>
                      </div>
                      <div className="service-container">
                        <div className="panel-head">
                          <img className="service-icon" src="/static/images/sciopIcon2.svg" />
                          <span className="service-name">Workflow Definition</span>
                          <span className="arrow up hide">&#x2191</span><span className="arrow down">&#x2193</span>
                        </div>
                        <div className="panel-content">
                          <ul className="service-list">
                            <li className="service-item">Define data entry, acquisition, and formats</li>
                            <li className="service-item">Automate data analysis</li>
                            <li className="service-item">Begin with standard solutions, then customize and extend</li>
                          </ul>
                        </div>
                      </div>
                      <div className="service-container">
                        <div className="panel-head">
                          <img className="service-icon" src="/static/images/sciopIcon3.svg" />
                          <span className="service-name">Workflow Hosting and Operation</span>
                          <span className="arrow up hide">&#x2191</span><span className="arrow down">&#x2193</span>
                        </div>
                        <div className="panel-content">
                          <ul className="service-list">
                            <li className="service-item">Configure and monitor computing infrastructure</li>
                            <li className="service-item">Available full-service hosting and operation by our team</li>
                            <li className="service-item">Flexible queries and export of processed data</li>
                            <li className="service-item">Online computing environment and website for visualization and statistics</li>
                            <li className="service-item">Change management: upgrades and data migrations</li>
                            <li className="service-item">Monitoring, notifications, and issue resolution</li>
                          </ul>
                        </div>
                      </div>
                      <div className="service-container">
                        <div className="panel-head">
                          <img className="service-icon" src="/static/images/sciopIcon4.svg" />
                          <span className="service-name">Collaborate and Publish</span>
                          <span className="arrow up hide">&#x2191</span><span className="arrow down">&#x2193</span>
                        </div>
                        <div className="panel-content">
                          <ul className="service-list">
                            <li className="service-item">Grant access to collaborators</li>
                            <li className="service-item">Data export, documentations, and packaging</li>
                            <li className="service-item">Data licensing, citation, and submission to publishers, archives, and catalogs</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                        <div className="servicePanel">
                            <h4 className="servicePanelTitle">Basic Support</h4>
                            <div className="servicePanelText">
                                <p>Basic Support is a subscription service offered to qualified research groups who use DataJoint 
                                    and require occasional or semi-regular support and assistance.</p>
                                
                                <ul>
                                    <li>Includes a free online <b>"Interactive Course for DataJoint  Practitioners"</b> (10 seats).</li>
                                    <li>Access to on-demand, targeted training workshops for novice, intermediate, or advanced practitioners:</li>
                                    <ul>
                                        <li>On-site workshops: Each day includes six hours of instruction and interactive hands-on tutorials with the rest of the time 
                                            for questions and discussion. 
                                            Limit 15 students/instructor.</li>
                                        <li>Remote interactive workshops: 3-hour block (10 students)</li>
                                    </ul>
                                    <li>Access to ticket-based priority support:</li>
                                    <ul>
                                        <li>Assistance with pipeline design and execution</li>
                                        <li>Assistance with local IT and database administration</li>
                                        <li>Administration of cloud storage and servers</li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="servicePanelFooter">
                                <ApplyButton id="1" check={() => this.check(1)} />
                            </div>
                            
                        </div>
                        <div className="servicePanel">
                            <h4 className="servicePanelTitle">Managed Database Hosting (Beta)</h4>
                            <div className="servicePanelText">
                                <p><b>DataJoint Neuro</b> offers managed DataJoint-optimized cloud hosting. 
                                This service is an option offered to qualified groups with a Basic Support subscription.</p>
                                <p>Features</p>
                                <ul>
                                    <li>DataJoint-optimized relational Database Server + object storage</li>
                                    <li>up to 1 TiB relational storage + 10 TiB object storage</li>
                                    <li>unlimited transfers in and up to 2 TiB / month transfers out</li>
                                    <li>unlimited transfers to AWS compute</li>
                                    <li>Secure connection</li>
                                    <li>High performance and uptime </li>
                                    <li>Unlimited data pipelines and schemas</li>
                                        
                                </ul>
                                <p>Support</p>
                                <ul>
                                    <li>User access management (10 users)</li>
                                    <li>Snapshot-based backups</li>
                                    <li>Availability and performance monitoring</li>
                                </ul>
                            </div>
                            <div className="servicePanelFooter">
                                <ApplyButton id="2" check={() => this.check(2)} />
                            </div>
                            
                        </div>
                        <div className="servicePanel">
                            <h4 className="servicePanelTitle">Custom Services and Development</h4>
                            <div className="servicePanelText">
                                <p>For more demanding projects, DataJoint Neuro offers development services to neuroscience projects under 
                                    direct custom contracts. These projects commonly include: </p>
                                <ul>
                                    <li>Design of data science plans and data sharing plans for neuroscience projects</li>
                                    <li>Integration with instrumentation and lab information management systems</li>
                                    <li>Joint pipeline development</li>
                                    <li>Web interfaces </li>
                                    <li>Data export, migration, sharing, and publishing</li>
                                </ul>
                            </div>
                            <div className="servicePanelFooter">
                                <ApplyButton id="3" check={() => this.check(3)} />
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className={this.state.formLoaded ? 'animated fadeIn formContainer' : 'formContainer'} style={this.state.formLoaded ? { display: 'block', opacity: '1' } : { display: 'none', opacity: '0' }}>
                        <form action="https://datajoint.io/djneuro-service-inquiry" method="POST">
                        {/* <form action="http://localhost:3456/djneuro-service-inquiry" method="POST"> */}
                            <div className="formgroup">
                                <label>Name *</label>
                                <input className={`inputField ${this.errorClass(this.state.formErrors.name)}`} type="text" name="name" placeholder="Contact Person" 
                                    value={this.state.form.name} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)}/>
                                <p className="error-message">{this.state.formErrors.name}</p>
                            </div>
                            <div className="formgroup">
                                <label>Email *</label>
                                <input className={`inputField ${this.errorClass(this.state.formErrors.email)}`} type="email" name="email" placeholder="Email" 
                                    value={this.state.form.email} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)}/>
                                <p className="error-message">{this.state.formErrors.email}</p>
                            </div>
                            <div className="formgroup">
                                <label>Institution *</label>
                                <input className={`inputField ${this.errorClass(this.state.formErrors.institution)}`} type="text" name="institution" placeholder="Institution/Organization" 
                                    value={this.state.form.institution} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)}/>
                                <p className="error-message">{this.state.formErrors.institution}</p>
                            </div>
                            <div className="formgroup">
                                <label htmlFor="department">Department</label>
                                <input className="inputField" type="text" name="department" placeholder="Department"
                                    value={this.state.form.department} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)} />
                            </div>
                            <div className="formgroup">
                                <label>Principal Investigator</label>
                                <input className="inputField" type="text" name="pi" placeholder="Principal Investigator"
                                    value={this.state.form.pi} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)} />
                            </div>
                            <div className="formgroup">
                                <label>Project Description</label>
                                <textarea className="descriptionField" type="text" name="project" placeholder="Project Description" 
                                    value={this.state.form.project} onChange={(e) => this.handleUserInput(e)}></textarea>
                            </div>
                            <div className="formgroup radioFieldContainer">
                                <div>
                                    <input className="radioField" type="radio" checked={this.state.radioChecked[0]} onChange={() => this.check(1)} name="subscription_type" value="basic" /> 
                                    <label>Basic Support</label>
                                </div>
                                <div>
                                    <input className="radioField" type="radio" checked={this.state.radioChecked[1]} onChange={() => this.check(2)} name="subscription_type" value="managed db hosting" /> 
                                    <label>Managed Database Hosting (beta)</label>
                                </div>
                                <div>
                                    <input className="radioField" type="radio" checked={this.state.radioChecked[2]} onChange={() => this.check(3)} name="subscription_type" value="custom service" /> 
                                    <label>Custom Services and Development</label>
                                </div>

                            </div>
                            
                            
                            <div style={{ float: "left", clear: "both" }} ref={this.formOpenedRef}></div>
                            
                            {/* <ReCAPTCHA style={{ marginLeft: "18%" }} sitekey="6LcsDe8UAAAAAHm_EupFZJLqKItXdLmsukxFbED5" onChange={(e) => this.onReCaptchaCheck(e)}/>  for - testing */}
                            <ReCAPTCHA style={{ marginLeft: "18%" }} sitekey="6LehZO4UAAAAAAAyUzEujxHSIEz7Fn_noCeEjdvI" onChange={(e) => this.onReCaptchaCheck(e)}/>
                            <button className="formButton" type="submit" value="Send" disabled={!this.state.allFormFieldsValid}>Send</button>
                            
                            <p className="formHelpText">* required field</p>
                            
                            
                        </form>
             
                        {/* <form>
                            <div>
                                <p>Apologies - the form is temporarily unavailable. Please reach out to us directly to <a href="mailto:info@vathes.com">info@vathes.com</a></p>
                            </div>
                            <div style={{ float: "left", clear: "both" }} ref={this.formOpenedRef}></div>
                        </form> */}
                    </div>

                </section>

                <style jsx>{`
                    section.sciOps-overview,
                    section.sciOps-detail {
                      position: relative;
                      width: 100%;
                    }

                    section.sciOps-overview .container,
                    section.sciOps-detail .container {
                      position: relative;
                      width: 80%;
                      margin: 0 auto;
                    }

                    section.sciOps-overview .container {
                      padding: 120px 0 5%;
                      display: flex;
                      justify-content: space-around;
                    }

                    .sciOps-overview img.overview-image {
                      width: 45%;
                    }
                    .sciOps-overview .overview-cta-area {
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      width: 40%;
                    }

                    .overview-cta-area .button-wrapper {
                      height: 60px;
                      padding: 0;
                      position: relative;
                      display: flex;
                      z-index: 10;
                    }

                    .overview-cta-area .button-wrapper .left-butt,
                    .overview-cta-area .button-wrapper .right-butt {
                      position: relative;
                      height: 100%;
                      background-color: #4977ED;
                      width: 80px;
                      z-index: 10;
                    }
                    .overview-cta-area .button-wrapper .left-butt {
                      border-radius: 48% 0 0 48%;
                      transform: translateX(41px);
                    }
                    .overview-cta-area .button-wrapper .right-butt {
                      border-radius: 0 48% 48% 0;
                      transform: translateX(-41px);
                    }

                    .overview-cta-area button.show-form-button {
                      padding: 0;
                      border: none;
                      background-color: #4977ED;
                      color: #FCFCFC;
                      font-size: 1.2rem;
                      white-space: nowrap;
                      font-weight: 600;
                      z-index: 20;
                    }

                    .construction {
                        height: 500px;
                    }
                    .construction h3 {
                        padding-top: 80px;
                    }

                    h3 {
                        margin: 0;
                    }

                    a {
                        display: block;
                        margin-top: 13px;
                    }


                    .servicesSection {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        margin-top: 3%;
                        padding-bottom: 8%;
                    }

                    .servicePanel {
                        display: none;
                        width: 31%;
                        margin: 0 0.3%;
                        list-style-type: disc;
                        border: 1.5px solid blueviolet;
                        border-radius: 5px;
                        background-color: rgba(255, 255, 255, 0.82);
                        position: relative;
                    }

                    .servicePanelTitle {
                        margin: 0;
                        // color: black;
                        color: white;
                        // background-color: #DDD;
                        background-color: blueviolet;
                        padding-top: 15px;
                        font-weight: 400;
                        height: 2.0em;
                        border-bottom: #DDD;
                    }

                    .servicePanelText {
                        padding: 10px 15px 18%;
                        text-align: left;
                        line-height: 1.2em;
                        font-size: 90%;
                        font-weight: 200;
                        height: 380px;
                        overflow: scroll;
                        position: relative;
                    }

                    .servicePanelText li {
                        margin-top: 12px;
                    }
                    .servicePanelText li:first-of-type {
                        margin-top: 4px;
                    }

                    .servicePanelFooter {
                        box-sizing: border-box;
                        position: absolute;
                        bottom: 0;
                        text-align: center;
                        padding: 12px 0;
                        // background-color: rgba(249, 244, 253, 0.8); //rgb(240, 240, 240);
                        background: linear-gradient(rgba(249, 244, 253, 0.8), rgba(249, 244, 253, 0.96), rgb(240, 240, 240));
                        // background-color: #f3e9fc;
                        border-top: 0.5px solid #c495f0;
                        border-radius: 0 0 5px 5px;
                        width: 100%;
                    }
                    

                    
                    div.formContainer {
                        margin: -6% 10% 0;
                        padding: 2% 2% 8%;
                        // background: rgba(0, 0, 0, 0.4);
                        background: rgba(255, 255, 255, 0.9);
                    }

                    form {
                        margin-top: 0;
                        padding: 3%;
                        border: solid 0.5px blueviolet;
                    }

                    div.formgroup {
                        display: block;
                        text-align: left;
                        margin-bottom: 2%;
                    }

                    .formgroup label {
                        margin-right: 14px;
                        font-size: 90%;
                        vertical-align: top;
                        min-width: 150px;
                        text-align: right;
                        display: inline-block;
                        padding-top: 10px;
                    }

                    .formgroup input.inputField {
                        padding-left: 10px;
                        border: 0.5px solid darkgrey;
                        border-radius: 4px;
                        height: 30px;
                        width: 400px;
                    }

                    .formgroup textarea.descriptionField {
                        width: 400px;
                        height: 150px;
                        padding-left: 10px;
                        padding-top: 10px;
                        border: 0.5px solid darkgrey;
                        border-radius: 4px;
                    }

                    .radioFieldContainer,
                    .radioFieldContainer div {
                        display: inline-flex;
                        flex-direction: row;
                    }
                    .radioFieldContainer input.radioField {
                        margin-left: 15px;
                        margin-top: 0px;
                    }

                    .radioFieldContainer label {
                            margin-left: 0px;
                            font-size: 90%;
                            vertical-align: none;
                            text-align: left;
                            display: inline;
                            padding-top: 1.5px;
                        }

                    .formButton {
                        border: 2px solid blueviolet;
                        background-color: transparent;
                        color: bluevioet;
                        padding: 12px 28px;
                        border-radius: 4px;
                    }
                    .formButton:hover {
                        border: 2px solid blueviolet;
                        background-color: blueviolet;
                        color: #DDD;
                    }
                    .formButton:disabled {
                        border: 2px solid gray;
                        background-color: gray;
                        color: #DDD;
                    }


                    .error-field {
                        background-color: #ffcccc;
                    }
                    .error-message {
                        font-size: 70%;
                        color: red;
                        margin-left: 173px;
                        margin-top: 3px;
                    }
                    p.formHelpText {
                        font-size: 70%;
                        margin-top: 3px;
                    }

                    

                    @media (max-width: 1024px) {
                        .servicePanelTitle {
                            margin: 0;
                            padding: 15px 15px 12px 15px;
                            font-weight: 400;
                            font-size: 92%;
                            height: 1.3em;
                        }
                        .servicePanelText {
                            padding: 5px 12px 20%;
                            line-height: 1.19em;
                            font-size: 90%;
                            font-weight: 200;
                            height: 380px;
                        }
                        .servicePanelText li {
                            margin-top: 9px;
                        }

                        div.formContainer {
                            margin: -6% 7% 0;
                            padding: 2% 2% 8%;
                        }
                        
                        .radioFieldContainer input.radioField {
                            margin-left: 10px;
                        }
                        .radioFieldContainer label {
                            // margin-left: -5px;
                            margin-right: 2px;
                            font-size: 85%;
                        }
                        
                    }
                    @media (max-width: 768px) {
                        .servicesSection {
                            display: flex;
                            flex-direction: column;
                            margin-left: 2%;
                            margin-top: 3%;
                            padding-bottom: 8%;
                        }
                        
                        .servicePanel {
                            width: 95%;
                            margin: 0 0.3% 2%;
                            border-radius: 5px;
                            position: relative;
                        }

                        .servicePanelText {
                            padding: 10px 15px 14%;
                            height: 100%;
                        }

                        .formgroup label {
                            text-align: left;
                            margin-bottom: 2px;
                        }

                        .formgroup input.inputField {
                            padding-left: 3%;
                            border-radius: 3px;
                            height: 30px;
                            width: 92%;
                        }

                        .formgroup textarea.descriptionField {
                            width: 92%;
                            height: 120px;
                            padding-left: 3%;
                            padding-top: 10px;
                            border-radius: 3px;
                        }
                        }
                        
                    }
                    @media (max-width: 480px) {
                        .servicePanelText {
                            padding: 10px 15px 18%;
                            max-height: 480px;
                            overflow: scroll;
                        }
                        .servicePanelFooter {
                            bottom: 0;
                            padding: 0;
                            border-top: 0.5px solid rgb(175,110,235);
                            border-radius: 0 0 5px 5px;
                            width: 100%;
                        }
                        div.formContainer {
                            margin: -6% 2% 0;
                            padding: 2% 2% 11%;
                        }
                    }

                `}</style>
            </Layout>
        );
    }

}

export default Services;