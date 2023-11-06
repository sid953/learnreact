//@ts-nocheck
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { DisplayImages } from "./components/basic-react/DisplayImages";
// import { Sidebar } from "./components/Sidebar";
import { DisplayHeader } from "./components/basic-react/DisplayHeader";
import { DisplayAnchor } from "./components/basic-react/DisplayAnchor";
import { FcCallExample } from "./components/basic-react/FcCallExample";
import { BackgroundImage } from "./components/basic-react/BackgroundImage";
import { PropExample } from "./components/basic-react/PropExample";
import { DisplayButton } from "./components/basic-react/DisplayButton";
import { EditInput } from "./components/basic-react/EditInput";
import { LoginForm } from "./components/basic-react/LoginForm";
import { Counter } from "./components/basic-react/Counter";
import { DigitalClock } from "./components/basic-react/DigitalClock";
import { AnalogClock } from "./components/basic-react/AnalogClock";
import { AxiosApiExample } from "./components/basic-react/AxiosApiExample";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "./assets/react.svg";
import { ErrorHandling } from "./components/intermediate-react/ErrorHandling";
import { UseRef } from "./components/intermediate-react/UseRef";
import { Memoization } from "./components/intermediate-react/Memoization";
import { UseContext } from "./components/intermediate-react/UseContext";
import { HigherOrderComponent } from "./components/advanced-react/HigherOrderComponent";
import { RenderProps } from "./components/advanced-react/RenderProps";
import { CustomHooks } from "./components/advanced-react/CutomHook";
import { ReduxExample } from "./components/advanced-react/ReduxExample";
import ParticlesBg from "particles-bg";
import Transitions from "./components/Transition";
// import { AboutPage } from "./components/profile/AboutMe";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./components/profile/SoundBar";
import { UnitTesting } from "./components/advanced-react/UnitTesting";
import { SecurityExample } from "./components/advanced-react/Security";
import { BootstrapExample } from "./components/advanced-react/BootstrapExample";
import { SSR } from "./components/advanced-react/SSR";
import { ReactAnimation } from "./components/advanced-react/ReactAnimation";
import { Hooks } from "./components/hooks/Hooks";
import { ReactPatterns } from "./components/react-patterns/react-patterns";
import { ReactNative } from "./components/react-native/react-native";
import Main from "./components/profile/Main";
import GlobalStyle from "./globalstyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./constants/Themes";
import { AboutPage } from "./components/profile/AboutMe";
import { MySkills } from "./components/profile/MySkills";
import ScrollToTop from "react-scroll-up";
import { ParallaxProvider } from "react-scroll-parallax";
import Avatar from "react-avatar";

const menuItems = [
  { text: "Display Header", path: "/" },
  { text: "Display Images", path: "/displayImages" },
  { text: "Display Anchor", path: "/displayAnchor" },
  { text: "Calling another functional Component", path: "/fcCallExample" },
  { text: "Add the background image", path: "/backgroundImage" },
  {
    text: "Passing multiple arguments to another functional component",
    path: "/propExample",
  },
  { text: "Display Button", path: "/displayButton" },
  { text: "Edit box in React and useState Hook", path: "/editInput" },
  { text: "Login Form", path: "/loginForm" },
  { text: "Increment and Decrement the counter", path: "/counter" },
  { text: "Analog Clock", path: "/analogClock" },
  { text: "Digital Clock using useEffect", path: "/digitalClock" },
  { text: "Axios - Communicate with the backend.", path: "/axiosApiExample" },
];

