// import React from 'react';
// import content from './content.json';
// import DoneIcon from '@mui/icons-material/Done';
// import { Typography, Box, ListItem, ListItemIcon, ListItemText, Container, Stack, Grid } from '@mui/material';

// const Checklist = () => {
//     // Splitting the content array into two arrays
//     const halfLength = Math.ceil(content.length / 2);
//     const firstColumn = content.slice(0, halfLength);
//     const secondColumn = content.slice(halfLength);

//     return (
//         <>
//             <Container>
//                 <Grid container spacing={2}>
//                     <Grid item xs={6}>
//                         {firstColumn.map((item, index) => (
//                             <ListItem key={index}>
//                                 <ListItemIcon>
//                                     <DoneIcon sx={{ color: '#EC6731' }} />
//                                 </ListItemIcon>
//                                 <ListItemText>
//                                     <Typography dangerouslySetInnerHTML={{ __html: item.text }} />
//                                 </ListItemText>
//                             </ListItem>
//                         ))}
//                     </Grid>
//                     <Grid item xs={6}>
//                         {secondColumn.map((item, index) => (
//                             <ListItem key={index}>
//                                 <ListItemIcon>
//                                     <DoneIcon sx={{ color: '#EC6731' }} />
//                                 </ListItemIcon>
//                                 <ListItemText>
//                                     <Typography dangerouslySetInnerHTML={{ __html: item.text }} />
//                                 </ListItemText>
//                             </ListItem>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Container>
//         </>
//     );
// }

// export default Checklist;
