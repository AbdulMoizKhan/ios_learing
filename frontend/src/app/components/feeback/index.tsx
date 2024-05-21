import React from 'react'
import FeedbackBox from '../feedbackbox'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import person1 from '../../../../public/person1.jpg';
import person2 from '../../../../public/person2.jpg';
import person3 from '../../../../public/person3.jpg';
const Feedback = () => {
    const feedbackMap = [
        {
            name: "Abdul Karim Khan",
            profession: "iOS Software Engineer",
            Image: person1,
            message: "The iOS Lead Essentials is a differentiator. It helped me gain a concrete understanding of architecture, and I was able to land a job at one of the big four (FANG) companies! Thank you, Mike and Caio."
        },
        {
            name: "Faraj",
            profession: "iOS Developer",
            Image: person2,
            message: "The iOS Lead Essentials is a differentiator. It helped me gain a concrete understanding of architecture, and I was able to land a job at one of the big four (FANG) companies! Thank you, Mike and Caio."
        },
        {
            name: "Luke Jones",
            profession: "iOS Developer",
            Image: person3,
            message: "0The iOS Lead Essentials has added incredible value to my career. I’m certain I wouldn’t have landed my current role without this program. Thank you, Caio and Mike!"
        }
    ];

    return (
        <>
            <Container>
                <Typography variant='h3' align='center' sx={{ paddingBottom: '20px'}}>Team Members</Typography>
                <Grid container spacing={3} >
                    {feedbackMap.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <FeedbackBox
                                name={item.name}
                                profession={item.profession}
                                image={item.Image}
                                message={item.message}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Feedback
