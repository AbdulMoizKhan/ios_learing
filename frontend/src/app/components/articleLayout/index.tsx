import { Avatar, Box, Container, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Header } from "../header";
import Image from "next/image";
import { Footer } from "../footer";

interface BlogLayoutProps {
    data: {
        heading: string;
        paragraph: string[];
        author: string;
        authorName: string;
        cover: string;
        minRead: string;
        publishDate: string;
        newBlog?: boolean;
        headText: {
            head: string;
            text: string[];
            level: 1 | 2 | 3 | 4 | 5;
            undorderdList: {
                text: string;
                heading?: string;
                level?: 1 | 2 | 3 | 4 | 5 | undefined;
            }[];
            undorderdList2: {
                text: string;
                heading: string;
                level: 1 | 2 | 3 | 4 | 5 | undefined;
            }[];
            orderedList: { text: string }[];
            paragraphs: string[];
        }[];
        table?: {
            columns: { text: string; dataKey: string }[];
            data: { [key: string]: string }[];
        };
        meta?: { [key: string]: string };
    };
}

const ArticleLayout = ({ data }: BlogLayoutProps) => {
    return (
        <>
            <Header />
            <Container sx={{ maxWidth: '680px !important' }}>
                <Box>
                    <Typography variant="h3">{data.heading}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' , columnGap:'12px', alignItems:'center' , marginTop:'30px'}}>
                        <Avatar><Image src={data?.author} alt="author" width={50} height={50} /></Avatar>
                        <Box>
                            <Typography variant="subtitle1">{data.authorName}</Typography>
                            <Typography variant="subtitle1">{data.minRead} - {data.publishDate}</Typography>
                        </Box>
                    </Box>
                    <img src={data.cover} alt="Cover" className="mtop40"/>
                    <Typography variant="body1" className="mtop40">{data.paragraph}</Typography>
                    {data.headText.map((section, index) => (
                        <Box key={index}>
                            <Typography variant="h4" sx={{marginTop:'40px'}}>{section.head}</Typography>
                            {section?.text?.map((paragraph, index) => (
                                <Typography key={index} variant="body1" dangerouslySetInnerHTML={{ __html: paragraph }} />
                            ))}
                            <List>
                                {section?.undorderdList?.map((list, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', padding: 0 , listStyle:'disc'}}>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" dangerouslySetInnerHTML={{ __html: list.text }} />
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ))}
                    {/* Render other properties as needed */}
                </Box>
            </Container>
            <Divider sx={{ borderColor: '#000', margin: '40px 0px' }} />
            <Footer />
        </>
    );
};

export default ArticleLayout;