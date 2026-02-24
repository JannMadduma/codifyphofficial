import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
export default function Goals() {
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
                    style={{
                        maxWidth: "1100px",
                        height: "500px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Grid container spacing={2} sx={{ alignContent: "center" }}>
                        <Grid
                            item
                            xs={6}
                            sx={{ display: "flex", alignItems: "right" }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <img
                                    style={{ width: "350px" }}
                                    src="img/goal.png"
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <Box>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "rgba(130, 200, 225)",
                                        fontFamily: "Poppins, sans-serif;",
                                    }}
                                >
                                    Our Goal
                                </Typography>
                                <Box
                                    className="container mb-5 mx-0"
                                    style={{
                                        borderBottom:
                                            "3px solid rgba(135, 180, 235, 0.8)",
                                        borderRadius: 25,
                                        width: 380,
                                        marginTop: 10,
                                        marginBottom: 30,
                                    }}
                                ></Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        marginBottom: 5,
                                        fontFamily: "Poppins, sans-serif;",
                                    }}
                                >
                                    Ut facilis accusantium aut dolores dolore
                                    sit harum quibusdam. Et offici.
                                </Typography>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontStyle: "italic",
                                        fontWeight: "light",
                                        fontSize: 14,
                                        marginTop: 0.5,
                                        fontFamily: "Poppins, sans-serif;",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet. Ea doloribus
                                    eaque et tenetur fugiat id neque quia et
                                    magnam quasi rem tenetur doloribus At magnam
                                    quia rem tenetur doloribus At magnam quia.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}
