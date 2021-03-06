import Layout from '../components/Layout.js';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const background = {
    // backgroundImage: 'url("/static/images/artwork/blue-cherry-flicker.gif")',
    // background: 'linear-gradient(353deg, blueviolet, navy, midnightblue, #000011)',
    // background: 'linear-gradient(303deg, blueviolet, indigo)',
    background: '#001a33', //'#FFF',
    backgroundImage: 'url("/static/images/artwork/djneuro_unit.png")',
    backgroundSize: '12.5%',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'top right',
    // color: '#DDD'
    color: '#000022',
    height: '100%'
};




class ApplyButton extends React.Component {

    onClickApply(id, e) {
        this.props.check(id);
        // this.props.scroll();
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
        console.log('recaptcha checked');
        console.log("Captcha value:", value);
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
                {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
                <div style={background}>
{/* 
                    <div className="resourceSection">
                        <h3>Free Resources</h3>
                        <p className="subtitle1">DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:</p>
                        <ul className="resourcesListRow">
                            <li className="resourcePanel">DataJoint Reference Documentation
                        <a href="https://docs.datajoint.org" target="_blank"><img src="/static/images/icons/doc_white.png" /></a></li>
                            <li className="resourcePanel">DataJoint <br />Tutorials
                        <a href="https://tutorials.datajoint.org" target="_blank"><img src="/static/images/icons/blackboard_white.png" /></a></li>
                            <li className="resourcePanel">DataJoint Server Configuration
                        <a href="https://github.com/datajoint/mysql-docker" target="_blank"><img src="/static/images/icons/server-config-white.png" /></a></li>
                            <li className="resourcePanel">DataJoint <br />Python Client
                        <a href="https://github.com/datajoint/datajoint-python" target="_blank"><img src="/static/images/icons/python-logo-monoc.png" /></a></li>
                            <li className="resourcePanel">DataJoint <br />MATLAB Client
                        <a href="https://github.com/datajoint/datajoint-matlab" target="_blank"><img src="/static/images/icons/matlab-logo-monoc.png" /></a></li>
                        </ul>
                        <p className="subtitle2">In collaboration with Karel Svoboda's Lab and Lawrence Berkeley Lab, DataJoint Neuro is preparing a set of "Canonical Data
                            Pipelines for Neurophysiology" to be presented at the <a className={inlineLink} href="https://www.sfn.org/Meetings/Neuroscience-2019">Society for
                            Neuroscience Conference in November 2019</a>.
                        </p>
                        </div> */}
                    <br />
                    {/* <h3>Support Types</h3> */}
                    <div className="servicesSection">
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
                    </div>

                <style jsx>{`
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
                        width: 31%;
                        margin: 0 0.3%;
                        list-style-type: disc;
                        // border: 3px solid #DDD;
                        border: 1.5px solid blueviolet;
                        border-radius: 5px;
                        // background-color: rgba(0, 0, 0, 0.7);
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