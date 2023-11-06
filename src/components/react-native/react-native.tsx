import { FC, useEffect, useState } from "react";
// import { reactCode, styles } from "../../constants/codeExamples";
import { reactNative } from "../../constants/reactNative";
// import StackBlitz from "../StackBlitz";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";
import { Parallax } from "react-scroll-parallax";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import StackBlitzOpen from "../StackBlitzOpen";
import { useLocation } from "react-router-dom";
import qr from "../../assets/guessnumber.png";
// import { SwitchTransition,CSSTransition } from "react-transition-group";

export const ReactNative: FC<{ selectedMenuItem: string }> = ({
  selectedMenuItem,
}) => {
  const [currentHook, setCurrentHook] = useState(null);
  //   const [stackBlitzKey, setStackBlitzKey] = useState(Date.now()); // Initialize with a unique key
  const location = useLocation();

  useEffect(() => {
    // Access the pathname from the location object and remove the leading '/'
    const pathWithoutLeadingSlash = location.pathname.substring(1);
    setCurrentHook(reactNative[pathWithoutLeadingSlash]);
    // setStackBlitzKey(Date.now());
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
              <p className="m-25">{currentHook.description}</p>
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
                    {currentHook.code}
                  </SyntaxHighlighter>
                </Parallax>
                <b className="m-25">Explanation</b>
                <p className="m-25">{currentHook.explanation}</p>

                <div className="text-center">
                  <b>Scan the QR code to install the app</b>
                  <div>
                    <img src={qr} alt="Child Image" />
                  </div>
                  {/* <AnimationOnScroll
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
                        "App.tsx": currentHook.code,
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
                          "animate.css": "^4.1.1",
                          "react-native-web": "0.19.9"
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
                  </Parallax> */}
                </div>
              </div>
            </div>
          </Transitions>
        </div>
      )}
    </>
  );
};
