import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import { unitTesting1, unitTesting2 } from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";

export const UnitTesting: FC<{ selectedMenuItem: string }> = ({
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
          This code is an example of a unit test for a React component using the
          Jest testing framework and the @testing-library/react and
          @testing-library/user-event libraries. The component being tested is a
          simple counter component that displays a count and has buttons to
          increment and decrement the count.
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
          <SyntaxHighlighter
            customStyle={customStyle}
            language="typescript"
            style={dark}
          >
            {unitTesting2}
          </SyntaxHighlighter>
          <b className="m-25">Explanation</b>
          <p className="m-25">
            Import the necessary libraries and the Counter component to be
            tested.<br></br>
            @testing-library/react is used for rendering the component and
            querying elements.<br></br>
            @testing-library/user-event is used for simulating user
            interactions.<br></br>
            The test function defines a test case named 'renders counter
            component'.
            <br></br>
            <b>Inside the test case:</b>
            <br></br>
            The render function is used to render the Counter component, and the
            result is destructured to obtain functions for querying the DOM
            elements.<br></br>
            getByTestId is used to query elements by a data-testid attribute,
            which is a common practice in React testing to make elements easily
            identifiable.<br></br>
            <b>The test checks the following:</b>
            <br></br>
            It queries the element with the data-testid attribute 'count' (which
            should contain the count value) and asserts that it has the text
            content '0'.<br></br>
            This ensures that the component starts with an initial count of 0.
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
                    "App.test.tsx": unitTesting2,
                    "App.tsx": unitTesting1,
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
                  "App.test.tsx": unitTesting2,
                  "App.tsx": unitTesting1,
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
