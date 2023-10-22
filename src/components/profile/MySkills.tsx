// @ts-nocheck 
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import ParticlesComponent from "./ParticlesComponent";
import SocialIcons from "./SocialIcons";
import { lightTheme } from "../../constants/Themes";
import { Design, Develope } from "./AllSvg";
import BigTitle from "./BigTitle";
import PowerButton from "./PowerButton";
// import {lightTheme} from './Themes';
// import { Design, Develope} from './AllSvgs';

// import LogoComponent from '../subComponents/LogoComponent';
// import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitle from '../subComponents/BigTitlte'

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
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 89vw;
  height: max-content;
  z-index: 3;
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

export const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        {/* <LogoComponent theme='light'/> */}
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticlesComponent theme="light" />

        <Main>
          <Title>
            <Develope width={40} height={40} /> Creating My React Tutorial Website: A Journey of Learning and Sharing
          </Title>
          <Description>
          I embarked on a journey to create this React tutorial website.
          In the beginning, my familiarity with React was limited. 
          However, I was eager to learn, so I started by building a strong foundation.
          The website is not only informative but also visually appealing.
          Integrating Bootstrap and styling was a creative process.
          The heart of the website lay in its tutorial sections.
          I curated and wrote content for basic, intermediate, and advanced React concepts.
          What made these tutorials unique was the integration of interactive code examples using StackBlitz.
          Users could experiment and learn hands-on, which was a gratifying addition to the project.
          The culmination of this journey was the deployment of the website.
          </Description>
          {/* <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description> */}
        </Main>

        {/* <BigTitle text="SKILLS" top="80%" right="30%" /> */}
      </Box>
    </ThemeProvider>
  );
};
