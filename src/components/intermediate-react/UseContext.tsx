import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import { useContext } from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";

export const UseContext: FC<{ selectedMenuItem: string }> = ({
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
          The provided code demonstrates the usage of React's Context API and
          the useContext hook to manage and share global state between
          components.
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
         <SyntaxHighlighter
                customStyle={customStyle}
                language="typescript"
                style={dark}
              >
            {useContext}
          </SyntaxHighlighter>
          <b className="m-25">Explanation</b>
          <p className="m-25">
            <b>Step 1: Create a Context</b>
            <br></br>
            Here, a new context is created using the createContext function.
            This context, MyContext, will serve as a container for shared data
            that can be accessed by components within the component tree where
            it is provided.
            <br></br>
            <b>Step 2: Create a Provider Component</b>
            In this step, a provider component, MyProvider, is created. This
            component is responsible for managing and providing the shared
            state, count, and the increment function to its descendant
            components.<br></br>
            count is a piece of state created using useState and initialized to
            0. This represents the shared state value that we want to manage.
            <br></br>
            increment is a function that allows you to modify the count state
            when called.<br></br>
            Inside the return statement, the MyContext.Provider component wraps
            its child components, which are passed as children. The value prop
            is set to an object containing count and increment. This object
            represents the data that will be made available to descendant
            components.<br></br>
            <b>Step 3: Create Consumer Components</b>
            <br></br>
            Two consumer components, Counter and Display, are created to access
            and utilize the shared state and functions provided by the
            MyProvider component.
            <br></br>
            The App component wraps the entire application within the MyProvider
            component. By doing this, it makes the shared context and state
            available to its child components, Counter and Display, and any
            other components within its subtree.<br></br>
            The child components, Counter and Display, are rendered inside the
            App component and have access to the shared context data provided by
            MyProvider.<br></br>
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
                    "App.tsx": useContext,
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
                  "App.tsx": useContext,
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
