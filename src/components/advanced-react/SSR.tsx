import { FC } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  packageNewSSR,
  packageSSR,
  ssrAppServer,
  ssrIndex,
  ssrIndexUpdate,
  webpackServerConfig,
} from "../../constants/intermediateReact";
import Transitions from "../Transition";
import { Parallax } from "react-scroll-parallax";

export const SSR: FC<{ selectedMenuItem: string }> = ({ selectedMenuItem }) => {
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
          {/* <b className="m-25">Description</b> */}
          <p className="m-25">
            <b>What is Server-Side Rendering (SSR)?</b>
            <br></br>
            Server-side rendering (SSR) is the process of rendering web pages on
            the server rather than on the client (browser). In a typical
            single-page application (SPA) built with React.js, the browser
            receives an empty HTML document, and React renders the components on
            the client-side. With SSR, the server generates the HTML and sends
            it to the browser, which displays the content immediately.
            <br></br>
            <b>Benefits of SSR</b>
            <br></br>
            <b>Improved initial load time:</b> With SSR, users see the content
            immediately, which improves the perceived performance of your
            application. <br></br>
            <b>Better SEO:</b> Search engine crawlers can more easily index
            server-rendered pages, which improves your site's search engine
            optimization (SEO). <br></br>
            <b>reliable performance:</b> Because the server handles rendering,
            users with slow devices or poor network conditions will still
            receive a fully-rendered page.
          </p>
          <div>
            <p className="m-25">
              <b>Prerequisites</b>
              <br></br>
              Before we begin, make sure you have the following tools and
              knowledge: Basic understanding of React.js and Node.js. Node.js
              installed on your local machine. A code editor (e.g., Visual
              Studio Code).<br></br>
              <br></br>
              <b>Adding Express Server</b>
              <br></br>
              we'll set up an Express server to handle server-side rendering.
              First, install the necessary dependencies:
              <b> npm install express</b>
              <br></br>
              Next, create a new folder called server at the root of your
              project and add a new file called index.js. This file will contain
              the Express server configuration. <br></br>
              <b>Code Snippet</b> <br></br>
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
                  className="codeHighlight"
                >
                  {ssrIndex}
                </SyntaxHighlighter>
              </Parallax>
              <br></br>
              In this code snippet, we create an Express app and start listening
              on port 3001. <br></br>
              <br></br>
              <b>Building React Components for SSR</b>
              <br></br>
              Now, let's create a simple React component to render on the
              server. In the src folder, create a new file called AppServer.js.
              This component will be the server-rendered version of our
              application.<br></br>
              <b>Code Snippet</b> <br></br>
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
                  className="codeHighlight"
                >
                  {ssrAppServer}
                </SyntaxHighlighter>
              </Parallax>
              <br></br>
              In this file, we define a simple functional component that
              displays a heading.<br></br>
              <br></br>
              <b>Setting up Webpack for SSR</b>
              <br></br>
              To use server-side rendering, we need to bundle our React
              application using Webpack. First, let's install the required
              dependencies:<br></br>
              <b>
                npm install webpack webpack-cli webpack-node-externals
                @babel/core @babel/preset-env @babel/preset-react babel-loader
                --save-dev
              </b>
              <br></br>
              Next, create a new file called webpack.server.js at the root of
              your project. This file will contain the Webpack configuration for
              server-side rendering.<br></br>
              <b>Code Snippet</b> <br></br>
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
                  className="codeHighlight"
                >
                  {webpackServerConfig}
                </SyntaxHighlighter>
              </Parallax>
              <br></br>
              In this configuration, we set the target to node and configure the
              input and output paths. We also set up the Babel loader to
              transpile our JavaScript files, enabling support for modern syntax
              and React components.<br></br>
              Now, add a new script to your package.json file to build the
              server-side bundle:<br></br>
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
                  className="codeHighlight"
                >
                  {packageSSR}
                </SyntaxHighlighter>
              </Parallax>
              <b>Rendering the React Component on the Server</b>
              <br></br>
              With the Webpack configuration in place, it's time to render the
              React component on the server. First, build the server-side bundle
              by running the following command:<br></br>
              <b>npm run build:server</b>
              <br></br>
              This command generates a server.js file in the build folder.
              <br></br>
              Next, update the server/index.js file to render the AppServer
              component:<br></br>
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
                  className="codeHighlight"
                >
                  {ssrIndexUpdate}
                </SyntaxHighlighter>
              </Parallax>
              <br></br>
              In this file, we import the AppServer component, use
              ReactDOMServer.renderToString() to convert it into an HTML string,
              and send the generated HTML to the client.<br></br>
              <br></br>
              <b>Running the Application</b>
              <br></br>
              Now that our server is set up, we can run the application. Add a
              new script to your package.json file to start the server:
              <br></br>
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
                  className="codeHighlight"
                >
                  {packageNewSSR}
                </SyntaxHighlighter>
              </Parallax>
              <br></br>
              To start the server, run the following command:
              <b> npm run start:server</b>
              <br></br>
              Open your browser and navigate to http://localhost:3001. You
              should see the "Hello from Server-Side Rendered React App!"
              message.
            </p>
            <div className="text-center"></div>
          </div>
        </div>
      </Transitions>
    </div>
  );
};
