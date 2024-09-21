'use client';
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import job from '/public/images/company_six.jpg';
export default function Categorie() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
  return (
    <div className='categorie-section'>
        <div className='categorie-section-one'>
            <h1>Popular Job Categories</h1>
            <p>2020 jobs live – 293 added today.</p>
        </div>
        <div className='categorie-section-two'>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon name='money-withdraw'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Accounting / Finance</h1>
                    <span>(1 open position)</span>
                </div>
            </div>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon type='solid' name='megaphone'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Marketing</h1>
                    <span>(5 open positions)</span>
                </div>
            </div>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon type='solid' name='edit'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Design</h1>
                    <span>(7 open positions)</span>
                </div>
            </div>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon name='code-block'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Development</h1>
                    <span>(6 open positions)</span>
                </div>
            </div>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon name='file-find'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Human Ressource</h1>
                    <span>(0 open position)</span>
                </div>
            </div>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon name='code-block'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Project Management</h1>
                    <span>(1 open position)</span>
                </div>
            </div>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon name='support'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Customer Service</h1>
                    <span>(4 open positions)</span>
                </div>
            </div>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon name='health'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Health and Care</h1>
                    <span>(3 open positions)</span>
                </div>
            </div>
            <div className='categorie-section-two-item'>
                <div className='categorie-section-two-item-left'><div><box-icon type='solid' name='car'></box-icon></div></div>
                <div className='categorie-section-two-item-right'>
                    <h1>Automotive Jobs</h1>
                    <span>(1 open position)</span>
                </div>
            </div>
        </div>
        <div className='recent-jobs-section'>
            <div className='recent-jobs-section-one'>
                <h1>Recent Jobs</h1>
                <p>Know your worth and find the job that qualify your life</p>
            </div>
            <div className='recent-jobs-section-two'>
                <Slider {...settings} className='recent-jobs-section-two-slider'>
                    <div className='recent-jobs-section-two-item'>
                        <div className='recent-jobs-section-two-item-lefttop'>
                            <div className='recent-jobs-section-two-item-lefttop-image'><Image src={job} alt='slider_image'/></div>
                            <div className='recent-jobs-section-two-item-lefttop-infos'>
                                <div className='recent-jobs-section-two-item-lefttop-infos-title'><h1>Assistant / Store keeper</h1></div>
                                <div className='recent-jobs-section-two-item-lefttop-infos-one'>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Automotive Jobs</h1>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h1>
                                </div>
                            </div>
                        <div className='recent-jobs-section-two-item-righttop'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
                        </div>
                        </div>
                        <div className='recent-jobs-section-two-item-bottom'>
                        <div className='jobs-section-two-item-content-two-one'>Full Time</div>
                        <div className='jobs-section-two-item-content-two-two'>Urgent</div>
                        </div>
                    </div>
                    <div className='recent-jobs-section-two-item'>
                        <div className='recent-jobs-section-two-item-lefttop'>
                            <div className='recent-jobs-section-two-item-lefttop-image'><Image src={job} alt='slider_image'/></div>
                            <div className='recent-jobs-section-two-item-lefttop-infos'>
                                <div className='recent-jobs-section-two-item-lefttop-infos-title'><h1>Assistant / Store keeper</h1></div>
                                <div className='recent-jobs-section-two-item-lefttop-infos-one'>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Automotive Jobs</h1>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h1>
                                </div>
                            </div>
                        <div className='recent-jobs-section-two-item-righttop'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
                        </div>
                        </div>
                        <div className='recent-jobs-section-two-item-bottom'>
                        <div className='jobs-section-two-item-content-two-one'>Full Time</div>
                        <div className='jobs-section-two-item-content-two-two'>Urgent</div>
                        </div>
                    </div>
                    <div className='recent-jobs-section-two-item'>
                        <div className='recent-jobs-section-two-item-lefttop'>
                            <div className='recent-jobs-section-two-item-lefttop-image'><Image src={job} alt='slider_image'/></div>
                            <div className='recent-jobs-section-two-item-lefttop-infos'>
                                <div className='recent-jobs-section-two-item-lefttop-infos-title'><h1>Assistant / Store keeper</h1></div>
                                <div className='recent-jobs-section-two-item-lefttop-infos-one'>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Automotive Jobs</h1>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h1>
                                </div>
                            </div>
                        <div className='recent-jobs-section-two-item-righttop'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
                        </div>
                        </div>
                        <div className='recent-jobs-section-two-item-bottom'>
                        <div className='jobs-section-two-item-content-two-one'>Full Time</div>
                        <div className='jobs-section-two-item-content-two-two'>Urgent</div>
                        </div>
                    </div>
                    <div className='recent-jobs-section-two-item'>
                        <div className='recent-jobs-section-two-item-lefttop'>
                            <div className='recent-jobs-section-two-item-lefttop-image'><Image src={job} alt='slider_image'/></div>
                            <div className='recent-jobs-section-two-item-lefttop-infos'>
                                <div className='recent-jobs-section-two-item-lefttop-infos-title'><h1>Assistant / Store keeper</h1></div>
                                <div className='recent-jobs-section-two-item-lefttop-infos-one'>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Automotive Jobs</h1>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h1>
                                </div>
                            </div>
                        <div className='recent-jobs-section-two-item-righttop'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
                        </div>
                        </div>
                        <div className='recent-jobs-section-two-item-bottom'>
                        <div className='jobs-section-two-item-content-two-one'>Full Time</div>
                        <div className='jobs-section-two-item-content-two-two'>Urgent</div>
                        </div>
                    </div>
                    <div className='recent-jobs-section-two-item'>
                        <div className='recent-jobs-section-two-item-lefttop'>
                            <div className='recent-jobs-section-two-item-lefttop-image'><Image src={job} alt='slider_image'/></div>
                            <div className='recent-jobs-section-two-item-lefttop-infos'>
                                <div className='recent-jobs-section-two-item-lefttop-infos-title'><h1>Assistant / Store keeper</h1></div>
                                <div className='recent-jobs-section-two-item-lefttop-infos-one'>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Automotive Jobs</h1>
                                <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h1>
                                </div>
                            </div>
                        <div className='recent-jobs-section-two-item-righttop'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
                        </div>
                        </div>
                        <div className='recent-jobs-section-two-item-bottom'>
                        <div className='jobs-section-two-item-content-two-one'>Full Time</div>
                        <div className='jobs-section-two-item-content-two-two'>Urgent</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}