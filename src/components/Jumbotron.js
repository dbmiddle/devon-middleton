import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import DowntownIndy from '../assets/DowntownIndy.jpg';

const Styles = styled.div`
.Jumbo {
    background: url(${DowntownIndy}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
}

.overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

const Jumbotron = () => (
<Styles>
    <Jumbo fluid className='Jumbo'>
        <div className='overlay'></div>
        <Container>
            <h3>Hi! I'm Devon, Software Engineer</h3>
            {/* <p>changing some stuff up just a bit </p> */}
        </Container>
    </Jumbo>
</Styles>
)

export default Jumbotron;