import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const LeadEssentials = () => {
    return (
        <>
            <Container>
                <Box>
                    <Stack direction={'row'}>
                        <Box sx={{ width: '20%' }}></Box>
                        <Box sx={{ width: '80%' , maxWidth:'750px'}}>
                            <Typography variant='h4' sx={{fontWeight:'900'}}>THE <span style={{color: '#fa6928'}}>iOS LEAD ESSENTIALS</span> PROGRAM</Typography>
                            <Typography variant='h5' align='left'>is an online training program for iOS developers who want to 
                             <span style={{fontWeight:'bold'}}> become complete senior developers and be one of the most wanted and highest-paid iOS devs in the world.</span>
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} sx={{marginTop:'50px'}} justifyContent={'center'}>
                        <Box >
                            <Typography variant='h5' align='center'>Check out some of our students 👇 </Typography>
                            <iframe width="560" height="315" style={{paddingTop:'20px'}}
                            src="https://www.youtube.com/embed/nHUMItG_70E?si=y5aTqQQ9wgbZyYaS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default LeadEssentials
