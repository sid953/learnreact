import { FC, Fragment } from "react";
import { reactCode, styles, axiosExample } from "../../constants/codeExamples";
import StackBlitz from "../StackBlitz";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import StackBlitzOpen from "../StackBlitzOpen";
import Transitions from "../Transition";
import { Parallax } from "react-scroll-parallax";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const AxiosApiExample: FC<{ selectedMenuItem: string }> = ({
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
    <>
      <div className="divStyle">
        <Transitions>
          <div className="subDivStyle">
            <h4 className="m-25">{selectedMenuItem}</h4>
            <b className="m-25">Description</b>
            <p className="m-25">
              This code creates a user management web application. Users can
              view, edit, add, and delete users through the user interface. User
              data is retrieved from an external API, and interactions with the
              API are handled using Axios.
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
                  {axiosExample}
                </SyntaxHighlighter>
              </Parallax>
              <b className="m-25">Explanation</b>
              <p className="m-25">
                useEffect Hook: It runs when the component is mounted and calls
                the fetchUsers function to populate the users state with data
                from an external API (JSONPlaceholder).<br></br>
                fetchUsers Function: This function sends an HTTP GET request to
                the JSONPlaceholder API to fetch user data. It sets the users
                state with the response data.<br></br>
                User Management Functions: <br></br>
                resetEditedUser: It resets the editedUser state to clear any
                previously edited user.<br></br>
                handleEditClick: When an "Edit" button is clicked, this function
                sets the editedUser state with the user being edited and
                displays the modal.<br></br>
                handleAddClick: This function resets the editedUser state and
                displays the modal for adding a new user.<br></br>
                handleModalClose: It closes the modal and resets the editedUser
                state to its initial state.<br></br>
                handleSaveUser: Depending on whether an id exists in editedUser,
                it either updates an existing user (via HTTP PUT) or creates a
                new user (via HTTP POST).<br></br>
                handleDeleteUser: This function deletes a user by their ID (via
                HTTP DELETE).
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
                      "App.tsx": axiosExample,
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
                      }}
                      files={{
                        "App.tsx": axiosExample,
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
    </>
  );
};
