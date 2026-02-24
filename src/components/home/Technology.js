import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const logos = [
    "https://img.icons8.com/fluency/240/000000/node-js.png",
    "https://img.icons8.com/plasticine/400/000000/react.png",
    "https://img.icons8.com/color/480/000000/javascript--v1.png",
    "https://img.icons8.com/color/480/000000/html-5--v1.png",
    "https://img.icons8.com/color/480/000000/css3.png",
    "https://img.icons8.com/color/480/000000/material-ui.png",
    "https://img.icons8.com/color/480/000000/bootstrap.png",
    "https://img.icons8.com/fluency/96/000000/laravel.png",
    "https://img.icons8.com/officel/480/000000/php-logo.png",
    "https://img.icons8.com/color/480/000000/mysql-logo.png",
    "https://img.icons8.com/ios-glyphs/480/000000/github.png",
    "https://img.icons8.com/cute-clipart/512/000000/canva-app.png",
];

export default function Technology() {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    backgroundImage: "url('img/technologybg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                }}
            >
                <CssBaseline />
                <Container
                    maxWidth={false}
                    style={{ maxWidth: "1100px", height: "500px" }}
                >
                    <Typography
                        component="h4"
                        variant="h5"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Poppins, sans-serif;",
                        }}
                    >
                        TECH STACK
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#82C8E1 ",
                            fontFamily: "Poppins, sans-serif;",
                        }}
                    >
                        Our Technologies
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        paragraph
                    >
                        We possess numerous techstack skills to achieve the
                        necessary requirements.
                    </Typography>

                    <Grid container spacing={4} pt={4}>
                        {/* -----------------CARD 1 ---------------- */}
                        {logos.map((item) => (
                            <Grid
                                item
                                xs={2}
                                key={item}
                                style={{
                                    paddingTop: "50px",
                                }}
                            >
                                <Container>
                                    <img
                                        alt=""
                                        src={item}
                                        style={{
                                            width: "100%",
                                            padding: "0 10px",
                                        }}
                                    />
                                </Container>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>{" "}
        </div>
    );
}