const advancedReact = [
  { text: "Error handling", path: "/errorHandling" },
  { text: "Redux", path: "/reduxExample" },
  { text: "Unit testing", path: "/unitTesting" },
  { text: "Security", path: "/security" },
  { text: "Bootstrap Integration", path: "/bootstrapExample" },
  { text: "SSR", path: "/ssr" },
  { text: "React Animation With Libraries", path: "/animation" },
];
const reactpatterns = [
  {
    text: "Expressions",
    path: "/expressions",
    element: <ReactPatterns selectedMenuItem="Expressions" />,
  },
  {
    text: "Default props",
    path: "/defaultProps",
    element: <ReactPatterns selectedMenuItem="Default Props" />,
  },
  {
    text: "Destructuring props",
    path: "/destructuringProps",
    element: <ReactPatterns selectedMenuItem="Destructuring props" />,
  },
  {
    text: "JSX spread attributes",
    path: "/JSXSpreadAttributes",
    element: <ReactPatterns selectedMenuItem="JSX spread attributes" />,
  },
  {
    text: "Merge destructured props with other values",
    path: "/mergeDestructuredProps",
    element: (
      <ReactPatterns selectedMenuItem="Merge destructured props with other values" />
    ),
  },
  {
    text: "Conditional rendering ",
    path: "/conditionalRendering",
    element: <ReactPatterns selectedMenuItem="Conditional rendering" />,
  },
  {
    text: "Children Types",
    path: "/childrenTypes",
    element: <ReactPatterns selectedMenuItem="Children Types" />,
  },
  {
    text: "Array as Children",
    path: "/arrayAsChildren",
    element: <ReactPatterns selectedMenuItem="Array as Children" />,
  },
  {
    text: "Children Pass-through",
    path: "/childrenPassThrough",
    element: <ReactPatterns selectedMenuItem="Children Pass-through" />,
  },
  {
    text: "Proxy component",
    path: "/proxyComponent",
    element: <ReactPatterns selectedMenuItem="Proxy component" />,
  },
  {
    text: "Style Component",
    path: "/styleComponent",
    element: <ReactPatterns selectedMenuItem="Style Component" />,
  },
  {
    text: "Event Handling with a Switch Statement",
    path: "/eventSwitch",
    element: (
      <ReactPatterns selectedMenuItem="Event Handling with a Switch Statement" />
    ),
  },
  {
    text: "Layout Component",
    path: "/layoutComponent",
    element: <ReactPatterns selectedMenuItem="Layout Component" />,
  },
  {
    text: "Container Component",
    path: "/containerComponent",
    element: <ReactPatterns selectedMenuItem="Container Component" />,
  },
  {
    text: "State Hoisting",
    path: "/stateHoisting",
    element: <ReactPatterns selectedMenuItem="State Hoisting" />,
  },
  {
    text: "Controlled Input",
    path: "/controlledInput",
    element: <ReactPatterns selectedMenuItem="Controlled Input" />,
  },
  { text: "Higher order component(HOC)", path: "/hoc" },
  { text: "Render Props", path: "/renderProps" },
];

const reactNative = [
  {
    text: "Hello World",
    path: "/helloWorldNative",
    element: <ReactNative selectedMenuItem="Hello World" />,
  },
  {
    text: "State & Props",
    path: "/statePropsNative",
    element: <ReactNative selectedMenuItem="State & Props" />,
  },
  {
    text: "Styling in React Native",
    path: "/stylingReactNative",
    element: <ReactNative selectedMenuItem="Styling in React Native" />,
  },
  {
    text: "Handling User Input",
    path: "/handlingUserInput",
    element: <ReactNative selectedMenuItem="Handling User Input" />,
  },
  {
    text: "Functional Components With Hooks",
    path: "/useFnHooks",
    element: (
      <ReactNative selectedMenuItem="Functional Components With Hooks" />
    ),
  },
  {
    text: "API Calls with Axios",
    path: "/axiosNative",
    element: <ReactNative selectedMenuItem="API Calls with Axios" />,
  },
  {
    text: "Guess The Number Game",
    path: "/guessTheNumber",
    element: <ReactNative selectedMenuItem="Guess The Number Game" />,
  },
];

