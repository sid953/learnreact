import { FC, Fragment } from "react";
import { reactCode, styles, propExample } from "../../constants/codeExamples";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Parallax } from "react-scroll-parallax";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";

export const PropExample: FC<{ selectedMenuItem: string }> = ({
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
            A Example of reusable component that receives and displays image
            details passed as props.
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
                {propExample}
              </SyntaxHighlighter>
            </Parallax>
            <b className="m-25">Explanation</b>
            <p className="m-25">
              ChildComponent: This is a functional component that takes multiple
              props, specifically name, description, and imageSrc. It displays
              these props in a structured manner.<br></br>
              App Component: This is the main component named App. It is a
              functional component that defines the props for the ChildComponent
              and renders it within a div element.<br></br>
              &lt;ChildComponent &gt; : This line passes the childProps object
              as props to the ChildComponent. As a result, the ChildComponent
              will display the image and its details based on the provided
              props.
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
                  }}
                  files={{
                    "App.tsx": propExample,
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
                    }}
                    files={{
                      "App.tsx": propExample,
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
