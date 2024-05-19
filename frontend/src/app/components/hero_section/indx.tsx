import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <Container sx={{height:'50vh'}}>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:'100%'
                }}>
                    <Stack direction={'row'}>
                        <Box sx={{ width: '50%' }}>
                            <Stack direction={'column'} spacing={3}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#fff' }}>Online training program for iOS developers who want to become
                                complete senior developers and be one of the most wanted and <span>highest-paid iOS devs</span> in the world.</Typography>
                            <Button variant="contained" sx={{
                            background: 'linear-gradient(45deg, rgb(244, 55, 36), #ff400b, #ff905e)',
                            maxWidth:'175px'
                            }}>Learn More</Button>
                            </Stack>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            {/* <img src={hero} alt="hero" /> */}
                        </Box>
                    </Stack>

                </Box>
                {/* <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    hight:'60vh'
                }}>
                    <Stack direction={'column'} alignItems={'center'} sx={{ width: 'max-content' }}>
                        <Typography variant="h3" sx={{margin:'5px 0 15px 0px'}}>iOS LEAD ESSENTIALS <br /> ALL SEATS <span style={{ color: '#fa6928' }}>SOLD OUT</span></Typography>
                        <Typography variant="h6">But don&apos;t worry! The next one is coming soon.</Typography>
                        <Typography variant="h6">Sign up by email below to be notified:</Typography>
                        <TextField placeholder='Enter Your Email-Address' hiddenLabel sx={{ width: '100%', background: 'white',  margin:'20px 0px 5px 0px'}} />
                        <Button sx={{
                            clear: 'both',
                            color: 'white',
                            width: '100%',
                            display: 'inline-block',
                            margin: '10px 0 20px 0',
                            whiteSpace: 'normal',
                            fontSize: '20px',
                            padding: '10px 20px !important',
                            background: 'linear-gradient(45deg, rgb(244, 55, 36), #ff400b, #ff905e)',
                            border: '1px solid rgba(255, 79, 0, 0.3)',
                            boxShadow: 'rgba(255, 79, 0, 0.2) 0px 20px 20px -7px',
                        }}>Tell me more</Button>
                        <Typography variant="subtitle1" sx={{color:'#e9e9e9'}}> We&apos;ll keep you posted by email.</Typography>
                        <Typography variant="body2" sx={{color:'#9c9c9c'}}>Privacy Policy</Typography>
                    </Stack>
                </Box> */}
            </Container>
        </div>
    )
}

export default HeroSection
