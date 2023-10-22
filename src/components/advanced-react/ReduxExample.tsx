import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import { reduxExample } from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";

export const ReduxExample: FC<{ selectedMenuItem: string }> = ({
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
          To use Redux in a functional React application, you'll typically use
          the react-redux library, which provides hooks like useSelector and
          useDispatch to interact with your Redux store. <br></br>
          Please note that you need to have Redux and react-redux installed in
          your project. You can install them using:{" "}
          <b>npm install redux react-redux</b>.
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
         <SyntaxHighlighter
                customStyle={customStyle}
                language="typescript"
                style={dark}
              >
            {reduxExample}
          </SyntaxHighlighter>
          <b className="m-25">Explanation</b>
          <p className="m-25">
            <b>Step 1: Define the Redux Store</b>
            <br></br>
            In this step, you set up the Redux store:<br></br>
            initialState defines the initial state of your application. In this
            case, it's a simple object with a count property set to 0.<br></br>
            rootReducer is a function that takes the current state and an action
            and returns the new state. It handles actions like 'INCREMENT' and
            'DECREMENT' by modifying the count property accordingly.<br></br>
            store is created using the createStore function from Redux, which
            takes your rootReducer as an argument. This store will hold your
            application's state.<br></br>
            <b>Step 2: Create Your Functional Components</b>
            Here, you define a Counter functional component:<br></br>
            The useSelector hook from react-redux is used to select and access
            the count property from the Redux store.<br></br>
            The useDispatch hook is used to get access to the dispatch function,
            which is used to dispatch actions to the store.<br></br>
            The increment and decrement functions are defined to dispatch
            'INCREMENT' and 'DECREMENT' actions when the respective buttons are
            clicked.<br></br>
            <b>Step 3: Integrate the Components with the Redux Store</b>
            <br></br>
            The Provider component from react-redux wraps the entire application
            and is used to provide access to the Redux store to all components
            in the component tree.<br></br>
            The Counter component is included within the Provider, which means
            it can access the Redux store's state and dispatch actions.
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
                    "App.tsx": reduxExample,
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
                  "react-native": ">=0.59",
                  "react-redux": "^8.1.3",
                  redux: "^4.2.1",
                }}
                files={{
                  "App.tsx": reduxExample,
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
