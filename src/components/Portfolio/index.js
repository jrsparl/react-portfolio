import React from "react";
import { Container } from 'react-bootstrap'
import { DiGithubAlt } from 'react-icons/di';
import tourVidImg from '../../assets/tourVid.png'
import mspImg from '../../assets/MSP.png'
import weatherImg from '../../assets/weatherDashboard.png'
import budgetImg from '../../assets/budgetTracker.png'

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

function Portfolio() {
    const portfolioData = [
        {
            img: mspImg,
            githublink: "https://github.com/jrsparl/UCF-mystudioportal.git",
            titlelink: "https://pacific-river-56030.herokuapp.com/",
            title: 'My Studio Portal',
            description: "MyStudioPortal, an online lesson platform, was created by musicians with the intention of expanding the capabilities of local performing arts schools."
        },
        {
            img: weatherImg,
            githublink: "https://github.com/jrsparl/weather-dashboard.git",
            titlelink: "https://jrsparl.github.io/weather-dashboard/",
            title: 'Weather Dashboard',
            description: "An RESTful API application designed to pull weather conditions for all cities queried. Each city is stored locally to be retrieved on load."
        },
        {
            img: budgetImg,
            githublink: "https://github.com/jrsparl/budget-tracker-pwa.git",
            titlelink: "https://agile-lowlands-93817.herokuapp.com/",
            title: 'PWA Budget Tracker',
            description: "A quick budget tracking web application built as a PWA with offline functionality."
        },
        { 
            img: tourVidImg,
            githublink: "https://github.com/Napo-100/Covid-travel-safety-app",
            titlelink: "https://napo-100.github.io/Covid-travel-safety-app/",
            title: 'TourVid Travel Safety App',
            description: "A RESTful API application compiling multiple sources to provide Covid-19 statistics, local news and tourism info for your desired destination."
        },
    ];

    return (
        // <section className="bg-dark text-light p-5" id="portfolio">
        //     {portfolioData.map((project, i) => (
        //   <a href={project.titlelink}>
        //       <DiGithubAlt />
        //   <img
        //     src={project.img}
        //     alt={project.title}
        //     className="img-thumbnail mx-1"
        //     key={i}
        //   />
        //   </a>
        // )
        //     )}
        // </section>
        <Container fluid id="portfolio">
            <MDBRow className="justify-content-center">
                {portfolioData.map((project, i) => (
                    <MDBCard style={{ width: "22rem" }} className="m-1">
                        <a href={project.githublink} target='_blank'>
                         
                            <MDBCardImage className="img-fluid" src={project.img} waves />
                            <DiGithubAlt style={{position:"absolute", top: "0", color:"#224e66", fontSize:"45px", opacity: "0.5"}}/>
                        
                        </a>
                        <MDBCardBody>

                            <MDBCardTitle>{project.title}</MDBCardTitle>
                            
                            <MDBCardText style={{ height: "100px" }}>
                                {project.description}
                            </MDBCardText>

                            
                            <a type="button" class="btn text-light" style={{ backgroundColor: "#224e66" }} href={project.titlelink} target='_blank'>See This Live</a>
                        </MDBCardBody>
                    </MDBCard>
                )
                )}

            </MDBRow>
        </Container>


    );
}

export default Portfolio;