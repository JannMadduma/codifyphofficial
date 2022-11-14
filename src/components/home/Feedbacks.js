// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import { Container, Grid } from "@mui/material";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     imgPath: "img/testimonial.jpg",
//   },
//   {
//     imgPath: "img/testimonial.jpg",
//   },
//   {
//     imgPath: "img/testimonial.jpg",
//   },
//   {
//     imgPath: "img/testimonial.jpg",
//   },
// ];

// function Feedbacks() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('img/ABOUT US - THE TEAM.png')",
//         backgroundSize: "cover",
//         height: "100vh",
//       }}
//     >
//       <Box
//         sx={{
//           height: "100vh",
//         }}
//       >
//         <Container sx={{ height: "100vh" }}>
//           <Grid
//             container
//             spacing={2}
//             sx={{ height: "100vh", alignContent: "center" }}
//           >
//             <Grid item xs={12} align="center">
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#82C8E1 ",
//                   fontFamily: "Poppins, sans-serif;",
//                 }}
//               >
//                 Client Testimonials
//               </Typography>
//             </Grid>
//             <Grid item xs={12} align="center">
//               <Box sx={{ maxWidth: 400, flexGrow: 1 }} align="center">
//                 <Paper
//                   square
//                   elevation={0}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     height: 50,
//                     pl: 2,
//                     bgcolor: "background.default",
//                   }}
//                 >
//                   <Typography>{images[activeStep].label}</Typography>
//                 </Paper>
//                 <AutoPlaySwipeableViews
//                   axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//                   index={activeStep}
//                   onChangeIndex={handleStepChange}
//                   enableMouseEvents
//                 >
//                   {images.map((step, index) => (
//                     <div key={step.label}>
//                       {Math.abs(activeStep - index) <= 2 ? (
//                         <Box
//                           component="img"
//                           sx={{
//                             height: 255,
//                             display: "block",
//                             maxWidth: 400,
//                             overflow: "hidden",
//                             width: "100%",
//                           }}
//                           src={step.imgPath}
//                           alt={step.label}
//                         />
//                       ) : null}
//                     </div>
//                   ))}
//                 </AutoPlaySwipeableViews>
//                 <MobileStepper
//                   steps={maxSteps}
//                   position="static"
//                   activeStep={activeStep}
//                   nextButton={
//                     <Button
//                       size="small"
//                       onClick={handleNext}
//                       disabled={activeStep === maxSteps - 1}
//                     >
//                       Next
//                       {theme.direction === "rtl" ? (
//                         <KeyboardArrowLeft />
//                       ) : (
//                         <KeyboardArrowRight />
//                       )}
//                     </Button>
//                   }
//                   backButton={
//                     <Button
//                       size="small"
//                       onClick={handleBack}
//                       disabled={activeStep === 0}
//                     >
//                       {theme.direction === "rtl" ? (
//                         <KeyboardArrowRight />
//                       ) : (
//                         <KeyboardArrowLeft />
//                       )}
//                       Back
//                     </Button>
//                   }
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </div>
//   );
// }

// export default Feedbacks;
