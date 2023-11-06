import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import {
  animateAbout,
  animateContact,
  animateHeader,
  animatePortfolio,
  reactAnimation,
} from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Parallax } from "react-scroll-parallax";

export const ReactAnimation: FC<{ selectedMenuItem: string }> = ({
  selectedMenuItem,
}) => {
  const customStyle: React.CSSProperties = {
    background: "linear-gradient(45deg, black, transparent)",
    border: "1px solid #ddd",
    height: "500px",
    width: "96%",
    overflowX: "hidden",
    marginLeft: "25px",
  };
  return (
    <div className="divStyle">
      <Transitions>
        <div className="subDivStyle">
          <h4 className="m-25">{selectedMenuItem}</h4>
          <b className="m-25">Description</b>
          <p className="m-25">
            Here's an overview of the steps to create an animated website using
            the libraries: react-scroll-parallax, framer-motion,
            react-transition-group, and particles-bg.<br></br>
            <b>
              npm install react-scroll-parallax framer-motion
              react-transition-group particles-bg
            </b>
            <br></br>
            <b>Implement react-scroll-parallax:</b> <br></br>
            Use ParallaxProvider to wrap your components and enable
            scrolling-based animations. Inside your components, use Parallax
            components to control the animation of individual elements.{" "}
            <br></br>
            <b>Implement framer-motion:</b> <br></br>
            Use motion components to add animations, transitions, and
            interactivity to your elements. You can create complex animations
            for page transitions, hover effects, and more using the motion
            library. <br></br>
            <b>Implement react-transition-group:</b> <br></br>
            Use the TransitionGroup and CSSTransition components to create
            animated transitions between different sections or components.{" "}
            <br></br>
            <b>Create an Animated Background with particles-bg:</b> <br></br>
            Utilize the particles-bg library to add a dynamic and interactive
            particle background to your website. Configure the particles'
            appearance and behavior according to your design. <br></br>
          </p>
          <b className="m-25">Code Snippet</b>
          <div>
            <Parallax
              translateX={["0px", "0px"]}
              scale={[1.05, 0.75]}
              rotate={[0, 0]}
              easing="easeIn"
            >
              <SyntaxHighlighter
                customStyle={customStyle}
                language="typescript"
                style={dark}
              >
                {reactAnimation}
              </SyntaxHighlighter>
            </Parallax>
            <b className="m-25">Explanation</b>
            <p className="m-25">
              With this structure, you have a basic animated one-page website.
              You can add more sections, complex animations, styles, and
              transitions to create a more engaging website. Be sure to update
              the styles in the CSS file to customize the appearance of your
              site. Remember that creating a complete website with multiple
              pages and intricate animations can be a significant project. This
              example serves as a starting point for you to expand and customize
              as needed.
            </p>
            <div className="text-center">
              <AnimationOnScroll
                duration={3}
                animateIn="animate__fadeInLeftBig"
                className="slow-slide-in"
              >
                <StackBlitzOpen
                  template="create-react-app"
                  title="uiw"
                  description="uiw v4.7.2 - demo"
                  tags={["stackblitz", "uiw", "react"]}
                  dependencies={{
                    "@types/react": "^18.2.27",
                    "@types/react-dom": "^18.2.12",
                    axios: "^0.19.0",
                    bootstrap: "^4.6.2",
                    jquery: "1.9.1 - 3",
                    "popper.js": "^1.16.1",
                    react: "^18.2.0",
                    "react-bootstrap": "^2.9.0",
                    "react-clock": "^4.5.0",
                    "react-dom": "^18.2.0",
                    "animate.css": "^4.1.1",
                    "particles-bg": "^2.5.5",
                    "react-transition-group": "^4.4.5",
                    "react-scroll-parallax": "^3.4.2",
                    "react-animation-on-scroll": "^5.1.0",
                  }}
                  files={{
                    "App.tsx": reactAnimation,
                    "index.html": `<div id="app"></div>`,
                    "index.tsx": reactCode,
                    "style.css": styles,
                  }}
                >
                  Open This Example In New Tab- Fullscreen
                </StackBlitzOpen>
              </AnimationOnScroll>

              <Parallax
                translateX={["0px", "0px"]}
                scale={[0.75, 2]}
                rotate={[0, 0]}
                easing="easeInQuad"
              >
                <Fragment>
                  <StackBlitz
                    template="create-react-app"
                    title="uiw"
                    description="uiw avatar v4.7.2 - demo"
                    tags={["stackblitz", "uiw", "react"]}
                    embedOpts={{
                      elementOrId: "myDiv",
                      clickToLoad: false,
                    }}
                    dependencies={{
                      "@types/react": "^18.2.27",
                      "@types/react-transition-group": "^4.4.7",
                      "@types/react-dom": "^18.2.12",
                      "@types/jest": "^29.5.6",
                      "@types/mocha": "^10.0.3",
                      "@testing-library/react": "^14.0.0",
                      "@testing-library/user-event": "^14.5.1",
                      dompurify: "^3.0.6",
                      axios: "^0.19.0",
                      bootstrap: "^4.6.2",
                      jquery: "1.9.1 - 3",
                      "popper.js": "^1.16.1",
                      react: "^18.2.0",
                      "react-bootstrap": "^2.9.0",
                      "react-clock": "^4.5.0",
                      "react-dom": "^18.2.0",
                      "animate.css": "^4.1.1",
                      "react-error-boundary": "^4.0.11",
                      "framer-motion": "^10.16.4",
                      "react-scroll-parallax": "^3.4.2",
                      "particles-bg": "^2.5.5",
                      "react-transition-group": "^4.4.5",
                      "react-animation-on-scroll": "^5.1.0",
                    }}
                    files={{
                      "App.tsx": reactAnimation,
                      "Header.tsx": animateHeader,
                      "About.tsx": animateAbout,
                      "Portfolio.tsx": animatePortfolio,
                      "Contact.tsx": animateContact,
                      "index.html": `<div id="app"></div>`,
                      "index.tsx": reactCode,
                      "style.css": styles,
                    }}
                  >
                    Embed StackBlitz
                  </StackBlitz>
                  <div id="myDiv"></div>
                </Fragment>
              </Parallax>
            </div>
          </div>
        </div>
      </Transitions>
    </div>
  );
};
