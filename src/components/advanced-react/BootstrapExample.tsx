import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import { bootstrapExample } from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";

export const BootstrapExample: FC<{ selectedMenuItem: string }> = ({
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
          Here's an example of a React application using TypeScript that
          includes a navigation bar, a carousel component to display images,
          image cards, and a footer. We'll be using React Bootstrap components
          for this.
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
          <SyntaxHighlighter
            customStyle={customStyle}
            language="typescript"
            style={dark}
          >
            {bootstrapExample}
          </SyntaxHighlighter>
          <b className="m-25">Explanation</b>
          <p className="m-25">
            <b>
              1. Install Required Dependencies: npm install react-bootstrap
              bootstrap
            </b>
            <br></br>
            <b>2. Create the Navigation Bar: </b>
            Import navbar for the navigation bar<br></br>
            <b>3. Create the Carousel Component: </b>
            Import Carousel for displaying carousel images<br></br>
            <b>4. Create Image Cards: </b>
            Import Card for displaying image cards<br></br>
            Place your carousel images and card images in your project directory
            and update the src attributes accordingly. Please note that this is
            a basic example, and you can customize and expand it according to
            your project's requirements.
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
                    "App.tsx": bootstrapExample,
                    "index.html": `<div id="app"></div>`,
                    "index.tsx": reactCode,
                    "style.css": styles,
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
                    "react-error-boundary": "^4.0.11",
                  }}
                  files={{
                    "App.tsx": bootstrapExample,
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
