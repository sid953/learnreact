import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import { useRef } from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Parallax } from "react-scroll-parallax";

export const UseRef: FC<{ selectedMenuItem: string }> = ({
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
            This example illustrates how you can use ref and useRef in a
            functional React component to interact with the DOM and store
            mutable values.<br></br>
            By using a useRef to store such values, you prevent the component
            from re-rendering, which can be more efficient.
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
                {useRef}
              </SyntaxHighlighter>
            </Parallax>
            <b className="m-25">Explanation</b>
            <p className="m-25">
              <b>FocusInput Component</b>
              <br></br>
              The inputRef is created using useRef and initialized as null.
              <br></br>
              In the useEffect, we focus on the inputRef using
              inputRef.current.focus(), ensuring it happens only once when the
              component mounts.<br></br>
              The FocusInput component renders an input field, and when the
              component loads, the input field will be automatically focused.
              <br></br>
              <b>Counter Component</b>
              <br></br>
              countRef is used to store a mutable value and is initialized with
              0 using useRef. This value does not trigger re-renders when
              changed.
              <br></br>
              We also use the useState hook to maintain a stateful count value,
              which allows us to see the difference between state and the value
              stored in countRef.<br></br>
              Clicking the "Increment" button modifies the value stored in
              countRef, which is displayed alongside the stateful count.
              <br></br>
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
                    "App.tsx": useRef,
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
                      "react-error-boundary": "^4.0.11",
                    }}
                    files={{
                      "App.tsx": useRef,
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
