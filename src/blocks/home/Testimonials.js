import React, { useEffect } from 'react';
import Swiper from 'swiper';

import TestimonialsData from '../../data/testimonials/testimonialsData.json';

const Testimonials = () => {
    useEffect(() => {
        new Swiper( '.adv-slider-reviews .adv-swiper-container', {
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            pagination: {
                bulletClass: 'adv-swiper-pagination-bullet',
                bulletActiveClass: 'adv-swiper-pagination-bullet-active',
                modifierClass: 'adv-swiper-pagination-',
                currentClass: 'adv-swiper-pagination-current',
                totalClass: 'adv-swiper-pagination-total',
                hiddenClass: 'adv-swiper-pagination-hidden',
                progressbarFillClass: 'adv-swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'adv-swiper-pagination-progressbar-opposite',
                clickableClass: 'adv-swiper-pagination-clickable',
                lockClass: 'adv-swiper-pagination-lock',
                el: '.adv-swiper-pagination-2',
                clickable: true
            },
            speed: 600,
            parallax: true
        } );
    },[]);

    return (
        <div id="testimonials" className="block bg-gray-light spacer m-top-xl p-top-xl p-bottom-xl reviews-width-img" style={ { backgroundImage: `url('assets/img/demo/13_img.png')` } }>
            <div className="wrapper">
                <div className="adv-slider-reviews">
                    <div className="adv-slider-reviews-img">
                        <img src="assets/img/demo/12_img.png" alt="Icon" />
                    </div>

                    <div className="adv-swiper-container">
                        <div className="adv-swiper-wrapper reviews-items">
                            { TestimonialsData && TestimonialsData.map ( ( item, key ) => {
                                return (
                                    <div key={ key } className="adv-swiper-slide reviews-item">
                                        <div className="reviews-item-img" data-swiper-parallax="-400">
                                            <img src={ item.imgSrc } alt={ item.author } />
                                        </div>
        
                                        <h4 className="reviews-item-t-head" data-swiper-parallax="-300">{ item.author }</h4>
        
                                        <p className="reviews-item-positions" data-swiper-parallax="-200">{ item.position }</p>
        
                                        <div className="reviews-item-description" data-swiper-parallax="-100">
                                            <p>{ item.text }</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="adv-swiper-pagination-2 no-space"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
