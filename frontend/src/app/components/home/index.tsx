import React from 'react';
import { Container, Divider } from '@mui/material';
import HeroSection from '../hero_section';
import { Header } from '../header';
import { Footer } from '../footer';
import LeadEssentials from '../LeadEssentials';
// import Checklist from '../checklist';
import Feedback from '../feeback';
import { Carousal } from '../carousal';
import FaqSection from '../Faqs';

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            {/* <LeadEssentials /> */}
            <div id='YoutubeVidos'>
                <Carousal
                    type="youtube"
                    backgroundColor="white"
                    slidesPerView={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1390: {
                            slidesPerView: 3,
                        },
                    }}
                    delay={{ delay: 5000 }}
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
            {/* <Checklist /> */}
            <div id='Experiences'>
                <Feedback />
            </div>
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            <FaqSection/>
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            <Footer />
        </div>
    );
};

export default HomePage;
