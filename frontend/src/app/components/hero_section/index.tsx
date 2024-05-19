import { Box, Button, Container, Stack, SxProps, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import hero from '../../../../public/hero.jpg';

const heroStack: SxProps = {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md:'row' },
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
};
const box1: SxProps = {
    width: {xs:'100%',md:'50%'} 
}
const box2: SxProps = {
    width: {xs:'100%',md:'50%'}, 
    pt:{xs:'20px', md:'0px'}
}

const HeroSection = () => {
    return (
        <div>
            <Container sx={{ height: 'auto' }}>
                <Box sx={heroStack}>
                    <Box sx={box1}>
                        <Stack direction={'column'} spacing={3} sx={{ height: '100%' }} justifyContent={'center'} alignItems={{xs:"center" ,sm:'flex-start' ,md:'flex-start'}}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#fff' }}>Online training program for iOS developers who want to become
                                complete senior developers and be one of the most wanted and <span style={{ color: '#d6fc3c' }}>highest-paid iOS devs</span> in the world.</Typography>
                            <Button variant="contained" sx={{
                                background: '#d6fc3c',
                                color: '#000',
                                transition:'0.3s',
                                maxWidth: '175px',
                                minWidth:'175px',
                                "&:hover": {
                                    color: '#000',
                                    background: '#fff'
                                },
                            }}>Learn More</Button>
                        </Stack>
                    </Box>
                    <Box sx={box2}>
                        <Image src={hero} alt="hero" width={576} style={{ objectFit: 'contain' , maxWidth:'-webkit-fill-available', height:'auto' }} />
                    </Box>

                </Box>
            </Container>
        </div>
    )
}

export default HeroSection
