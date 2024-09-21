'use client';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import reviewone from '/public/images/review_one.jpg';
import reviewtwo from '/public/images/review_two.jpg';
import reviewthree from '/public/images/review_three.jpg';
import Image from 'next/image';
export default function Reviews() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
    <div className='reviews-section'>
        <h1>Testimonials From Our Customers</h1>
        <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</p>
      <Slider {...settings} className='reviews-section-slider-main'>
        <div className='reviews-section-item'>
            <div className='reviews-section-item-one'>
                <Image src={reviewone} alt='review_user_image'/>
            </div>
            <div className='reviews-section-item-two'>
                <h3>Great quality!</h3>
                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                <div className='reviews-section-item-two-infos'>
                    <h2>Brooklyn Simmons</h2>
                    <span>Web Developer</span>
                </div>
            </div>
        </div>
        <div className='reviews-section-item'>
            <div className='reviews-section-item-one'>
                <Image src={reviewtwo} alt='review_user_image'/>
            </div>
            <div className='reviews-section-item-two'>
                <h3>Good Jobs!</h3>
                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                <div className='reviews-section-item-two-infos'>
                    <h2>Ronald Richards</h2>
                    <span>Web Developer</span>
                </div>
            </div>
        </div>
        <div className='reviews-section-item'>
            <div className='reviews-section-item-one'>
                <Image src={reviewthree} alt='review_user_image'/>
            </div>
            <div className='reviews-section-item-two'>
                <h3>Great quality!</h3>
                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                <div className='reviews-section-item-two-infos'>
                    <h2>Ashley Jenkins</h2>
                    <span>Web Developer</span>
                </div>
            </div>
        </div>
        <div className='reviews-section-item'>
            <div className='reviews-section-item-one'>
                <Image src={reviewone} alt='review_user_image'/>
            </div>
            <div className='reviews-section-item-two'>
                <h3>Great quality!</h3>
                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                <div className='reviews-section-item-two-infos'>
                    <h2>Brooklyn Simmons</h2>
                    <span>Web Developer</span>
                </div>
            </div>
        </div>
      </Slider>
    </div>
  )
}
