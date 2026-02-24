import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

const framework = [
    {
        img: "img/icons8-business-group-100.png",
        title: "RIGHT TEAM",
        description:
            "We offer various website projects for you! We're just one contact away!",
    },
    {
        img: "img/icons8-tree-structure-100.png",
        title: "RIGHT PROCESS",
        description:
            "We offer various website projects for you! We're just one contact away!",
    },
    {
        img: "img/icons8-motherboard-100.png",
        title: "RIGHT TECHNOLOGY",
        description:
            "We offer various website projects for you! We're just one contact away!",
    },
];

export default function Framework() {
    return (
        <div
            style={{
                backgroundImage: "url('img/teambg.png')",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <CssBaseline />
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Container
                    maxWidth={false}
                    style={{
                        maxWidth: "1000px",
                        paddingBottom: "50px",
                    }}
                >
                    <Typography
                        component="h4"
                        variant="h5"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Roboto",
                            paddingTop: "100px",
                        }}
                    >
                        THE FRAMEWORK
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                            color: "rgba(50, 180, 235, 0.8)",
                            fontFamily: "Roboto",
                        }}
                    >
                        Building a Great Product
                    </Typography>
                    <Typography
                        align="center"
                        paragraph
                        style={{ padding: " 10px 100px", fontFamily: "Roboto" }}
                    >
                        Our product making went through proper procedures and
                        management to attain best possible results.
                    </Typography>

                    <Grid container spacing={1}>
                        {framework.map((item) => (
                            <Grid
                                item
                                xs={4}
                                key={item}
                                sx={{ padding: "40px" }}
                            >
                                <img
                                    alt=""
                                    src={item.img}
                                    style={{
                                        width: "100%",
                                        padding: "10px 100px ",
                                    }}
                                />
                                <Box sx={{ flexGrow: 1 }} align="center">
                                    <Typography
                                        variant="h6"
                                        key={item}
                                        sx={{
                                            fontWeight: "bold",
                                            marginBottom: 2,
                                            fontFamily: "Poppins, sans-serif;",
                                            textAlign: "center",
                                            color: "rgba(50, 180, 235, 0.8)",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="h7"
                                        sx={{
                                            fontWeight: "medium",
                                            marginBottom: 2,
                                            fontFamily: "Poppins, sans-serif;",
                                            textAlign: "center",
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}
