import Layout from '../components/Layout.js';
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';


const sliderSetup = {
    className: "slider variable-width",
    // centerMode: true,
    variableWidth: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerPadding: '0px',
                slidesToShow: 1,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 545,
            settings: {
                arrows: false,
                centerPadding: '0px',
                slidesToShow: 1,
                swipeToSlide: true,
            }
        },
    ],
    speed: 500
}



class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeOpen: true,
        }
    }
    closeNotice(event) {
        this.setState({noticeOpen: false})
    }

    openNotice(event) {
        this.setState({ noticeOpen: true})
    }

    render() {
        return (
            <Layout>
              <div className="content-container">
                {/* <div style={this.state.noticeOpen ? { display: 'block' }: { display: 'none'}} className='noticeContainer'>
                    <h2 className="noticeTitle">Looking for us at SfN?</h2>

                    <p className="noticeSubtitle">
                        We don't have a booth this year, but we're here and happy to meet with you anytime!
                    <br />
                        Contact us at <em><a target="_blank" href="https://twitter.com/datajointneuro">twitter/@DataJointNeuro</a></em> or <em><a target="_blank" href="mailto:info@vathes.com">info@vathes.com</a></em> to arrange a time or,
                    <br />
                        come see our team for their posters!
                    </p>
                    <p className="noticeSubtitle">
                        Shan @ Board DD45 October 21st (Mon) 1-5pm <a href="https://ativsoftware.com/appinfo.php?page=Session&project=SFN19&server=eventpilotadmin.com&id=P70068" target="_blank">[more info]</a>
                        <br />
                        Thinh @ Board DD27 October 21st (Mon) 1-5pm <a href="https://ativsoftware.com/appinfo.php?page=Session&project=SFN19&server=eventpilotadmin.com&id=P49650" target="_blank">[more info]</a>

                    </p>
                    <button className="closeNoticeButton" onClick={(e) => this.closeNotice(e)}>X</button>
                </div>
                <button style={this.state.noticeOpen ? { visibility: 'hidden' } : { visibility: 'visible' }} className="openNoticeButton" onClick={(e) => this.openNotice(e)}>SfN 2019 Notice</button> */}
                
                <section className="hero-section">
                  <h1 className="home-top-tagline">Data solutions <br />for <span className="highlight">team science</span></h1>
                  <img className="home-top-image" src="./static/images/top-area-image.svg" alt="team work image"/>
                </section>
                <section className="details-section">
                  <div className="container">
                    <div className="detail-image-area">
                      <img src="./static/images/node-wheel.svg" className="node-wheel-icon" />
                      <img src="./static/images/analysis-screen.svg" className="analysis-screen-icon" />
                    </div>
                    <div className="detail-texts">
                      <p>DataJoint (the company) offers a comprehensive and transparent data management solution for science labs 
                        and multi-lab collaborations, spanning the entire life cycle of data from project planning, to acquisition 
                        and processing, to distributed computation and publishing.
                        <br />
                        <br />
                        Our mission is to provide resources for designing <em className="extra-emphasis">data pipelines for flexible access, data integrity, distributed 
                        computation, and streamlined collaboration</em> through principled use of DataJoint, the software.
                      </p>    
                    </div>
                  </div>
                </section>
                <section className="partner-section">
                  <div className="container">
                    <h4 className="section-title">Partners</h4>
                    <div className="partner-listing">
                      <img className="partner-logo" src="./static/images/logo/color/nwb_logo.png" alt="neurodata without borders logo" />
                      <img className="partner-logo" src="./static/images/logo/color/mathworks_logo.png" alt="mathworks logo" />
                      <img className="partner-logo" src="./static/images/logo/color/aws_logo.png" alt="amazon web services logo" />
                    </div>
                  </div>
                </section>
                <section className="customer-section">
                  <div className="container">
                    <h4 className="section-title">Our Projects and Customers</h4>
                    <div className="slider-container">
                        <Slider {...sliderSetup}>
                            <div className="slider-booth">
                                <img src="./static/images/logo/color/hhmi_janelia_logo.png" alt="HHMI Janelia Research Campus Logo" height="70px" />
                                <div className="customer-detail">
                                    <p>Svoboda Lab @ HHMI Janelia Research Campus</p>
                                </div>
                            </div>
                            <div className="slider-booth">
                                <img src="./static/images/logo/color/ibl_logo.png" alt="International Brain Laboratory Logo" height="70px" />
                                <div className="customer-detail">
                                    <p>International Brain Laboratory</p>
                                </div>
                            </div>
                            <div className="slider-booth">
                                <img src="./static/images/logo/color/kavli_logo.png" alt="Kavli Institute for Systems Neuroscience Logo" height="70px" />
                                <div className="customer-detail">
                                    <p>Moser Lab @ Kavli Institute</p>
                                </div>
                            </div>
                            <div className="slider-booth">
                                <img src="./static/images/logo/color/bcm_logo.png" alt="Baylor College of Medicine Logo" height="70px" />
                                <div className="customer-detail">
                                    <p>Nuo lab @ Baylor College of Medicine</p>
                                </div>
                            </div>
                            <div className="slider-booth">
                                <img src="./static/images/logo/color/pni_logo.png" alt="Princeton Neuroscience Institute Logo" height="70px" />
                                <div className="customer-detail">
                                    <p>Princeton Neuroscience Institute</p>
                                </div>
                            </div>
                            <div className="slider-booth">
                                <img src="./static/images/logo/color/ucsf_logo.png" alt="UCSF Logo" height="70px" />
                                <div className="customer-detail">
                                    <p>Frank lab @ University of California San Francisco</p>
                                </div>
                            </div>
                            <div className="slider-booth">
                                <img src="./static/images/logo/color/columbia_logo.png" alt="Columbia University Logo" height="70px" />
                                <div className="customer-detail">
                                    <p>Columbia University</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                  </div>
                </section>
              </div>
              <style jsx>{`
                .content-container {
                    position: relative;
                }
                p {
                    margin: 0;
                }

                section {
                    height: 100%;
                    position: relative;
                    z-index: 150;
                }

                section .container {
                  position: relative;
                  width: 80%;
                  margin: 0 auto;
                  padding: 10%;
                }

                section .section-title {
                  font-weight: 600;
                  font-style: italic;
                  color: #0F3595;
                  margin: 0;
                }

                .hero-section {
                    background-image: linear-gradient(to right bottom, #050E27, #4977ED 60%, #3293F1 70%, #3B85F0 80%, #1CA9F9 95%);
                    display: flex;
                    padding: 164px 10% 32px;
                }

                h1.home-top-tagline {
                    font-weight: 600;
                    font-size: 3.2rem;
                    line-height: 1.2;
                    color: #FCFCFC;
                    text-align: left;
                    margin: 0;
                }

                .home-top-tagline .highlight {
                    color: #1CA9F9;
                }

                img.home-top-image {
                    width: 55%;
                    display: flex;
                    align-self: flex-end;
                    margin-top: 114px;s
                }

                .details-section,
                .customer-section {
                  background-color: #F2F9FD;
                }

                .details-section .container {
                  display: flex;
                  align-items: center;
                }

                .details-section .container .detail-image-area {
                  position: relative;
                  width: 50%;
                  display: flex;
                  flex-direction: column;
                }

                .detail-image-area img.node-wheel-icon {
                  width: 130px;
                  margin-left: 10%;
                }

                .detail-image-area img.analysis-screen-icon {
                  width: 170px;
                  margin-left: 40%;
                }

                .details-section .container .detail-texts {
                  position: relative;
                  width: 50%;
                }

                .detail-texts p {
                  text-align: left;
                  line-height: 1.6rem;
                }

                .detail-texts p em.extra-emphasis {
                  font-weight: 600;
                }

                .partner-section {
                    background-color: #FCFCFC;
                }

                .partner-section .container .partner-listing {
                  display: flex;
                  justify-content: space-between;
                  margin-top: 56px;
                }

                .partner-listing .partner-logo {
                  height: 56px;
                }

                .customer-section .container{
                }

                .slider-container {
                  width: 100%; 
                  margin: 56px auto;
                }
                
                .slick-next:after,
                .slick-prev:before {
                  opacity: 1;
                  color: gray !important;
                }

                .slick-center * {
                  transform: scale(1.4) !important;
                  // margin-left: auto;
                  // margin-right: auto;
                }

                .slider-booth {
                  // border-right: 1px solid lightgrey;
                  margin: 0 20px;
                }

                .slider-booth img {
                  display: flex;
                  margin: 0 auto;
                }

                .slider-booth .customer-detail {
                  color: rgb(120, 120, 120);
                  margin-top: 18px;
                  font-size: 0.8rem;
                  text-align: center;
                }
                

                // .slick-prev:before,
                // .slick-next:before {
                //     color: blue !important;
                // }

                // these are for temporary event banner notices
                .noticeContainer {
                    // background-color: #e8f4f8;
                    background: linear-gradient(#0f040f, #0f040f, #001226);
                    // color: #e8f4f8;
                    padding: 15px 20px 10px;
                }
                .noticeTitle {
                    margin-top: 0;
                    color: #DDD;
                }
                .noticeSubtitle {
                    margin: 12px 0px;
                    line-height: 1.4;
                    color: #DDD;
                }
                .noticeSubtitle a {
                    text-decoration: none;
                    color: #dad2f7;
                    white-space: nowrap;
                }
                .noticeSubtitle a:hover {
                    color: #e8e3fa;
                }
                .closeNoticeButton {
                    background-color: blueviolet;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    position: absolute;
                    top: 80px;
                    right: 10px;
                }
                .closeNoticeButton:hover {
                    background-color: purple;
                }
                .openNoticeButton {
                    background-color: #0f040f;
                    border: 3px solid #DDD;
                    border-top: 0px solid #001226;
                    color: #DDD;
                    // background-color: #DDD;
                    padding: 5px 15px 8px;
                    // border: none;
                    position: absolute;
                    transform: translateX(-50%);
                    font-size: 150%;
                }

                @media (max-width: 1330px) {
                  h1.home-top-tagline {
                    font-size: 2.8rem;
                  }

                  .home-top-image {
                    width: 45%;
                  }
                }
               
                @media (max-width: 940px) {
                    .hero-section {
                      padding: 164px 5% 32px;
                    }

                    section .container {
                      width: 90%;
                      padding: 7% 5%;
                    }

                    h1.home-top-tagline {
                      font-size: 2.6rem;
                    }
                    .home-top-image {
                      width: 40%;
                    }
                    .partner-section {
                    }
                    .partner-section img.partner-logo {
                        height: 50px;
                    }
                    .customer-section {
                    }
                }
                @media (max-width: 740px) {
                  .partner-section .container .partner-listing {
                    flex-direction: column;
                    align-items: center;
                  }
                  .partner-section img.partner-logo {
                    margin-bottom: 24px;
                  }
                  section.details-section .detail-image-area {
                    width: 45%;
                  }
                  .detail-image-area img.node-wheel-icon {
                    width: 80px;
                    margin-left: 5%;
                  }
                  .detail-image-area img.analysis-screen-icon {
                    width: 100px;
                    margin-left: 33%;
                  }
                }
                @media (max-width: 520px) {
                    section.hero-section {
                      padding: 124px 5% 64px;
                      background-image: linear-gradient(to right bottom, #050E27, #4977ED 90%, #3293F1 92%, #3B85F0 94%, #1CA9F9 98%);
                    }
                    section.hero-section h1.home-top-tagline {
                        font-size: 2.8rem;
                        z-index: 900;
                        position: relative;
                    }
                    section.hero-section img.home-top-image {
                      position: absolute;
                      width: 80%;
                      right: 0;
                      bottom: 12px;
                      opacity: 0.2;
                      z-index: 0;
                    }
                    section.details-section .container {
                      flex-direction: column;
                    }
                    section.details-section .container .detail-texts {
                      width: 100%;
                      margin-top: 24px;
                    }
                    .partner-section .container .partner-listing {
                      margin-top: 24px;
                    }
                    .partner-section img.partner-logo {
                        height: 40px;
                    }
                    .slider-container {
                        width: 90%;
                        margin-left: 4%;
                        margin-top: 4%;
                    }
                    .openNoticeButton {
                        padding: 3px 12px 6px;
                        font-size: 120%;
                    }
                    .noticeTitle {
                        font-size: 1.2rem;
                    }
                    .noticeSubtitle {
                        font-size: 0.9rem;
                    }
                  }
                }
              `}</style>
            </Layout>
        );

    }
}

export default Index;
    