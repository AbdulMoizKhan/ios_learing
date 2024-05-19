"use client"; // This must be the first line in the file
import { Box, Card, Stack, Typography } from "@mui/material"
import Image from "next/image";

interface CardsProps {
  videoSource?: any;
  cardTitle?: string;
  type: string
  cardDescription?: string
  articleLink?:string
  articleTitle?:string
  articleDescription?:string
  key?:any
}

export const CardsService = ({ videoSource, cardTitle, type, cardDescription,articleLink,articleTitle,articleDescription,key }: CardsProps) => {
  return (
    <>
      {type === "youtube" && <Card variant="outlined" className="cards"
        sx={{
          height: "285px",
          width: '580px',
          boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.05)',
          background: '#000',
          borderRadius: 7,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{}}>
          {/* <div style={{ width: 58, height: 58, background: '#FAFAFA', borderRadius: 9999, border: '1px #F76680 solid' }}>
          {imgSource && <Image src={imgSource} alt="" style={{ width: 34, height: 34, padding: '12px' }} />}
          {imgLogo && <div style={{
            padding: '12px',
            color: '#7082ff'
          }}>
            {imgLogo}
          </div>
          }
        </div> */}
          <Stack direction={"column"} spacing={2}>
            <iframe width="580" height="230" src={videoSource} style={{}}
              title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', paddingLeft: '20px' }} className="cardhead">{cardTitle}</Typography>
            {/* <Typography variant="body1" sx={{ color: '#4A5568', fontSize: 14, fontFamily: 'Inter', fontWeight: '400' }}>{cardDescription}</Typography> */}
          </Stack>
        </Box>
      </Card >}
      {type === "article" &&
        <Card variant="outlined" className="cards"
          sx={{
            height: "290px",
            width: '340px',
            boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.05)',
            background:'#000',
            borderRadius: 7,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            rowGap: '10px'
          }}
          onClick={() => {
            console.log('articleLink',articleLink)
            window.open(articleLink, '_blank')
          }}
        >
          <Box sx={{ padding: '0px 20px' }}>
            <Stack direction={"column"} spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' , color:'#fff' }} className="cardhead">{articleTitle}</Typography>
            <Typography variant="body1" sx={{ color: '#4A5568', fontSize: 14, fontFamily: 'Inter', fontWeight: '400' }}>{articleDescription}</Typography>
            </Stack>
          </Box>
        </Card >
      }
    </>
  );
};