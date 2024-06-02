import React from 'react';
import { Container, Divider } from '@mui/material';
import { Header } from '@/app/components/header';
import HeroSection from '@/app/components/hero_section';
import { Carousal } from '@/app/components/carousal';
import Feedback from '@/app/components/feeback';
import FaqSection from '@/app/components/Faqs';
import { Footer } from '@/app/components/footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            <div id='YoutubeVidos'>
                <Carousal
                    type="youtube"
                    backgroundColor="white"
                    slidesPerView={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1390: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    delay={{
                        delay: 5000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                />
            </div>
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            <div id='Article'>
                <Carousal
                    type="article"
                    backgroundColor="black"
                    slidesPerView={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 90,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1390: {
                            slidesPerView: 4,
                            spaceBetween: 80,
                        },
                    }}
                    delay={{ delay: 10000 }}
                />
            </div>
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            <div id='Experiences'>
                <Feedback />
            </div>
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            <FaqSection />
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            <Footer />
        </div>
    );
};

export default HomePage;
