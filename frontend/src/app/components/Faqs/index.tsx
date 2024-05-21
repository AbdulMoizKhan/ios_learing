import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

const faqData = [
    {
        question: 'What is Next.js?',
        answer: 'Next.js is a React framework for production.'
    },
    {
        question: 'What is Material-UI?',
        answer: 'Material-UI is a popular React UI framework.'
    },
];

const FaqSection = () => {
    return (
        <div>
            <Container>
                <Typography variant='h3' textAlign={'center'}>FAQs</Typography>
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
