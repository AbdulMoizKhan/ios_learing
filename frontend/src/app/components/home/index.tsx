import React from 'react'
import { Container, Divider } from '@mui/material';
import HeroSection from '../hero_section/indx';
import { Header } from '../header';
import { Footer } from '../footer';
import LeadEssentials from '../LeadEssentials';
import Checklist from '../checklist';
import Feedback from '../feeback';
import { Carousal } from '../carousal';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <Divider sx={{ borderColor: '#1a1a1a', margin: '40px 0px' }}></Divider>
            {/* <LeadEssentials/> */}
            <Carousal 
            type={"youtube"}
            />
            <Divider sx={{ borderColor: '#1a1a1a', margin: '40px 0px' }}></Divider>
            <Carousal
            type={"article"}
            />
            <Divider sx={{ borderColor: '#1a1a1a', margin: '40px 0px' }}></Divider>
            {/* <Checklist/> */}
            <Feedback/>
            <Divider sx={{ borderColor: '#1a1a1a', margin: '40px 0px' }}></Divider>
            <Footer/>
        </div>
    )
}

export default HomePage
