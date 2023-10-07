
import Layout from '../Components/Layout'
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';


export default function Dashboard() {

    return (
        <Layout>
            <div>
                <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                            <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                <div className="row">
                                <div className="col-lg-12">
                                    <h6>Boost your tech talent sourcing by 10x</h6>
                                    <h2>We Find Right Candidate For You!</h2>
                                    <p>We are innovating the next-gen candidate sourcing technique. 
                                    Recruiters can now stop depending upon a single portal and can take the leverage of Sourcign to source candidates from various platforms.
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="border-first-button scroll-to-section">
                                    <a href="#searchCandidates">Find Candidates!</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="assets/images/services-image-03.jpg" alt />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="about" className="about section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="about-left-image  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="assets/images/about-dec-v3.png" alt />
                            </div>
                            </div>
                            <div className="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div className="about-right-content">
                                <div className="section-heading">
                                <h6>About Us</h6>
                                <h4>Who Are <em>We?</em></h4>
                                <div className="line-dec" />
                                </div>
                                <p>We’re a young and talented group of professionals with a groundbreaking ideas to help next gen
                                recruiters to source smart.
                                <br />
                                ​While working for tech companies recruiting 100s of candidates,
                                one fine day we realized that there is immense talent available in the market and very few channels
                                available to source them.
                                It’s time to leverage the power of web and open search to find the right talent.
                                <br />
                                We have put together our 15 years of diverse recruiting experience into a single platform.
                                Our tool will enable you to source best matched profiles for your recruiting needs.
                                Not only that, Sourcign provides a a direct link to various other portals to fetch right candidates
                                for you.
                                </p>
                                {/* <div class="row">
                            <div class="col-lg-4 col-sm-4">
                            <div class="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div class="progress" data-percentage="90">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">
                                    <div>
                                    90%<br>
                                    <span>Recruitment</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-4 col-sm-4">
                            <div class="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div class="progress" data-percentage="80">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">
                                    <div>
                                    80%<br>
                                    <span>Something</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-4 col-sm-4">
                            <div class="skill-item third-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div class="progress" data-percentage="80">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">
                                    <div>
                                    80%<br>
                                    <span>Something</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div> */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="services" className="services section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h6>Our Features</h6>
                            <h4 id="searchCandidates">Find the right <em>Candidate</em> for your needs!</h4>
                            <div className="line-dec" />
                        </div>
                        </div>
                        
                        <div className="col-lg-12">
                        <div className="naccs">
                            <div className="grid">
                            <div className="row">
                                <div className="col-lg-12">
                                <ul className="nacc">
                                    <li className="active">
                                    <div>
                                        <div className="thumb">
                                        <div className="row">
                                            <div className="col-lg-12 align-self-center">
                                            <div className="left-text">
                                                <section id="feature4" data-block-version="2.0.1" data-block-id="1ae1f960-5a54-4252-8042-6c491a05d6dc" data-block-updated="2022-09-05T18:46:02.765" style={{}} className="feature1-1ae1f960-5a54-4252-8042-6c491a05d6dc sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll ">
                                                <div className="container">
                                                    <div className="row align-items-center">
                                                    <div className="col-lg-6 pb-5 pb-lg-0 text-lg-left">
                                                        <h2 className="sw-font-size-3xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal ">
                                                        We will find best matched profiles for you. </h2>
                                                        <p className="sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-none sw-letter-spacing-normal sw-line-height-loose ">
                                                        Our skills matching feature gives you leverage over competitors to find best
                                                        matched talent for your
                                                        recruiting needs. </p> {/* Features */}
                                                        <p> <a href="/login" className="sw-font-size-xl sw-text-color-2e7ef9 sw-font-family-default sw-font-weight-medium sw-margin-top-none sw-margin-bottom-3xs sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block">
                                                            Discover Feature <i className="fa fa-fw fa-arrow-right ml-2" /> </a> </p>
                                                    </div>
                                                    <div className="col-lg-6 text-center"> <img src="assets/images/featureimg.png" className="sw-percentage-width-full sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block" alt="Our awesome features" /> </div>
                                                    </div>
                                                </div>
                                                </section>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li></ul></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div id="free-quote" class="free-quote">
                    <div class="container">
                <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="section-heading  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <h6>Happy to see you on our portal!</h6>
                    <h4>Grow With Us Now</h4>
                    <div class="line-dec"></div>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                    <form id="search" action="#" method="GET">
                    <div class="row">
                        <div class="col-lg-4 col-sm-4">
                        <fieldset>
                            <input type="web" name="web" class="website" placeholder="Your website URL..." autocomplete="on"
                            required>
                        </fieldset>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                        <fieldset>
                            <input type="address" name="address" class="email" placeholder="Email Address..." autocomplete="on"
                            required>
                        </fieldset>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                        <fieldset>
                            <button type="submit" class="main-button">Connect With Us Now!</button>
                        </fieldset>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                    </div>
                </div> */}
                <div id="services" className="services section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <section id="cta1" data-block-version="2.0.1" data-block-id="7cb99a26-4f01-430c-b4ee-59f1aa73165f" data-block-updated className="cta6-7cb99a26-4f01-430c-b4ee-59f1aa73165f sw-background-color-ffffff sw-padding-top-l sw-padding-bottom-l sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000   sw-background-repeat-no-repeat sw-background-size-auto sw-background-position-center sw-background-attachment-scroll ">
                            <div className="container">
                                <div className="row align-items-center">
                                <div className="col-12 text-center box-container sw-background-color-ffffff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-box-shadow-none sw-padding-top-xl sw-padding-bottom-xl ">
                                    <h4>
                                    30 Days Free Trial </h4>
                                    <h5 style={{"color":"#726ae3"}} className="sw-font-size-xl sw-font-family-default sw-font-weight-thin sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-normal ">
                                    Start connecting with top talent today. Strengthen your capabilities with Sourcign. </h5>
                                    <br />
                                    <div className="d-flex justify-content-center flex-wrap border-first-button"> 
                                    <a data-element="button" target className="sw-font-size-xl sw-text-color-default sw-font-family-aboreto sw-font-weight-extrabold sw-border-radius-default sw-background-color-b22ef9 sw-padding-left-l sw-padding-right-l sw-padding-top-5xs sw-padding-bottom-5xs sw-border-style-solid sw-border-width-xs sw-border-color-000000 sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline hover:sw-box-shadow-m sw-margin-bottom-6xs sw-display-inline-block sw-margin-left-7xs sw-margin-right-7xs" href="/login"> Try it now! </a> 
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="contact" className="contact-us section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h6>Contact Us</h6>
                            <h4>Get In Touch With Us <em>Now</em></h4>
                            <div className="line-dec" />
                        </div>
                        </div>
                        <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <form id="contact" action method="post">
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-dec">
                                <img src="assets/images/contact-dec-v3.png" alt />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div id="map">
                                <img src="./assets/images/contactimg.png" width="1000px" height="550px" frameBorder={0} style={{"border":"0"}} allowFullScreen />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="fill-form">
                                <div className="row">
                                    <div className="col-lg-4">
                                    <div className="info-post">
                                        <div className="icon">
                                        <img src="assets/images/phone-icon.png" alt />
                                        <a href="#">+61 123456789 <br /> +61 123456789<br /></a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="info-post">
                                        <div className="icon">
                                        <img src="assets/images/email-icon.png" alt />
                                        <a href="#">sourcign<br />@gmail.com </a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="info-post">
                                        <div className="icon">
                                        <img src="assets/images/location-icon.png" alt />
                                        <a href="#">Sydney, <br />2000</a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <fieldset>
                                        <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required />
                                    </fieldset>
                                    <fieldset>
                                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Id" required />
                                    </fieldset>
                                    {/* <fieldset>
                                <input type="subject" name="subject" id="subject" placeholder="Subject" autocomplete="on">
                                </fieldset> */}
                                    </div>
                                    <div className="col-lg-6">
                                    <fieldset>
                                        <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required defaultValue={""} />
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                    <fieldset>
                                        
                                        <Button className='col-md-8' id="form-submit" type="submit" style={{backgroundColor:"#47B5EC",border:0}}>Send Message Now</Button>
                                    </fieldset>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </Layout>
    )
}