const hooks = [
  {
    text: "useEffect",
    path: "/useEffect",
    element: <Hooks selectedMenuItem="useEffect" />,
  },
  {
    text: "useID",
    path: "/useID",
    element: <Hooks selectedMenuItem="useID" />,
  },
  {
    text: "useDebug",
    path: "/useDebug",
    element: <Hooks selectedMenuItem="useDebug" />,
  },
  {
    text: "useContext",
    path: "/useContext",
    element: <Hooks selectedMenuItem="useContext" />,
  },
  {
    text: "useDeffered",
    path: "/useDeffered",
    element: <Hooks selectedMenuItem="useDeffered" />,
  },
  {
    text: "useReducer",
    path: "/useReducer",
    element: <Hooks selectedMenuItem="useReducer" />,
  },
  {
    text: "useTransition",
    path: "/useTransition",
    element: <Hooks selectedMenuItem="useTransition" />,
  },
  {
    text: "useInsertionEffect",
    path: "/useInsertionEffect",
    element: <Hooks selectedMenuItem="useInsertionEffect" />,
  },
  {
    text: "useImperative",
    path: "/useImperative",
    element: <Hooks selectedMenuItem="useImperative" />,
  },
  {
    text: "useSyncExternalStore",
    path: "/useSyncExternalStore",
    element: <Hooks selectedMenuItem="useSyncExternalStore" />,
  },
  {
    text: "useCallback",
    path: "/useCallback",
    element: <Hooks selectedMenuItem="useCallback" />,
  },
  {
    text: "useMemo",
    path: "/useMemo",
    element: <Hooks selectedMenuItem="useMemo" />,
  },
  {
    text: "useState",
    path: "/useState",
    element: <Hooks selectedMenuItem="useState" />,
  },
  {
    text: "useRef",
    path: "/useRef",
    element: <Hooks selectedMenuItem="useRef" />,
  },
  {
    text: "Writing custom hooks",
    path: "/customHooks",
    element: <Hooks selectedMenuItem="customHooks" />,
  },
];

