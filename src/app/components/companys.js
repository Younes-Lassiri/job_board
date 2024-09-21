'use client';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import companyone from '/public/images/company_one.jpg';
import companytwo from '/public/images/company_two.jpg';
import companythree from '/public/images/company_three.jpg';
import companyfour from '/public/images/company_four.jpg';
import companyfive from '/public/images/company_five.jpg';
import companysix from '/public/images/company_six.jpg';
import companyseven from '/public/images/company_seven.jpg';
import companyeight from '/public/images/company_eight.jpg';
import Image from 'next/image';
export default function Companys() {
    const companys = [
        { image: companyone, name: 'Employer' },
        { image: companytwo, name: 'Uperwork' },
        { image: companythree, name: 'Invision' },
        { image: companyfour, name: 'Stripe' },
        { image: companyfive, name: 'Sagments' }
    ];
    return(
        <div className='companys-section'>
            <div className='jobs-section-one'>
                <div className='jobs-section-one-left'>
                <h1>Top Company Registered​</h1>
                <p>Some of the companies we’ve helped recruit excellent applicants over the years.</p>
                </div>
                <div className='jobs-section-one-right'>
                <span>Browse All Companys<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1967d2"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg></span>
                </div>
            </div>
            <div className='companys-section-slider-parent'>
            <div className='companys-section-slider'>
            {
                companys.map((item,i) => {
                    return(
                        <div className='companys-slider-item' key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
                            <Image src={item.image} alt='slider_image'/>
                            <h1>{item.name}</h1>
                        </div>
                    )
                })
            }
            </div>
            </div>
        </div>
    )
}