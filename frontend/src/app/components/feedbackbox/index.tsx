import { Avatar, Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

interface FeedbackBoxProps {
    message: string;
    location: string;
    name: string;
    profession: string;
}
const FeedbackBox = ({ message, location, name, profession,  }: FeedbackBoxProps) => {
    return (
        <>
            <Container>
                <Box>
                    <Stack direction={'row'} justifyContent={'center'}>
                        <Box sx={{}}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <Avatar sx={{
                                    marginBottom: '10px',
                                    border: '6px solid #fa6927',
                                    height: '150px',
                                    width: '150px',

                                }}>All</Avatar>
                                <Typography variant='h5'>{name}</Typography>
                                <Typography variant='h5'>{profession}</Typography>
                                <Typography variant='h6'>{message}</Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default FeedbackBox
