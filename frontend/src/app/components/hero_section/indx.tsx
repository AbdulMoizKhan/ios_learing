import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    hight:'60vh'
                }}>
                    {/* margin: 10px 0 20px 0; */}
                    <Stack direction={'column'} alignItems={'center'} sx={{ width: 'max-content' }}>
                        <Typography variant="h3" sx={{margin:'5px 0 15px 0px'}}>iOS LEAD ESSENTIALS <br /> ALL SEATS <span style={{ color: '#fa6928' }}>SOLD OUT</span></Typography>
                        <Typography variant="h6">But don't worry! The next one is coming soon.</Typography>
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
                        <Typography variant="subtitle1" sx={{color:'#e9e9e9'}}> We'll keep you posted by email.</Typography>
                        <Typography variant="body2" sx={{color:'#9c9c9c'}}>Privacy Policy</Typography>
                    </Stack>
                </Box>
            </Container>
        </div>
    )
}

export default HeroSection
