import { Box, Button, Container, Stack, SxProps, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import hero from '../../../../public/hero.jpg';

const heroStack: SxProps = {
    // display: 'flex',
    // flexDirection: { xs: 'column-reverse', md:'row' },
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    display:'flex',
    flexDirection: 'column',
    alignItems:'center'
    // maxWidth:'400px'
};
const box1: SxProps = {
    width: { xs: '100%' },
    position: 'absolute',
    zIndex: '1',
}
const box2: SxProps = {
    width: { xs: '100%' },
    pt: { xs: '20px', md: '0px' },
    position: 'relative'
}

const HeroSection = () => {
    return (
        <div>
            <Container sx={{ height: '50vh' , position:'absolute' , zIndex:'1', maxWidth:'100% !important'  }}>
                <Box sx={heroStack}>
                    <Stack direction={'column'} spacing={3} sx={{ height: '100%', maxWidth:'500px' }} justifyContent={'center'} alignItems={{ xs: "center" }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#fff' , textAlign:'center' }}>At Izafatech, we're dedicated to empowering tech enthusiasts of all ages to become digital superheroes.  
                        <span style={{ color: '#d6fc3c' }}> "Wow, I built that!"</span>,  we're here to ensure you don’t just learn tech, but love it. Let’s build amazing things and maybe break the internet (just a little)!</Typography>
                        <Button variant="contained" sx={{
                            background: '#d6fc3c',
                            color: '#000',
                            transition: '0.3s',
                            maxWidth: '175px',
                            minWidth: '175px',
                            "&:hover": {
                                color: '#000',
                                background: '#fff'
                            },
                        }}>Learn More</Button>
                    </Stack>
                </Box>
            </Container>
            <Image src={hero} alt="hero" width={576} style={{ maxWidth: '-webkit-fill-available', height: '50vh', width: '100%', position: 'relative', filter:'brightness(0.5)' }} />
        </div>
    )
}

export default HeroSection
