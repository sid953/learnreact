import { FC, Fragment } from "react";
import {
  reactCode,
  styles,
  displayAnchorCode,
} from "../../constants/codeExamples";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";

export const DisplayAnchor: FC<{ selectedMenuItem: string }> = ({
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
          This code creates a simple web page with a large title, "My Anchor
          Example." Below the title, there's a link labeled "Visit Example.com."
          When a user clicks this link, it will open a new browser tab or window
          and navigate to the "https://example.com" website
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
         <SyntaxHighlighter
                customStyle={customStyle}
                language="typescript"
                style={dark}
              >
            {displayAnchorCode}
          </SyntaxHighlighter>
          <b className="m-25">Explanation</b>
          <p className="m-25">
            React Import: The code starts by importing the React library. React
            is a popular JavaScript library used for building user interfaces in
            web applications. <br></br>
            CSS Import: It also imports a CSS file named
            'style.css'. This file likely contains styles that will be applied
            to the content of our web app. <br></br>
            Functional Component: The main part
            of the code defines a functional component named App. In simple
            terms, a component is like a building block for a web page, and App
            is the name of this specific component. Content in the return
            Statement: Inside the App component, there's a return statement.
            This statement specifies what the component will display. Text and
            Anchor: The code creates a div element and applies the CSS class
            "text-center" to it. This class likely centers the content within
            the div. Inside the `div, there's: Heading (H1): An h1 element with
            the text "My Anchor Example." This is a large, main title for the
            web page. Anchor (A): An a element (anchor link) that contains an
            href attribute pointing to "https://example.com". This makes it a
            clickable link. The target="_blank" attribute tells the browser to
            open the link in a new tab or window.
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
                    "App.tsx": displayAnchorCode,
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
                  "App.tsx": displayAnchorCode,
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
