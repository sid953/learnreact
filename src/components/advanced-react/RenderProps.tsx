import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import { renderProps } from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";

export const RenderProps: FC<{ selectedMenuItem: string }> = ({
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
          Render Props is a pattern in React that allows you to pass a function
          as a prop to a component so that it can render content. This pattern
          is commonly used to share code between components and make components
          more flexible and reusable.
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
         <SyntaxHighlighter
                customStyle={customStyle}
                language="typescript"
                style={dark}
              >
            {renderProps}
          </SyntaxHighlighter>
          <b className="m-25">Explanation</b>
          <p className="m-25">
            The RenderPropsExample component takes a render function as a prop.
            <br></br>
            It defines some data (in this case, a string), and then it invokes
            the render function, passing the data to it. The render function is
            responsible for rendering the actual content.<br></br>
            In the App component, we use the RenderPropsExample component.
            <br></br>
            We provide a render function as a prop to the RenderPropsExample
            component. This render function receives the data passed from the
            RenderPropsExample and renders it.<br></br>
            When you run this code, the RenderPropsExample component invokes the
            provided render function, which receives the data and renders it. In
            this case, the "Data Received" message is displayed on the page.
            This demonstrates the concept of using render props to control and
            customize the rendering behavior of a component.
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
                    "App.tsx": renderProps,
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
                  "App.tsx": renderProps,
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
