import { FC, Fragment } from "react";
import {
  reactCode,
  styles,
  displayHeaderCode,
} from "../../constants/codeExamples";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";

export const DisplayHeader: FC<{ selectedMenuItem: string }> = ({
  selectedMenuItem,
}) => {
  const customStyle: React.CSSProperties = {
        background: "linear-gradient(45deg, black, transparent)",
    border: "1px solid #ddd",
    height: "300px",
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
          This code creates a simple web page with a heading that says "Hello
          React!" This web page is built using the React library, and the App
          component is like a container for our content. The code imports any
          styles we want to apply from the 'style.css' file.
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
         <SyntaxHighlighter
                customStyle={customStyle}
                language="typescript"
                style={dark}
              >
            {displayHeaderCode}
          </SyntaxHighlighter>
          <b className="m-25">Explanation</b>
          <p className="m-25">
            React Import: The code begins by importing the React library, which
            is a popular JavaScript library used to build user interfaces for
            web applications.<br></br>
            CSS Import: It also imports a CSS file named 'style.css'. This file
            likely contains styling information to make our web app look a
            certain way.<br></br>
            Functional Component: The main part of the code defines a functional
            component named App. In simple terms, think of a component as a
            building block for a web application. This App component is like a
            box that we can place on our web page. h1 Element: Inside the App
            component, there's a piece of code that looks like HTML, but it's
            actually called JSX (JavaScript XML). It defines a heading element
            h1 with the text "Hello React!". Return Statement: The return
            statement inside the App component specifies what the component will
            display. In this case, it returns the JSX code containing the h1
            element wrapped in a div element.
          </p>
          <div className="text-center">
            <AnimationOnScroll animateIn="animate__bounceIn">
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
                  }}
                  files={{
                    "index.html": `<div id="app"></div>`,
                    "index.tsx": reactCode,
                    "style.css": styles,
                    "App.tsx": displayHeaderCode,
                  }}
                >
                  Open Example in StackBlitz
                </StackBlitzOpen>

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
                }}
                files={{
                  "App.tsx": displayHeaderCode,
                  "index.html": `<div id="app"></div>`,
                  "index.tsx": reactCode,
                  "style.css": styles,
                }}
              >
                Embed StackBlitz
              </StackBlitz>
              <div id="myDiv"></div>
             </Fragment>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      </Transitions>
    </div>
  );
};
