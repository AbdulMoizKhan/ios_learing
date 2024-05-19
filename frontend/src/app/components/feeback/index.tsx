import React from 'react'
import FeedbackBox from '../feedbackbox'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import person1 from '../../../../public/person1.jpg';
import person2 from '../../../../public/person2.jpg';
import person3 from '../../../../public/person3.jpg';
const Feedback = () => {
    const feedbackMap = [
        {
            name: "Henry Chan",
            profession: "iOS Software Engineer",
            Image: person1,
            message: "The iOS Lead Essentials is a differentiator. It helped me gain a concrete understanding of architecture, and I was able to land a job at one of the big four (FANG) companies! Thank you, Mike and Caio."
        },
        {
            name: "Michael Zarmakoupis",
            profession: "iOS Developer",
            Image: person2,
            message: "The iOS Lead Essentials is a differentiator. It helped me gain a concrete understanding of architecture, and I was able to land a job at one of the big four (FANG) companies! Thank you, Mike and Caio."
        },
        {
            name: "Luke Jones",
            profession: "iOS Developer",
            Image: person3,
            message: "Message: The iOS Lead Essentials has added incredible value to my career. I’m certain I wouldn’t have landed my current role without this program. Thank you, Caio and Mike!"
        },
        {
            name: "Christophe Bugnon",
            profession: "iOS Developer",
            Image: person3,
            message: "Thanks to the iOS Lead Essentials, I got my current job. My mentor said I have the skills of a developer with 5 years of experience after only one year. I’m very grateful."
        },
        {
            name: "Maurício Maniglia",
            profession: "Senior iOS Developer",
            Image: person3,
            message: "After a tech interview, I received an offer more than double my current salary. I accepted the same day. The mentoring session was invaluable. Thank you, Caio and Mike!"
        },
        {
            name: "Saalis Umer",
            profession: "iOS Senior Software Engineer",
            Image: person3,
            message: "I am joining Uber in Bangalore, India as a Senior Software Engineer because of the iOS Lead Essentials program. I received the best salary in India for devs. Thank you!"
        }
    ];

    return (
        <>
            <Container>
                <Typography variant='h3' align='center' sx={{ paddingBottom: '20px'}}>Tesimonial</Typography>
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
