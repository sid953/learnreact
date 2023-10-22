import { FC, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import { reactCode, styles } from "../../constants/codeExamples";
import { HOC } from "../../constants/intermediateReact";
import StackBlitz from "../StackBlitz";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Transitions from "../Transition";

export const HigherOrderComponent: FC<{ selectedMenuItem: string }> = ({
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
          A Higher Order Component (HOC) is a design pattern in React that
          allows you to enhance or modify the behavior of a component by
          wrapping it with another component. HOCs are not components themselves
          but functions that accept a component and return a new component with
          additional features, props, or behavior. They are a way to reuse and
          share component logic without repeating it across multiple components.
          <br></br>
          <b>Why HOCs are Used-</b>
          <br></br>
          <b>Reusability : </b>
          They enable the reuse of common behavior or functionality across
          different components. For example, you can create a loading HOC to add
          loading indicators to multiple components without duplicating the
          loading logic.<br></br>
          <b>Separation of Concerns : </b>
          HOCs allow you to separate the concerns of a component, keeping it
          focused on its primary functionality. The additional logic or behavior
          is abstracted into the HOC.<br></br>
          <b>Cross-Cutting Concerns : </b>
          HOCs are useful for implementing cross-cutting concerns like
          authentication, logging, data fetching, or context management across
          various components.
        </p>
        <b className="m-25">Code Snippet</b>
        <div>
         <SyntaxHighlighter
                customStyle={customStyle}
                language="typescript"
                style={dark}
              >
            {HOC}
          </SyntaxHighlighter>
          <b className="m-25">Explanation</b>
          <p className="m-25">
            <b>Step 1: Create a Higher Order Component (HOC):</b>
            <br></br>n this step, a HOC named withLoading is defined. It accepts
            a WrappedComponent as an argument and returns a new component,
            WithLoadingComponent, that adds loading behavior. The loading
            behavior is simulated with a state variable (loading) and the
            useEffect hook, which sets loading to false after a delay of 2
            seconds. If loading is true, it shows a "Loading..." message;
            otherwise, it renders the WrappedComponent. This HOC abstracts the
            loading logic, which can be applied to other components.
            <br></br>
            <b>Step 2: Create a Component to be Wrapped: </b> <br></br>
            This step defines a simple component called MyComponent. It's a
            component without loading behavior, and it serves as an example of a
            component you might want to enhance with the HOC.
            <br></br>
            <b>Step 3: Apply the HOC to the Component:</b>
            <br></br>
            Here, the withLoading HOC is applied to MyComponent, creating a new
            component called MyComponentWithLoading.
            <br></br>
            <b>Step 4: Render the Wrapped Component:</b>
            <br></br>
            The App component renders the MyComponentWithLoading. When you run
            this application, you will see a "Loading..." message for a brief
            moment before the actual content from MyComponent is displayed,
            demonstrating the use of the HOC to add loading behavior to a
            component.
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
                    "App.tsx": HOC,
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
                  "App.tsx": HOC,
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
