import { Box, Container, Typography } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

const images = [
    {
        imgPath: "/img/jan.png",
        stars: "★★★★★",
        name: "Name Lastname",
        work: "SOCIAL MEDIA INFLUENCER",
        testimonial:
            " Lorem ipsum dolor sit amet. Ea doloribus eaque tenetur fugiat id neque quia et magnam quasi rem.",
    },
    {
        imgPath: "/img/john.png",
        stars: "★★★★★",
        name: "Name Lastname",
        work: "SOCIAL MEDIA INFLUENCER",
        testimonial:
            " Lorem ipsum dolor sit amet. Ea doloribus eaque tenetur fugiat id neque quia et magnam quasi rem.",
    },
    {
        imgPath: "/img/rec.png",
        stars: "★★★★★",
        name: "Name Lastname",
        work: "SOCIAL MEDIA INFLUENCER",
        testimonial:
            " Lorem ipsum dolor sit amet. Ea doloribus eaque tenetur fugiat id neque quia et magnam quasi rem.",
    },
    {
        imgPath: "/img/reve.png",
        stars: "★★★★★",
        name: "Name Lastname",
        work: "SOCIAL MEDIA INFLUENCER",
        testimonial:
            " Lorem ipsum dolor sit amet. Ea doloribus eaque tenetur fugiat id neque quia et magnam quasi rem.",
    },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                height: "50px",
                width: "50px",
                marginRight: "80px",

                display: "flex",
                alignItems: "center",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                height: "50px",
                marginLeft: "80px",
                width: "50px",
                display: "flex",
                alignItems: "center",
            }}
            onClick={onClick}
        />
    );
}

export default class Responsive extends Component {
    render() {
        var settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div
                style={{
                    backgroundImage: "url('/img/testimonialsbg.png')",
                    backgroundSize: "cover",
                    height: "100vh",
                }}
            >
                <Box id="portfolio">
                    <Container
                        style={{
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div>
                            <div>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: "bold",
                                        color: "rgba(130, 200, 225)",
                                        fontFamily: "Poppins, sans-serif;",
                                    }}
                                >
                                    Client Testimonial
                                </Typography>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Slider
                                    {...settings}
                                    style={{
                                        height: "50vh",
                                        width: "70%",
                                        backgroundColor: "#B8DBE8",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {images.map((row) => (
                                        <div
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Box
                                                key={row.src}
                                                sx={{
                                                    width: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",

                                                    alignItems: "center",
                                                    p: {
                                                        textAlign: "center",
                                                    },
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        height: "100px",
                                                        width: "100px",
                                                    }}
                                                    src={row.imgPath}
                                                />
                                                <Typography>
                                                    {row.stars}
                                                </Typography>
                                                <Typography
                                                    style={{
                                                        fontWeight: "bold",
                                                        fontSize: "25px",
                                                    }}
                                                >
                                                    {row.name}
                                                </Typography>
                                                <Typography
                                                    style={{
                                                        fontWeight: "bold",
                                                        fontSize: "30px",
                                                    }}
                                                >
                                                    {row.work}
                                                </Typography>
                                                <Typography
                                                    style={{ width: "400px" }}
                                                >
                                                    {row.testimonial}
                                                </Typography>
                                            </Box>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </Container>
                </Box>
            </div>
        );
    }
}
