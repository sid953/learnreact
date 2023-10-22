import { FC, Fragment, useEffect, useState } from "react";
import { reactCode, styles } from "../../constants/codeExamples";
import { hooks } from "../../constants/hooks";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { useLocation } from "react-router-dom";
// import { SwitchTransition,CSSTransition } from "react-transition-group";

export const Hooks: FC<{ selectedMenuItem: string }> = ({
  selectedMenuItem,
}) => {
  const [currentHook, setCurrentHook] = useState(null);
  const [stackBlitzKey, setStackBlitzKey] = useState(Date.now()); // Initialize with a unique key
  const location = useLocation();

  useEffect(() => {
    // Access the pathname from the location object and remove the leading '/'
    const pathWithoutLeadingSlash = location.pathname.substring(1);
    setCurrentHook(hooks[pathWithoutLeadingSlash]);
    setStackBlitzKey(Date.now()); 
  }, [location.pathname]);

  const customStyle: React.CSSProperties = {
    background: "linear-gradient(45deg, black, transparent)",
    border: "1px solid #ddd",
    height: "500px",
    width: "96%",
    overflowX: "hidden",
    marginLeft: "25px",
  };

  return (
    <>
      {currentHook !== null && (
        <div className="divStyle">
          <Transitions>
            <div className="subDivStyle">
              <h4 className="m-25">{selectedMenuItem}</h4>
              <b className="m-25">Description</b>
              <p className="m-25">
              {currentHook.description}
              </p>
              <b className="m-25">Code Snippet</b>
              <div>
                <SyntaxHighlighter
                  customStyle={customStyle}
                  language="typescript"
                  style={dark}
                >
                  {currentHook.code}
                </SyntaxHighlighter>
                <b className="m-25">Explanation</b>
                <p className="m-25">
                {currentHook.explanation}
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
                    "App.tsx": currentHook.code,
                    "index.html": `<div id="app"></div>`,
                    "index.tsx": reactCode,
                    "style.css": styles,
                  }}
                >
                  Open Example in StackBlitz
                </StackBlitzOpen>

                <Fragment>
                      <StackBlitz
                       key={stackBlitzKey} // Update the key to force reinitialization
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
                          "App.tsx": currentHook.code,
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
      )}
    </>
  );
};
