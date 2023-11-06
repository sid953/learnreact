// @ts-nocheck
import React, { useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";

import ParticleComponent from "./ParticlesComponent";
import astronaut from "../../assets/spaceman.png";
import SocialIcons from "./SocialIcons";
import { lightTheme } from "../../constants/Themes";
import Transitions from "../Transition";
import { Parallax } from "react-scroll-parallax";
import PowerButton from "./PowerButton";
import Avatar from "react-avatar";

const Box = styled.div`
  // background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  transform: translateX(-100%);
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  transform: translateX(-100%);
  animation: slideInLeft 3s ease-in-out forwards;
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const Container = styled.div`
  padding: 2rem;
`;

export const AboutPage = ({ onActivity }) => {
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const handleMouseActivity = () => {
    // Clear any existing timeouts
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    // Set a new timeout to show the Main Container after a delay (e.g., 500ms)
    const newTimeout = setTimeout(() => {
      onActivity();
    }, 500);

    // Save the timeout ID in state
    setHoverTimeout(newTimeout);
  };

  return (
    <>
      <Transitions>
        <ThemeProvider theme={lightTheme}>
          <Box onMouseMove={handleMouseActivity} className="bgColor">
            <Container>
              <SocialIcons theme="dark" />
              <Avatar
                googleId="118096717852922241760"
                size="100"
                round={true}
                src="https://pbs.twimg.com/profile_images/1401509315169587203/czQRUmh1.jpg"
              />
              {/* <PowerButton /> */}
              <ParticleComponent />
              <Spaceman>
                <img src={astronaut} alt="spaceman" />
              </Spaceman>

              <Main className="aboutMe">
                I'm a front-end developer located in India. I love to create
                simple yet beautiful websites with great user experience.
                <br /> <br />
                I'm interested in the whole frontend stack Like trying new
                things and building great projects.
                <br /> <br />I believe everything is an Art when you put your
                consciousness in it. You can connect with me via social links.
                <br></br>
              </Main>

              {/* <BigTitle text="ABOUT" top="10%" left="5%" /> */}
            </Container>
          </Box>
        </ThemeProvider>
      </Transitions>
    </>
  );
};
