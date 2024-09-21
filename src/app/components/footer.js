import React from 'react'
import Image from 'next/image';
import logo from '/public/images/logo.png';
export default function Footer() {
  return (
    <div className='footer-section'>
      <div className='footer-section-main'>
      <div className='footer-section-one'>
        <Image src={logo} alt='logo'/>
        <h1>Call us</h1>
        <h2>+212 603927836</h2>
        <p>328 Queensberry Street, North Melbourne<br></br>VIC 3051, Australia.</p>
        <span>youneslassirifreelance@gmail.com</span>
      </div>
      <div className='footer-section-two'>
        <h1>For Candidates</h1>
        <ul>
            <li><a href='/'>Browse Jobs</a></li>
            <li><a href='/'>Browse Candidates</a></li>
            <li><a href='/'>Candidate Dashboard</a></li>
            <li><a href='/'>Job Alerts</a></li>
            <li><a href='/'>My Bookmarks</a></li>
        </ul>
      </div>
      <div className='footer-section-two'>
        <h1>For Employers</h1>
        <ul>
            <li><a href='/'>All Employers</a></li>
            <li><a href='/'>Employer Dashboard</a></li>
            <li><a href='/'>Submit Job</a></li>
            <li><a href='/'>Job Packages</a></li>
            <li><a href='/'>Job Packages</a></li>
        </ul>
      </div>
      <div className='footer-section-two'>
        <h1>About Us</h1>
        <ul>
            <li><a href='/'>Contact Us</a></li>
            <li><a href='/'>About Us</a></li>
            <li><a href='/'>Terms</a></li>
            <li><a href='/'>Packages</a></li>
            <li><a href='/'>FAQ</a></li>
        </ul>
      </div>
      <div className='footer-section-two'>
        <h1>Helpful Resources</h1>
        <ul>
            <li><a href='/'>Site Map</a></li>
            <li><a href='/'>Terms of Use</a></li>
            <li><a href='/'>Privacy Center</a></li>
            <li><a href='/'>Security Center</a></li>
            <li><a href='/'>Accessibility Center</a></li>
        </ul>
      </div>
      <div className='footer-section-main-one'>
        <div className='footer-section-main-one-paragraph'><p>© 2024 Younes. All Right Reserved.</p></div>
        <div className='footer-section-main-one-social'>
            <box-icon type='logo' name='facebook'></box-icon>
            <box-icon type='logo' name='twitter'></box-icon>
            <box-icon name='linkedin' type='logo'></box-icon>
            <box-icon name='instagram' type='logo'></box-icon>
        </div>
      </div>
      </div>
    </div>
  )
}
