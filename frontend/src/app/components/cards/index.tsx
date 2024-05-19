"use client"; // This must be the first line in the file
import { Box, Card, Stack, Typography } from "@mui/material"
import Image from "next/image";

interface CardsProps {
  videoSource?: any;
  cardTitle?: string;
  type: string
  cardDescription?: string
  articleLink?: string
  articleTitle?: string
  articleDescription?: string
  key?: any
}

export const CardsService = ({ videoSource, cardTitle, type, cardDescription, articleLink, articleTitle, articleDescription, key }: CardsProps) => {
  return (
    <>
      {type === "youtube" && 
      <Card variant="outlined" className="cards"
        sx={{
          height: {xs:'300px',md:"285px"},
          width: {xs:'400px',md:'580px'},
          boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.05)',
          background: '#000',
          borderRadius: 7,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
          <Stack direction={"column"} spacing={2}>
            <iframe src={videoSource} className="iframe"
              title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', paddingLeft: '20px' }} className="cardhead">{cardTitle}</Typography>
          </Stack>
      </Card >}
      {type === "article" &&
        <Card variant="outlined" className="cards"
          sx={{
            height: "290px",
            width: '340px',
            boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.05)',
            background: '#171716',
            borderRadius: 7,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            rowGap: '10px'
          }}
          onClick={() => {
            window.open(articleLink, '_blank')
          }}
        >
          <Box sx={{ padding: '0px 20px' }}>
            <Stack direction={"column"} spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }} className="cardhead">{articleTitle}</Typography>
              <Typography variant="body1" sx={{ color: '#4A5568', fontSize: 14, fontFamily: 'Inter', fontWeight: '400' }}>{articleDescription}</Typography>
            </Stack>
          </Box>
        </Card >
      }
    </>
  );
};