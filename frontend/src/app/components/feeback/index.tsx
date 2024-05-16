import React from 'react'
import FeedbackBox from '../feedbackbox'
import { Box, Button } from '@mui/material';

const Feedback = () => {
    const feedbackMap = [
        {
            name: "Henry Chan",
            profession: "iOS Software Engineer",
            location: "🇺🇸",
            message: "The iOS Lead Essentials is a differentiator. It helped me gain a concrete understanding of architecture, and I was able to land a job at one of the big four (FANG) companies! Thank you, Mike and Caio."
        },
        {
            name: "Michael Zarmakoupis",
            profession: "iOS Developer",
            location: "🇬🇷🇳🇱",
            message: "By following the concepts in the iOS Lead Essentials training, I escaped a dead-end job and started receiving offers I never thought I would. Companies in Greece, UK, Germany, Holland, and Luxembourg were eager to hire me, so I could negotiate and choose the best option. I chose Holland for now. Thank you very much, Caio and Mike!"
        },
        {
            name: "Luke Jones",
            profession: "iOS Developer",
            location: "🇬🇧",
            message: "The iOS Lead Essentials has added incredible value to my career. I'm pretty certain I wouldn't have landed my current role if it wasn't for the program. The amount of depth you guys go into and the minutiae that are discussed is, at times, mind-blowing. I think with how you guys pair up and openly express your opinions, sometimes taking one route and then going back to take a different route has so much value."
        },
        {
            name: "Christophe Bugnon",
            profession: "iOS Developer",
            location: "🇫🇷",
            message: "I got my current job thanks to the work Caio and Mike did with the course. My mentor at work said I've actually the skill of an iOS developer with 5 years of experience when I had only one year as a junior. It was lots of work but Caio and Mike made me love to code and now I'm really passionate and love my work. I'm so happy to have bought this program. I'll always be grateful to you. Keep going, you help so many people!"
        },
        {
            name: "Maurício Maniglia",
            profession: "Senior iOS Developer",
            location: "🇧🇷",
            message: "Last Friday I had a tech-interview and on the same day they offered me more than double what I was making on my current job. I ended up accepting. The funny thing is that it was in the same week that we did the mentoring session. It went very smoothly."
        },
        {
            name: "Saalis Umer",
            profession: "iOS Senior Software Engineer",
            location: "🇮🇳",
            message: "I am joining Uber as a Senior Software Engineer in Bangalore, India because of the iOS Lead Essentials program. I got the best salary in India for devs - close to or even above Google. I am really thankful to both of you. You have changed my and my family's life!"
        },
        {
            name: "Rodrigo Manguinho",
            profession: "CTO & Lead Software Architect",
            location: "🇧🇷",
            message: "I thought I was a senior iOS developer until I found the Essential Developer channel. I used to hate writing unit tests because I never found someone who could prove to me why it really mattered. Now I can't imagine myself creating a project without using TDD. I really think all developers (even from other platforms) should watch their course. Of course, it's for iOS developers, but there is so much content about architecture and best practices. I find myself watching and rewatching the lectures over and over again."
        },
        {
            name: "Andrew Warwick",
            profession: "iOS Developer",
            location: "🇬🇧",
            message: "iOS Lead Essentials is by far the best online iOS course I've taken, and I've tried a lot. Watching Caio and Mike develop an app—and clearly explaining not only 'how', but 'why' they are doing things—makes learning some challenging concepts clear. I've learned how to truly separate code into different modules and to test parts of an app that I had never been able to figure out before. I've gone through the whole course at least twice (with some sections more than that), and every run-through reveals more compelling insights I had previously missed."
        }
    ];

    return (
        <>
            {feedbackMap.map((item, index) => (
                <FeedbackBox
                    index={index}
                    name={item.name}
                    profession={item.profession}
                    location={item.location}
                    message={item.message}
                />
            )
            )}
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <Button sx={{
                    clear: 'both',
                    width: '100%',
                    display: 'inline-block',
                    margin: '0 auto',
                    whiteSpace: 'normal',
                    fontSize: '26px',
                    padding: '15px 20px!important',
                    borderRadius: '4px',
                    maxWidth: '450px',
                    background: '#fa6928',
                    color: '#fff',
                    '&:hover': {
                        background: '#f9580f', 
                    }
                }}>
                    Click to see more success stories from our students
                </Button>
            </Box>
        </>
    )
}

export default Feedback
