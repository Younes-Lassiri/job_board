import React from 'react';
import Image from 'next/image';
import logo from '/public/images/logo.png';
export default function Header(props) {
  return (
    <div className='header-section'>
        <div className='header-section-one'>
            <Image src={logo} alt='site_logo' />
        </div>
        <div className='header-section-two'>
            <ul>
                <li>
                  <a href='/'>
                  Home
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/></svg>                  </a>
                  <div className='header-section-two-dropdown'>
                    <ul>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href='/'>Find Jobs<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/></svg></a>
                <div className='header-section-two-dropdown'>
                    <ul>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href='/'>Employers<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/></svg></a>
                <div className='header-section-two-dropdown'>
                    <ul>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href='/'>Candidates<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/></svg></a>
                <div className='header-section-two-dropdown'>
                    <ul>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href='/'>Blog<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/></svg></a>
                <div className='header-section-two-dropdown'>
                    <ul>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href='/'>Pages<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/></svg></a>
                <div className='header-section-two-dropdown'>
                    <ul>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Home</a></li>
                    </ul>
                  </div>
                </li>
            </ul>
        </div>
        <div className='header-section-three'>
          <button className='header-section-three-one' onClick={() => props.showSign()}>
            <span>Login</span>
            <span>/</span>
            <span>Register</span>
          </button>
          <button className='header-section-three-two'>Add Job</button>
        </div>
        <div className='header-section-three-mobile'>
        <box-icon name='user'></box-icon>
        <box-icon name='bell'></box-icon>
        <box-icon name='menu-alt-right' onClick={() => props.setShow(true)}></box-icon>
        </div>
    </div>
  )
}
