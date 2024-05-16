import { Avatar, Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

interface FeedbackBoxProps {
    message: string;
    location: string;
    name: string;
    profession: string;
    index: number
}
const FeedbackBox = ({ message, location, name, profession , index}: FeedbackBoxProps) => {
    return (
        <>
            <Container>
                <Box>
                    <Stack direction={'row'}>
                        <Box sx={{ width: '30%' }}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <Avatar sx={{
                                    marginBottom: '10px',
                                    border: '6px solid #fa6927',
                                    height: '150px',
                                    width: '150px',

                                }}>H</Avatar>
                                <Typography variant='h5'>{location} {name}</Typography>
                                <Typography variant='h5'>{profession}</Typography>
                            </Stack>
                        </Box>
                        <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant='h6'>{message}</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Container>
            <Divider sx={{ borderColor: '#303030b0', margin: '40px 0px' }}></Divider>
        </>
    )
}

export default FeedbackBox