export const App: React.FC = () => {
  const [config, setConfig] = useState({
    num: [4, 7],
    rps: 0.4,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.7],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    random: 15,
  });

  useEffect(() => {
    // document.addEventListener('contextmenu', (event) => {
    //   event.preventDefault();
    // });
    // Create a copy of the config object with rps set to 4
    const updatedConfig = { ...config, rps: 4 };
    const updatedConfig2 = { ...config, rps: 10 };
    // After 2 seconds, update the config with the new values
    const timeoutId = setTimeout(() => {
      setConfig(updatedConfig);
    }, 10000);
    const timeoutId2 = setTimeout(() => {
      setConfig(updatedConfig2);
    }, 20000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId, timeoutId2);
  }, []); // The effect runs only once on component mount

  return (
    <Router>
      <div className="d-flex">
        <div className="circle">
          <ParticlesBg
            type="custom"
            key={JSON.stringify(config)}
            config={config}
            bg={true}
          />
        </div>
        {/* <Sidebar menuItems={menuItems} /> */}
        <main className="flex-grow-1 overflow-hidden">
          <SoundBar />
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className="m-25">
              <img src={logo} className="App-logo" alt="logo" />
              &nbsp;React Tutorial
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link className="nav-link" to={""}></Link>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown
                  title="Basic React Tutorial"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  {menuItems.map((menuItem, index) => (
                    <NavDropdown.Item
                      className="custom-dropdown-item"
                      key={index}
                      as={Link}
                      to={menuItem.path}
                    >
                      {menuItem.text}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="Intermediate React Tutorial"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  {hooks.map((menuItem, index) => (
                    <NavDropdown.Item
                      className="custom-dropdown-item"
                      key={index}
                      as={Link}
                      to={menuItem.path}
                    >
                      {menuItem.text}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="Advanced React Tutorial"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  {advancedReact.map((menuItem, index) => (
                    <NavDropdown.Item
                      className="custom-dropdown-item"
                      key={index}
                      as={Link}
                      to={menuItem.path}
                    >
                      {menuItem.text}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="React Patterns"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  {reactpatterns.map((menuItem, index) => (
                    <NavDropdown.Item
                      className="custom-dropdown-item"
                      key={index}
                      as={Link}
                      to={menuItem.path}
                    >
                      {menuItem.text}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="React Native"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  {reactNative.map((menuItem, index) => (
                    <NavDropdown.Item
                      className="custom-dropdown-item"
                      key={index}
                      as={Link}
                      to={menuItem.path}
                    >
                      {menuItem.text}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Link to="/about" className="about-me-nav">
                  <Avatar
                    googleId="118096717852922241760"
                    size="50"
                    round={true}
                    // className="avatarExp"
                    src="https://pbs.twimg.com/profile_images/1401509315169587203/czQRUmh1.jpg"
                  />
                </Link>
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <GlobalStyle /> */}
          <ThemeProvider theme={lightTheme}>
            <AnimatePresence mode="wait">
              <ParallaxProvider>
                <Routes>
                  <Route path="/about" element={<Main />} />
                  <Route path="/profile" element={<AboutPage />} />
                  <Route path="/skills" element={<MySkills />} />
                  {/* Basic react */}
                  <Route
                    path="/"
                    element={
                      <Transitions>
                        <DisplayHeader selectedMenuItem="Display Header" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/displayImages"
                    element={
                      <Transitions>
                        <DisplayImages selectedMenuItem="Display Images" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/displayAnchor"
                    element={
                      <Transitions>
                        <DisplayAnchor selectedMenuItem="Display Anchor" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/fcCallExample"
                    element={
                      <Transitions>
                        <FcCallExample selectedMenuItem="Calling another functional Component" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/backgroundImage"
                    element={
                      <Transitions>
                        <BackgroundImage selectedMenuItem="Add the background image" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/propExample"
                    element={
                      <Transitions>
                        <PropExample selectedMenuItem="Passing multiple arguments to another functional component" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/displayButton"
                    element={
                      <Transitions>
                        <DisplayButton selectedMenuItem="Display Button" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/editInput"
                    element={
                      <Transitions>
                        <EditInput selectedMenuItem="Edit box in React and useState Hook" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/loginForm"
                    element={
                      <Transitions>
                        <LoginForm selectedMenuItem="Login Form" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/counter"
                    element={
                      <Transitions>
                        <Counter selectedMenuItem="Increment and Decrement the counter" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/analogClock"
                    element={
                      <Transitions>
                        <AnalogClock selectedMenuItem="Analog Clock" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/digitalClock"
                    element={
                      <Transitions>
                        <DigitalClock selectedMenuItem="Digital Clock using useEffect" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/axiosApiExample"
                    element={
                      <Transitions>
                        <AxiosApiExample selectedMenuItem="Axios - Communicate with the backend." />
                      </Transitions>
                    }
                  />
                  {/* Intermediate react */}
                  <Route
                    path="/errorHandling"
                    element={
                      <Transitions>
                        <ErrorHandling selectedMenuItem="Error Handling" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/memoization"
                    element={
                      <Transitions>
                        <Memoization selectedMenuItem="Memoization and useMemo" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/refs"
                    element={
                      <Transitions>
                        <UseRef selectedMenuItem="Refs and useRef" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/useContext"
                    element={
                      <Transitions>
                        <UseContext selectedMenuItem="Context and useContext" />
                      </Transitions>
                    }
                  />
                  {/* Advanced react */}
                  <Route
                    path="/hoc"
                    element={
                      <Transitions>
                        <HigherOrderComponent selectedMenuItem="Higher order component(HOC)" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/renderProps"
                    element={
                      <Transitions>
                        <RenderProps selectedMenuItem="Render Props" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/customHooks"
                    element={
                      <Transitions>
                        <CustomHooks selectedMenuItem="Writing Custom hooks" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/reduxExample"
                    element={
                      <Transitions>
                        <ReduxExample selectedMenuItem="Redux" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/unitTesting"
                    element={
                      <Transitions>
                        <UnitTesting selectedMenuItem="Unit Testing" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/security"
                    element={
                      <Transitions>
                        <SecurityExample selectedMenuItem="Secure React Component with Input Sanitization" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/animation"
                    element={
                      <Transitions>
                        <ReactAnimation selectedMenuItem="React Animation With Libraries" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/bootstrapExample"
                    element={
                      <Transitions>
                        <BootstrapExample selectedMenuItem="How To Use Bootstrap" />
                      </Transitions>
                    }
                  />
                  <Route
                    path="/ssr"
                    element={
                      <Transitions>
                        <SSR selectedMenuItem="Server-Side Rendering (SSR) " />
                      </Transitions>
                    }
                  />
                  {hooks.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                  {reactpatterns.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                  {reactNative.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </ParallaxProvider>
            </AnimatePresence>
          </ThemeProvider>
        </main>
      </div>
    </Router>
  );
};
