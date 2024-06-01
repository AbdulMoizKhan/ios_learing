import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

const faqData = [
    {
        question: 'What is Izafah Bootcamp?',
        answer: 'Izafah Bootcamp is an Edtech platform that offers training in the latest tech stacks and provides mentorship to students, professionals, and aspiring developers'
    },
    {
        question: 'Who are the courses and trainings designed for?',
        answer: 'Our courses and training are designed for various learners, including beginners, intermediate learners, and advanced professionals looking to upgrade their skills.'
    },
    {
        question: 'What kind of tech stacks do you teach?',
        answer: 'We cover a wide range of tech stacks, including but not limited to, web development, mobile development, data science, machine learning, cloud computing, and DevOps.'
    },
    {
        question: 'How are the courses and training structured?',
        answer: 'Our courses include video lectures, live sessions, hands-on projects, and assessments to ensure comprehensive learning.'
    },
    {
        question: 'What is the duration of each course?',
        answer: 'Course durations vary, but most boot camps are designed to be completed within 8-12 weeks, depending on the intensity and the level of the course.'
    },
    {
        question: 'How do our boot-camps work?',
        answer: 'Our boot camps are primarily online and on-site both, with live sessions conducted by experienced instructors. You’ll have access to recorded lectures and collaborative learning platforms.'
    },
    {
        question: 'Do you offer part-time courses or tech training?',
        answer: ' Yes, we offer both full-time and part-time courses to accommodate different schedules.'
    },
    {
        question: 'Are the courses self-paced or instructor-led?',
        answer: 'We offer both self-paced courses and instructor-led bootcamps to cater to different learning preferences.'
    },
];

const FaqSection = () => {
    return (
        <div>
            <Container>
                <Typography variant='h3' textAlign={'center'} sx={{paddingBottom:'10px'}}>FAQs</Typography>
                {faqData.map((faq, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            sx={{background:'black', border:'solid 1px white'}}
                            expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{background:'grey'}}>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </div>
    );
};

export default FaqSection;
