'use client';
import React from 'react'
import Header from './header'
import amazon from '/public/images/amazon.jpg';
import airbnb from '/public/images/airbnb.jpg';
import slack from '/public/images/slack.jpg';
import paypal from '/public/images/paypal.jpg';
import spotify from '/public/images/spotify.jpg';
import figma from '/public/images/figma.jpg';
import logo from '/public/images/logo.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import 'boxicons';
import { signIn } from 'next-auth/react';
import axios from 'axios';
export default function Landing() {
    const [sign, setSign] = useState(false);
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState('login');
    const [role, setRole] = useState('candidate');
    const list = [
        amazon,
        airbnb,
        slack,
        paypal,
        spotify,
        figma,
    ];
    function hideMenu()
    {
        setShow(false);
    };
    function showSign()
    {
        const body = document.body;
        body.classList.add('body-stopped');
        setSign(true);
    };
    function hideSign()
    {
        const body = document.body;
        body.classList.remove('body-stopped');
        setSign(false);
    };
    const [passwordVisible, setPasswordVisible] = useState(false);
    const changeType = () => {
        setPasswordVisible(!passwordVisible);
    };
    const [passwordVisiblep, setPasswordVisiblep] = useState(false);
    const changeTypep = () => {
        setPasswordVisiblep(!passwordVisiblep);
    };
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/signup', {
        email,
        name,
        password,
      });
      if (res.status === 201) {
        window.location.href = '/';
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };
  return (
    <div className='landing-section'>
        {
            sign && (
                status === 'login'? (
                    <div className='sign-login-section'>
                    <div className='sign-login-section-one-login'>
                        <div className='sign-login-section-one-one'>
                            <h1>Login to superio</h1>
                            <svg onClick={() => hideSign()} xmlns="http://www.w3.org/2000/svg" height="" viewBox="0 -960 960 960" width="" fill=""><path d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"/></svg>
                        </div>
                        <div className='sign-login-section-one-two-login'>
                            <h1>Username: <span>candidate</span> or <span>employer</span></h1>
                            <h1>Password: <span>demo</span></h1>
                        </div>
                        <div className='sign-login-section-one-three'>
                            <span>Email <h5>*</h5></span>
                            <input type='email' placeholder='Email'/>
                        </div>
                        <div className='sign-login-section-one-three'>
                            <span>Password <h5>*</h5></span>
                            <div className='sign-login-section-one-three-input'>
                                <input type={passwordVisible ? 'text' : 'password'}  placeholder='Password' className='loginPassword'/>
                                <div>
                                <box-icon name={passwordVisible ? 'show-alt' : 'hide'} onClick={changeType}></box-icon>
                                </div>
                            </div>
                        </div>
                        <div className='sign-login-section-one-six-login'>
                           <div className='sign-login-section-one-six-login-one'>
                           <input type='checkbox'/>
                           <h5>Keep me signed in</h5>
                           </div>
                           <div className='sign-login-section-one-six-login-two'><a href='/'>Forgotten password?</a></div>
                        </div>
                        <div className='sign-login-section-one-seven'>
                            <button onClick={() => signIn('google')}>Login</button>
                        </div>
                        <div className='sign-login-section-one-eight'>
                            <h2>Don't you have an account? <a onClick={() => setStatus('signup')}>Register</a></h2>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className='sign-login-section'>
                    <form onSubmit={handleSubmit}>
                    <div className='sign-login-section-one'>
                        <div className='sign-login-section-one-one'>
                            <h1>Create a free superio account</h1>
                            <svg onClick={() => hideSign()} xmlns="http://www.w3.org/2000/svg" height="" viewBox="0 -960 960 960" width="" fill=""><path d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"/></svg>
                        </div>
                        <div className='sign-login-section-one-two'>
                            <div className={role === 'candidate'? 'sign-login-section-one-two-right-candidate' : 'sign-login-section-one-two-left-candidate'} onClick={() => setRole('candidate')}><button><svg xmlns="http://www.w3.org/2000/svg" height="" viewBox="0 -960 960 960" width="" fill=""><path d="M480-504.62q-49.5 0-84.75-35.25T360-624.62q0-49.5 35.25-84.75T480-744.62q49.5 0 84.75 35.25T600-624.62q0 49.5-35.25 84.75T480-504.62ZM200-215.38v-65.85q0-24.77 14.42-46.35 14.43-21.57 38.81-33.5 56.62-27.15 113.31-40.73 56.69-13.57 113.46-13.57 56.77 0 113.46 13.57 56.69 13.58 113.31 40.73 24.38 11.93 38.81 33.5Q760-306 760-281.23v65.85H200Zm40-40h480v-25.85q0-13.31-8.58-25-8.57-11.69-23.73-19.77-49.38-23.92-101.83-36.65-52.45-12.73-105.86-12.73t-105.86 12.73Q321.69-349.92 272.31-326q-15.16 8.08-23.73 19.77-8.58 11.69-8.58 25v25.85Zm240-289.24q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 369.24Z"/></svg>Candidate</button></div>
                            <div className={role === 'employer'? 'sign-login-section-one-two-right-employer' : 'sign-login-section-one-two-left-employer'} onClick={() => setRole('employer')}><button><svg xmlns="http://www.w3.org/2000/svg" height="" viewBox="0 -960 960 960" width="" fill=""><path d="M184.62-160q-27.62 0-46.12-18.5Q120-197 120-224.62v-390.76q0-27.62 18.5-46.12Q157-680 184.62-680H360v-55.39q0-27.61 18.5-46.11t46.12-18.5h110.76q27.62 0 46.12 18.5Q600-763 600-735.39V-680h175.38q27.62 0 46.12 18.5Q840-643 840-615.38v390.76q0 27.62-18.5 46.12Q803-160 775.38-160H184.62ZM400-680h160v-55.39q0-9.23-7.69-16.92-7.69-7.69-16.93-7.69H424.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.92V-680Zm400 300H560v60H400v-60H160v155.38q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h590.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93V-380Zm-360 20h80v-80h-80v80Zm-280-60h240v-60h160v60h240v-195.38q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H184.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93V-420Zm320 20Z"/></svg>Employer</button></div>
                        </div>
                        <div className='sign-login-section-one-three'>
                            <span>Username <h5>*</h5></span>
                            <input type='text' placeholder='Username' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='sign-login-section-one-three'>
                            <span>Email <h5>*</h5></span>
                            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='sign-login-section-one-three'>
                            <span>Password <h5>*</h5></span>
                            <div className='sign-login-section-one-three-input'>
                                <input type={passwordVisiblep ? 'text' : 'password'}  placeholder='Password' className='loginPassword' onChange={(e) => setPassword(e.target.value)}/>
                                <div>
                                <box-icon name={passwordVisiblep ? 'show-alt' : 'hide'} onClick={changeTypep}></box-icon>
                                </div>
                            </div>
                        </div>
                        <div className='sign-login-section-one-three'>
                            <span>Confirm Password <h5>*</h5></span>
                            <div className='sign-login-section-one-three-input'>
                                <input type={passwordVisible ? 'text' : 'password'}  placeholder='Confirm Password' className='loginPassword'/>
                                <div>
                                <box-icon name={passwordVisible ? 'show-alt' : 'hide'} onClick={changeType}></box-icon>
                                </div>
                            </div>
                        </div>
                        <div className='sign-login-section-one-six'>
                            <input type='checkbox'/>
                            <h5>You accept our <a href='/'>Terms and Conditions and Privacy Policy</a></h5>
                        </div>
                        <div className='sign-login-section-one-seven'>
                            <button type='submit'>Register Now</button>
                        </div>
                        <div className='sign-login-section-one-seven-google'>
                            <button onClick={() => signIn('google')}><svg width="70px" height="70px" viewBox="-262 -262 786.00 786.00" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>Google</button>
                        </div>
                        <div className='sign-login-section-one-eight'>
                            <h2>Already have an account? <a onClick={() => setStatus('login')}>Login</a></h2>
                        </div>
                    </div>
                    </form>
                </div>
                )
            )
        }
       {
        show? (
            <div className='landing-section-navbar-menu-mobile'>
            <div className='landing-section-navbar-menu-mobile-one'>
                <div className='landing-section-navbar-menu-mobile-one-one'>
                    <div className='landing-section-navbar-menu-mobile-one-one-image'><Image src={logo} alt='site_logo' /></div>
                    <div className='landing-section-navbar-menu-mobile-one-one-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000009"><path d="M480-492.31q-57.75 0-98.87-41.12Q340-574.56 340-632.31q0-57.75 41.13-98.87 41.12-41.13 98.87-41.13 57.75 0 98.87 41.13Q620-690.06 620-632.31q0 57.75-41.13 98.88-41.12 41.12-98.87 41.12ZM180-187.69v-88.93q0-29.38 15.96-54.42 15.96-25.04 42.66-38.5 59.3-29.07 119.65-43.61 60.35-14.54 121.73-14.54t121.73 14.54q60.35 14.54 119.65 43.61 26.7 13.46 42.66 38.5Q780-306 780-276.62v88.93H180Zm60-60h480v-28.93q0-12.15-7.04-22.5-7.04-10.34-19.11-16.88-51.7-25.46-105.42-38.58Q534.7-367.69 480-367.69q-54.7 0-108.43 13.11-53.72 13.12-105.42 38.58-12.07 6.54-19.11 16.88-7.04 10.35-7.04 22.5v28.93Zm240-304.62q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 384.62Z"/></svg>
                    <svg onClick={() => hideMenu()} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000009"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg>
                    </div>
                </div>
                <div className='landing-section-navbar-menu-mobile-one-two'>
                    <ul>
                        <li>Home<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg></li>
                        <li>Jobs<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg></li>
                        <li>Employers<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg></li>
                        <li>Candidates<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg></li>
                        <li>Pages<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg></li>
                    </ul>
                    <button className='landing-section-navbar-menu-mobile-one-two-button'>Post Job</button>
                    <div className='landing-section-navbar-menu-mobile-one-two-contact'>
                        <h2>Call us</h2>
                        <h3>+212 603927836</h3>
                        <p>
                        328 Queensberry Street, North Melbourne VIC<br></br>3051, Australia.<br></br>youneslassirifreelance@gmail.com
                        </p>
                    </div>
                    <div className='landing-section-navbar-menu-mobile-one-two-social-media'>
                    <box-icon type='logo' name='facebook'></box-icon>
                    <box-icon type='logo' name='twitter'></box-icon>
                    <box-icon name='linkedin' type='logo'></box-icon>
                    <box-icon name='instagram' type='logo'></box-icon>
                    </div>
                </div>
            </div>
            <div className='landing-section-navbar-menu-mobile-two' onClick={() => hideMenu()}></div>
            </div>
        ) : null
       }
        <Header setShow={setShow} show={show} showSign={showSign}/>
        <div className='landing-section-one'>
            <h1>There Are <span>93,178</span><br></br> Postings Here For you!</h1>
            <p>Find Jobs, Employment & Career Opportunities</p>
            <div className='landing-section-one-one'>
                <div className='landing-section-one-one-one'>
                    <div className='landing-section-one-one-one-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="" viewBox="0 -960 960 960" width="" fill="#696969"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                    </div>
                    <input type='text' placeholder='Job title, keywords'/>
                </div>
                <div className='landing-section-one-one-two'>
                    <div className='landing-section-one-one-one-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                    </div>
                    <div className='landing-section-one-one-two-one'>
                        City or postcode       
                    </div>
                </div>
                <div className='landing-section-one-one-three'>
                    <button>Find Jobs</button>
                </div>
            </div>
            <div className='landing-section-one-two'>
                <h5>Popular Searches :</h5>
                <ul>
                    <li><a href='/'>Designer,</a></li>
                    <li><a href='/'>Developer</a></li>
                    <li><a href='/'>Web,</a></li>
                    <li><a href='/'>IOS,</a></li>
                    <li><a href='/'>PHP,</a></li>
                    <li><a href='/'>Senior,</a></li>
                    <li><a href='/'>Engineer</a></li>
                </ul>
            </div>
        </div>
        <div className='landing-section-logos-slider'>
            {
                list.map((item, i) => {
                    return(
                        <Image src={item} key={i} className={`landing-section-logos-slider${i}`} />                    )
                })
            }
        </div>
    </div>
  )
}
