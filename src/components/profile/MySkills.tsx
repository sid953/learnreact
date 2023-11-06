// @ts-nocheck
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ParticlesComponent from "./ParticlesComponent";
import SocialIcons from "./SocialIcons";
import { lightTheme } from "../../constants/Themes";
import { Design, Develope } from "./AllSvg";
import BigTitle from "./BigTitle";
import PowerButton from "./PowerButton";
import Avatar from "react-avatar";
import Transitions from "../Transition";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  transform: translateX(-100%);
  animation: slideInLeft 3s ease-in-out forwards;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 89vw;
  height: max-content;
  z-index: 1;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

export const MySkills = ({ onExpActivity }) => {
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const handleMouseActivity = () => {
    // Clear any existing timeouts
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    // Set a new timeout to show the Main Container after a delay (e.g., 500ms)
    const newTimeout = setTimeout(() => {
      onExpActivity();
    }, 500);

    // Save the timeout ID in state
    setHoverTimeout(newTimeout);
  };
  return (
    <Transitions>
      <ThemeProvider theme={lightTheme}>
        <Box onMouseMove={handleMouseActivity} className="bgColor">
          {/* <Container> */}
          <Avatar
            googleId="118096717852922241760"
            size="100"
            round={true}
            className="avatarExp"
            src="https://pbs.twimg.com/profile_images/1401509315169587203/czQRUmh1.jpg"
          />
          {/* <LogoComponent theme='light'/> */}
          <SocialIcons theme="light" />
          {/* <PowerButton /> */}

          <ParticlesComponent theme="light" />

          <Main>
            <Title>
              <Develope width={40} height={40} /> Creating My React Tutorial
              Website: A Journey of Learning and Sharing
            </Title>
            <Description>
              This incredible journey of learning React and building a website
              from the ground up didn't just equip me with technical skills; it
              transformed me as a person. My confidence soared to new heights. I
              now approach challenges with a fearless determination,I've learned
              that in the world of web development, there's no limit to what we
              can create. But what truly brings me happiness is the opportunity
              to share this knowledge with others. I want to inspire and
              encourage those who might be starting their own voyage into the
              world of React or web development. I believe that by sharing my
              experiences and knowledge, I can help them overcome hurdles, stay
              motivated, and experience the same sense of accomplishment and
              confidence that I now possess. It's not just about sharing
              knowledge but also about connecting with people who share the same
              passion for React. This journey has been truly rewarding, and I'm
              excited to see how this platform will help and resonate with
              others in our community. I would love to see your email on
              sawantsiddhesh0325@gmail.com on any feedback/suggestion or your
              comments on my website.
            </Description>
          </Main>
        </Box>
      </ThemeProvider>
    </Transitions>
  );
};
