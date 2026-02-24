import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const framework = [
    {
        img: "/img/icons8-webpages-66.png",
        title: "Webpages",
    },
    {
        img: "/img/icons8-add-shopping-cart-64.png",
        title: "ECommerce",
    },
    {
        img: "/img/icons8-shopify-128.png",
        title: "Shopify",
    },
    {
        img: "/img/icons8-design-64.png",
        title: "Prototyping",
    },
    {
        img: "/img/icons8-search-64.png",
        title: "UX Research",
    },
    {
        img: "/img/icons8-search-property-64.png",
        title: "UI/UX Audit",
    },
    {
        img: "/img/icons8-survey-64.png",
        title: "Consultation",
    },
    {
        img: "/img/icons8-web-design-64.png",
        title: "Design Sprints",
    },
];

export default function PricingService() {
    return (
        <div
            style={{
                backgroundImage: "url('/img/ourservebg.png')",
                backgroundSize: "cover",
                height: "100vh",
            }}
        >
            <CssBaseline />
            <Box
                sx={{
                    height: "100vh",
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
                        SERVICES
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            fontFamily: "Roboto",
                        }}
                    >
                        Our Craft
                    </Typography>
                    <Typography
                        align="center"
                        paragraph
                        style={{ padding: " 10px 100px", fontFamily: "Roboto" }}
                    >
                        We offer various services which are listed below. We
                        offer various services which are listed below. We offer
                        various services which are listed below.
                    </Typography>

                    <Grid container spacing={1}>
                        {/* -----------------CARD 1 ---------------- */}
                        {framework.map((item) => (
                            <Grid
                                item
                                xs={3}
                                key={item}
                                style={{
                                    paddingTop: "50px",
                                }}
                            >
                                <Container
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={item.img}
                                        style={{
                                            width: "40%",
                                            height: "40%",
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        key={item}
                                        sx={{
                                            fontWeight: "bold",
                                            marginBottom: 2,
                                            fontFamily: "Poppins, sans-serif;",

                                            color: "white",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Container>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}
