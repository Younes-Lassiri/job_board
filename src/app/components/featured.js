import React from 'react';
import Image from 'next/image';
import job from '/public/images/company_six.jpg';
export default function Featured() {
  return (
    <div className='featured-section'>
        <div className='jobs-section-one'>
            <div className='jobs-section-one-left'>
            <h1>Featured Candidates​</h1>
            <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor.</p>
            </div>
            <div className='jobs-section-one-right'>
            <span>Browse All Candidates<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1967d2"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg></span>
            </div>
        </div>
        <div className='featured-section-two'>
            <div className='featured-section-two-item'>
                <div className='featured-section-two-item-image'><Image src={job} alt='candidate_image'/></div>
                <div className='featured-section-two-item-content'>
                    <h1>propaidtool</h1>
                </div>
                <div className='featured-section-two-item-submit'>
                    <button>View Profile</button>
                </div>
            </div>
            <div className='featured-section-two-item'>
                <div className='featured-section-two-item-image'><Image src={job} alt='candidate_image'/></div>
                <div className='featured-section-two-item-content'>
                    <h1>propaidtool</h1>
                </div>
                <div className='featured-section-two-item-submit'>
                    <button>View Profile</button>
                </div>
            </div>
            <div className='featured-section-two-item'>
                <div className='featured-section-two-item-image'><Image src={job} alt='candidate_image'/></div>
                <div className='featured-section-two-item-content'>
                    <h1>propaidtool</h1>
                </div>
                <div className='featured-section-two-item-submit'>
                    <button>View Profile</button>
                </div>
            </div>
            <div className='featured-section-two-item'>
                <div className='featured-section-two-item-image'><Image src={job} alt='candidate_image'/></div>
                <div className='featured-section-two-item-content'>
                    <h1>propaidtool</h1>
                </div>
                <div className='featured-section-two-item-submit'>
                    <button>View Profile</button>
                </div>
            </div>
            <div className='featured-section-two-item'>
                <div className='featured-section-two-item-image'><Image src={job} alt='candidate_image'/></div>
                <div className='featured-section-two-item-content'>
                    <h1>propaidtool</h1>
                </div>
                <div className='featured-section-two-item-submit'>
                    <button>View Profile</button>
                </div>
            </div>
            <div className='featured-section-two-item'>
                <div className='featured-section-two-item-image'><Image src={job} alt='candidate_image'/></div>
                <div className='featured-section-two-item-content'>
                    <h1>propaidtool</h1>
                </div>
                <div className='featured-section-two-item-submit'>
                    <button>View Profile</button>
                </div>
            </div>
        </div>
        <div className='featured-section-three'>
            <div className='featured-section-three-item'>
                <h1>Recruiting</h1>
                <h2>Now</h2>
                <button>View All</button>
            </div>
            <div className='featured-section-three-item-two'>
                <h1>Recruiting</h1>
                <h2>Now</h2>
                <button>View All</button>
            </div>
            <div className='featured-section-three-item-three'>
                <h1>Recruiting</h1>
                <h2>Now</h2>
                <button>View All</button>
            </div>
        </div>
    </div>
  )
}
