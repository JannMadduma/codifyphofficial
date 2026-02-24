import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import JannProjects from "../portfolio/websites/JannProjects";
import PhillipProjects from "../portfolio/websites/PhillipProjects";
import RusselProjects from "../portfolio/websites/RusselProjects";
import TonProjects from "../portfolio/websites/TonProjects";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function FormRow() {
    return (
        <React.Fragment>
            <Grid
                item
                xs={3}
                sx={{
                    padding: "0 10px",
                }}
            >
                <Item>
                    <JannProjects />
                </Item>
            </Grid>
            <Grid
                item
                xs={3}
                sx={{
                    padding: "0 10px",
                }}
            >
                <Item>
                    <PhillipProjects />
                </Item>
            </Grid>
            <Grid
                item
                xs={3}
                sx={{
                    padding: "0 10px",
                }}
            >
                <Item>
                    <RusselProjects />
                </Item>
            </Grid>
            <Grid
                item
                xs={3}
                sx={{
                    padding: "0 10px",
                }}
            >
                <Item>
                    <TonProjects />
                </Item>
            </Grid>
        </React.Fragment>
    );
}

export default function Portfolio() {
    return (
        <div
            id="portfolio"
            style={{
                backgroundImage: "url('/img/portfoliobg.png')",
                backgroundSize: "90%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    alignContent: "center",
                    justifyContent: "center",
                }}
            >
                <Container sx={{ height: "100vh" }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            height: "100vh",
                            alignContent: "center",
                            justifyContent: "center",
                            padding: "100px 0",
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                alignContent: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box align="center">
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Poppins, sans-serif;",
                                        paddingTop: "30px",
                                    }}
                                >
                                    OUR WORK
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#82C8E1 ",
                                        fontFamily: "Poppins, sans-serif;",
                                    }}
                                >
                                    Our Portfolio
                                </Typography>
                                <Typography
                                    sx={{
                                        mx: "auto",
                                        width: 900,
                                        paddingBottom: "50px",
                                    }}
                                >
                                    Codify have full-stack developers with the
                                    love of a UI/UX designer. <br />
                                    Listed skills include all things JavaScript,
                                    such as React, Next.js, Vue.js, Nuxt.js,{" "}
                                    <br /> and Ember.js, as well as UI/UX design
                                    through Figma and Adobe XD.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    alignItems: "center",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <FormRow />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}
