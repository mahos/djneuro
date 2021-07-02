import Layout from '../components/Layout.js';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

class Services extends React.Component {
    
    constructor(props) {
        super(props);
        this.formOpenedRef = React.createRef();
        this.state = {
            showServiceOption: [true, false, false, false],
            // radioChecked: [false, false, false],
            formLoaded: false,
            form: {
                email: '',
                name: '',
                department: '',
                institution: '',
                project: ''
            },
            formErrors: {
                email: '', name: '', department: '', institution: '', project: ''
            },
            fieldStatus: {
                emailValid: false, nameValid: false, piValid: false, departmentValid: false, institutionValid: false, projectValid: false
            },
            reCaptchaChecked: false,
            allFormFieldsValid: false
        };
        
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
                                        this.state.fieldStatus.departmentValid &&
                                        this.state.fieldStatus.institutionValid &&
                                        this.state.fieldStatus.projectValid 
                                        //&& this.state.reCaptchaChecked
                      });
        // console.log('field status is...', this.state.fieldStatus);
        // console.log('form validation status is...', this.state.allFormFieldsValid);
    }

    errorClass(error) {
        return(error.length === 0 ? '': 'error-field');
    }


    scroll() {
        this.formOpenedRef.current.scrollIntoView({ behavior: "smooth" });

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.formLoaded !== this.state.formLoaded && this.state.formLoaded) {
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
                      <div className="button-wrapper" onClick={() => this.setState({formLoaded: true})}>
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
                        <div className="panel-head" onClick={() => {this.setState({showServiceOption: [!this.state.showServiceOption[0],this.state.showServiceOption[1],this.state.showServiceOption[2],this.state.showServiceOption[3]]});}}>
                          <img className="service-icon" src="/static/images/sciopIcon1.svg" />
                          <span className="service-name">Data Science Planning</span>
                          <span className={this.state.showServiceOption[0] ? 'arrow up hide': 'arrow up'}>&#x2191;</span>
                          <span className={this.state.showServiceOption[0] ? 'arrow down': 'arrow down hide'}>&#x2193;</span>
                        </div>
                        <div className={this.state.showServiceOption[0] ? 'panel-content': 'panel-content hide'}>
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
                        <div className="panel-head"onClick={() => {this.setState({showServiceOption: [this.state.showServiceOption[0],!this.state.showServiceOption[1],this.state.showServiceOption[2],this.state.showServiceOption[3]]});}}>
                          <img className="service-icon" src="/static/images/sciopIcon2.svg" />
                          <span className="service-name">Workflow Definition</span>
                          <span className={this.state.showServiceOption[1] ? 'arrow up hide': 'arrow up'}>&#x2191;</span>
                          <span className={this.state.showServiceOption[1] ? 'arrow down': 'arrow down hide'}>&#x2193;</span>
                        </div>
                        <div className={this.state.showServiceOption[1] ? 'panel-content': 'panel-content hide'}>
                          <ul className="service-list">
                            <li className="service-item">Define data entry, acquisition, and formats</li>
                            <li className="service-item">Automate data analysis</li>
                            <li className="service-item">Begin with standard solutions, then customize and extend</li>
                          </ul>
                        </div>
                      </div>
                      <div className="service-container">
                        <div className="panel-head"onClick={() => {this.setState({showServiceOption: [this.state.showServiceOption[0],this.state.showServiceOption[1],!this.state.showServiceOption[2],this.state.showServiceOption[3]]});}}>
                          <img className="service-icon" src="/static/images/sciopIcon3.svg" />
                          <span className="service-name">Workflow Hosting and Operation</span>
                          <span className={this.state.showServiceOption[2] ? 'arrow up hide': 'arrow up'}>&#x2191;</span>
                          <span className={this.state.showServiceOption[2] ? 'arrow down': 'arrow down hide'}>&#x2193;</span>
                        </div>
                        <div className={this.state.showServiceOption[2] ? 'panel-content': 'panel-content hide'}>
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
                        <div className="panel-head"onClick={() => {this.setState({showServiceOption: [this.state.showServiceOption[0],this.state.showServiceOption[1],this.state.showServiceOption[2],!this.state.showServiceOption[3]]});}}>
                          <img className="service-icon" src="/static/images/sciopIcon4.svg" />
                          <span className="service-name">Collaborate and Publish</span>
                          <span className={this.state.showServiceOption[3] ? 'arrow up hide': 'arrow up'}>&#x2191;</span>
                          <span className={this.state.showServiceOption[3] ? 'arrow down': 'arrow down hide'}>&#x2193;</span>
                        </div>
                        <div className={this.state.showServiceOption[3] ? 'panel-content': 'panel-content hide'}>
                          <ul className="service-list">
                            <li className="service-item">Grant access to collaborators</li>
                            <li className="service-item">Data export, documentations, and packaging</li>
                            <li className="service-item">Data licensing, citation, and submission to publishers, archives, and catalogs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", clear: "both"}} ref={this.formOpenedRef}></div> 
                  </div>
                </section>
                <section className="inquiry-form">
                    <div className={this.state.formLoaded ? 'animated fadeIn form-container' : 'form-container'} style={this.state.formLoaded ? { display: 'block', opacity: '1' } : { display: 'none', opacity: '0' }}>
                        <h3 className="form-section-title">Tell us a little bit about yourself</h3>
                        <form action="https://datajoint.io/djneuro-service-inquiry" method="POST">
                        {/* <form action="http://localhost:3456/djneuro-service-inquiry" method="POST"> */}
                            <div className="form-content">
                            <div className="formgroup">
                                <div className="field-group">
                                    <label>*Name </label>
                                    <input className={`inputField ${this.errorClass(this.state.formErrors.name)}`} type="text" name="name" placeholder="Contact Person" 
                                        value={this.state.form.name} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)}/>
                                </div>
                                <p className="error-message">{this.state.formErrors.name}</p>
                            </div>
                            <div className="formgroup">
                                <div className="field-group">
                                    <label>*Email</label>
                                    <input className={`inputField ${this.errorClass(this.state.formErrors.email)}`} type="email" name="email" placeholder="Email" 
                                        value={this.state.form.email} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)}/>
                                </div>
                                <p className="error-message">{this.state.formErrors.email}</p>
                            </div>
                            <div className="formgroup">
                                <div className="field-group">
                                    <label>*Institution</label>
                                    <input className={`inputField ${this.errorClass(this.state.formErrors.institution)}`} type="text" name="institution" placeholder="Institution/Organization" 
                                        value={this.state.form.institution} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)}/>
                                </div>
                                <p className="error-message">{this.state.formErrors.institution}</p>
                            </div>
                            <div className="formgroup">
                                <div className="field-group">
                                    <label htmlFor="department">Department</label>
                                    <input className="inputField" type="text" name="department" placeholder="Department"
                                        value={this.state.form.department} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleReturn(e)} />
                                </div>
                            </div>
                            <div className="formgroup">
                                <div className="field-group">
                                    <label>Project Description</label>
                                    <textarea className="inputField large" type="text" name="project" placeholder="Project Description" 
                                        value={this.state.form.project} onChange={(e) => this.handleUserInput(e)}></textarea>
                                </div>
                            </div>
                            {/* <div className="formgroup radioFieldContainer">
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
                            </div> */}
                            
                            </div>
                            
                            {/* <ReCAPTCHA sitekey="6LcsDe8UAAAAAHm_EupFZJLqKItXdLmsukxFbED5" onChange={(e) => this.onReCaptchaCheck(e)}/>  for - testing */}
                            <ReCAPTCHA sitekey="6LehZO4UAAAAAAAyUzEujxHSIEz7Fn_noCeEjdvI" onChange={(e) => this.onReCaptchaCheck(e)}/>
                            <button className="form-button-wrapper" type="submit" value="submit" disabled={!this.state.allFormFieldsValid}>
                                <div className="submit-left-butt"></div>
                                <div className="form-button">Submit</div>
                                <div className="submit-right-butt"></div>
                            </button>
                            {/* <button className="formButton" type="submit" value="submit" disabled={!this.state.allFormFieldsValid}>Submit</button> */}
                            
                            <p className="formHelpText">* required field</p>
                            
                            
                        </form>
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
                      justify-content: space-between;
                      align-items: center;
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
                      margin-top: 32px;
                    }

                    .overview-cta-area .button-wrapper .left-butt,
                    .overview-cta-area .button-wrapper .right-butt {
                      position: relative;
                      height: 100%;
                      background-color: #4977ED;
                      width: 80px;
                      z-index: 10;
                      cursor: pointer;
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
                      cursor: pointer;
                    }
                    section.sciOps-detail {
                      background: linear-gradient(to right bottom, #1A1A1A, #050E27 30%, #0F3595 80%);
                      color: #FCFCFC;
                    }

                    section.sciOps-detail .container {
                        padding: 5% 0;
                    }

                    .service-options .service-container {

                    }

                    .service-container .panel-head {
                        border-bottom: 1px solid #FCFCFC;
                        padding-bottom: 0px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        width: 50%;
                        min-width: fit-content;
                        font-weight: 600;
                        font-size: 1.33rem;
                        cursor: pointer;
                    }
                    
                    .panel-head .service-icon {
                        width: 64px;
                        margin-right: 16px;
                    }
                    .panel-head .arrow.hide {
                        display: none;
                    }
                    .panel-head .service-name {
                        margin-right: 16px;
                    }

                    .service-container .panel-content {
                        padding-top: 4px;
                    }
                    .service-container .panel-content.hide {
                        display: none;
                    }
                    .panel-content ul.service-list {
                        padding-inline-start: 18px;
                        display: grid;
                        grid-template-columns: 30% 30% 30%;
                        grid-template-rows: auto auto;
                        grid-auto-flow: column;
                        column-gap: 5%;
                        row-gap: 1.33rem;
                        margin: 32px 0;
                    }
                    ul.service-list li.service-item {
                        padding-right: 10%;
                    }

                    section.inquiry-form {

                    }
                    
                    div.form-container {
                        width: 80%;
                        margin: 5% auto;
                    }

                    .form-container h3.form-section-title {
                        font-size: 1.33rem;
                        color: #0F3595;
                    }

                    form {
                        position: relative;
                        margin-top: 0;
                        padding: 2.5% 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .form-content {
                        width: 100%;
                        padding-bottom: 32px;
                        margin-bottom: 32px;
                        border-bottom: solid 0.5px lightgrey;
                        display: grid;
                        grid-template-rows: auto auto auto;
                        grid-template-columns: 45% 45%;
                        column-gap: 5%;
                    }

                    .formgroup {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    div.formgroup .field-group {
                        display: flex;
                        width: 100%;
                        position: relative;
                    }

                    .field-group label {
                        width: 26%;
                        margin-right: 4%;
                        white-space: nowrap;
                        font-size: 0.9rem;
                        font-weight: 600;
                    }

                    .formgroup .inputField {
                        border: 0.5px solid darkgrey;
                        border-radius: 4px;
                        height: 30px;
                        max-width: 400px;
                        width: 70%;
                        background-color: #20202010;
                        padding-left: 4px;
                    }

                    .formgroup .inputField.large {
                        height: 150px;
                    }

                    .form-button-wrapper {
                        margin: 32px auto 0;
                        padding: 0;
                        position: relative;
                        display: flex;
                        z-index: 10;
                        height: 50px;
                        background-color: transparent;
                        border: none;
                    }

                    .form-button-wrapper .submit-left-butt,
                    .form-button-wrapper .submit-right-butt {
                        width: 60px;
                        height: 100%;
                        cursor: pointer;
                        z-index: 10;
                        border: 4px solid #0F3595;
                    }
                    .form-button-wrapper .submit-left-butt {
                        border-radius: 48% 0 0 48%;
                        transform: translateX(31px);
                    }
                    .form-button-wrapper .submit-right-butt {
                        border-radius: 0 48% 48% 0;
                        transform: translateX(-31px);
                    }
                    .form-button-wrapper:disabled .submit-left-butt,
                    .form-button-wrapper:disabled .submit-right-butt {
                        border: 4px solid gray;
                        background-color: gray;
                    }
                    .form-button-wrapper .form-button {
                        color: #0F3595;
                        border-top: 4px solid #0F3595;
                        border-bottom: 4px solid #0F3595;
                        padding: 0;
                        cursor: pointer;
                        background-color: #FCFCFC;
                        z-index: 20;
                        font-size: 1.33rem;
                        font-weight: 600;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                    .form-button-wrapper:disabled .form-button {
                        border-top: 4px solid gray;
                        border-bottom: 4px solid gray;
                        background-color: gray;
                        color: #FCFCFC;
                    }

                    
                    .form-button-wrapper:hover .submit-left-butt,
                    .form-button-wrapper:hover .submit-right-butt,
                    .form-button-wrapper:hover .form-button {
                        border-color: #0F3595;
                        background-color: #0F3595;
                        color: #FCFCFC;
                    }

                    .error-field {
                        background-color: #ffcccc;
                    }
                    .error-message {
                        font-size: 70%;
                        color: red;
                        margin-top: 3px;
                    }
                    p.formHelpText {
                        font-size: 70%;
                        margin-top: 3px;
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
    }

}

export default Services;