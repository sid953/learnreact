import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import { securityExample } from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Parallax } from "react-scroll-parallax";

export const SecurityExample: FC<{ selectedMenuItem: string }> = ({
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
            Security in a React application is a broad topic that covers various
            aspects such as preventing cross-site scripting (XSS), handling
            authentication and authorization, securing API calls, and more.
            Below is a simple example of how you can handle a basic security
            feature in a React application using TypeScript. This example
            demonstrates how to mitigate a common security vulnerability:
            cross-site scripting (XSS).
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
                {securityExample}
              </SyntaxHighlighter>
            </Parallax>
            <b className="m-25">Explanation</b>
            <p className="m-25">
              We import the DOMPurify library to sanitize the user input.
              <br></br>
              We create a state variable userInput to store the user's input.
              <br></br>
              The handleInput function is called whenever the input field
              changes. It uses DOMPurify.sanitize to sanitize and clean the
              user's input before setting it in the state.<br></br>
              We render the sanitized user input using dangerouslySetInnerHTML
              to ensure that any potentially malicious content is sanitized and
              displayed safely.<br></br>
              By using DOMPurify, you can protect your React application from
              common XSS vulnerabilities by sanitizing and rendering
              user-generated content in a secure manner.<br></br>
              Please note that React security involves various other aspects,
              including handling authentication, securing API calls, and
              ensuring proper access controls. The example above is just one
              aspect of security in a React application. Depending on your
              application's requirements, you may need to implement additional
              security measures.
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
                    "App.tsx": securityExample,
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
                    }}
                    files={{
                      "App.tsx": securityExample,
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
