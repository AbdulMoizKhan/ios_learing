import React from 'react'
import { Container, Divider } from '@mui/material';
import HeroSection from '../hero_section/indx';
import { Header } from '../header';
import LeadEssentials from '../LeadEssentials';
import Checklist from '../checklist';
import Feedback from '../feeback';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <Divider sx={{ borderColor: '#1a1a1a', margin: '40px 0px' }}></Divider>
            <LeadEssentials/>
            <Divider sx={{ borderColor: '#1a1a1a', margin: '40px 0px' }}></Divider>
            <Checklist/>
            <Divider sx={{ borderColor: '#1a1a1a', margin: '40px 0px' }}></Divider>
            <Feedback/>
        </div>
    )
}

export default HomePage
