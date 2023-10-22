import { FC, Fragment } from "react";
import { reactCode, styles, backgroundImage } from "../../constants/codeExamples";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";

export const BackgroundImage: FC<{ selectedMenuItem: string }> = ({
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
          When you run this code, you will see a web page with the text "Hello
          my name is siddhesh!" and "I'm a frontend developer" displayed in the
          center of the page. The content is overlaid on a background image that
          covers the entire viewport.
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
         <SyntaxHighlighter
                customStyle={customStyle}
                language="typescript"
                style={dark}
              >
            {backgroundImage}
          </SyntaxHighlighter>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <b className="m-25">Explanation</b>
          <p className="m-25">
            MyData Component: This is a functional component defined as MyData.
            It takes a single prop, name, which is of type string. Inside
            MyData, it returns JSX (JavaScript XML) to render a message with the
            provided name. div Element: Displays the content in the center of
            the container. h1 Element: Displays "Hello my name is [name]!" where
            [name] is the value passed as the name prop. p Element: Displays
            "I'm a frontend developer." <br></br>
            App Component: This is the main
            component named App. It is also a functional component and serves as
            the root component of your application. Inside App, it returns JSX
            that includes: containerStyle: This is an object containing CSS
            properties. It sets the background image to a URL, adjusts its size
            and positioning, adds padding, sets text color to white, and sets
            the container's height to cover the viewport (100vh). div Element:
            This div represents the main container of your web page. It uses the
            containerStyle object to apply the specified CSS properties. MyData
            Component: This component is rendered within the main container, and
            the name prop is set to 'siddhesh'
          </p>
          </AnimationOnScroll>
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
                    "App.tsx": backgroundImage,
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
                  "App.tsx": backgroundImage,
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
