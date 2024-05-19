"use client"; // This must be the first line in the file

import {
  Box,
  Stack,
  SxProps,
  Drawer,
  IconButton,
  Container,
  Button,
  List,
  ListItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import TextButton from "../text-button";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";

const TextLinks = [
  { title: "Enroll", id: "/" },
  { title: "Testimonials", id: "Experiences" },
  { title: "Course Insights", id: "YoutubeVidos" },
  { title: "Article", id: "Article" },
  { title: "Contact Us", id: "Contactus" }
];

const wrapper: SxProps = {
  boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.10)',
  height: { xs: "60px", sm: "75px", md: "90px" },
  display: "flex",
  alignItems: "center",
  zIndex: 1000,
  position: "relative",
  width: "100%",

};

const btnWrapper: SxProps = {
  borderRadius: "8px",
  background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
};

const navbarWrap: SxProps = {
  mb: { md: 0, xs: 2 },
  mt: { md: 0, xs: 1 },
  display: {
    md: "flex",
    xs: "none",
  },
};

const drawerBtn: SxProps = {
  marginLeft: "auto",
  display: {
    md: "none",
    xs: "flex",
  },
  color: "white",
};
const drawerItems: SxProps = {
  // borderBottom: "1px solid #4b4040",
  padding: "15px 20px",
  display: "block",
  textAlign: "center",
};
// const closeBtn = (variant: string | null | undefined): SxProps => {
//   return {
//     color: variant === "light" ? "text.primary" : "text.secondary",
//     "&:hover": { color: "error.main" },
//   };
// };
// const drawerItems: SxProps = {
//   borderBottom: "1px solid #4b4040",
//   padding: "15px 20px",
//   display: "block",
//   textAlign: "center",
// };

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box sx={wrapper}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image src={logo} alt="" style={{
              width: '162px',
              height: '38px',
              marginTop: '11px',
              color:'white',
            }} />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={5}
              sx={navbarWrap}

            >
              {TextLinks?.map((text) => {
                return (
                  <TextButton
                    title={text.title}
                    hoverColor={"tomato"}
                    id={text.id}
                    key={text.title}
                  />
                );
              })}
            </Stack>

            <IconButton
              sx={drawerBtn}
              size="large"
              edge="start"
              aria-label="logo"
              onClick={toggleDrawer}
            >
              <MenuIcon
              />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: {
                  backgroundColor: "white",
                  width: "100%",
                },
              }}
              anchor="top"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box sx={{ alignSelf: "end" }}>
                <IconButton
                  sx={{
                    margin: "12px 16px 5px 0px",
                  }}
                  size="medium"
                  onClick={toggleDrawer}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box>
                <Box>
                  <List>
                    {TextLinks.map((item, index) => (
                      <ListItem
                        sx={drawerItems}
                        onClick={() => setIsDrawerOpen(false)}
                        key={index}
                      >
                        <TextButton
                          type={"dropdown"}
                          color={"#000"}
                          title={item.title}
                          hoverColor={"tomato"}
                          id={item.id}
                          key={item.title}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Drawer>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
