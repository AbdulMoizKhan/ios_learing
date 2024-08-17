import { Avatar, Box, Container, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface FeedbackBoxProps {
    message: string;
    name: string;
    profession: string;
    image: any
}
const FeedbackBox = ({ message, name, profession, image }: FeedbackBoxProps) => {
    return (
        <>
            <Container>
                <Box>
                    <Stack direction={'row'} justifyContent={'center'}>
                        <Box sx={{}}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <Avatar sx={{
                                    marginBottom: '10px',
                                    border: '6px solid #fd5757',
                                    height: '150px',
                                    width: '150px',
                                }}><Image src={image} alt='z' style={{ height: 'inherit' }}></Image></Avatar>
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
