// @ts-nocheck 
import React from "react";
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
import { Hooks } from "./components/hooks/Hooks";
import Main from "./components/profile/Main";
import GlobalStyle from "./globalstyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./constants/Themes";
import { AboutPage } from "./components/profile/AboutMe";
import { MySkills } from "./components/profile/MySkills";

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
  { text: "Higher order component(HOC)", path: "/hoc" },
  { text: "Render Props", path: "/renderProps" },
  { text: "Redux", path: "/reduxExample" },
  { text: "Unit testing", path: "/unitTesting" },
  { text: "Security", path: "/security" },
  { text: "Bootstrap Integration", path: "/bootstrapExample" },
  { text: "SSR", path: "/ssr" },
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
  let config = {
    num: [4, 7],
    rps: 0.4, //make it 4
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.7],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15,
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx: any, particle: any) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      },
    });
  }
  return (
    <Router>
      <div className="d-flex">
        <div className="circle">
          <ParticlesBg type="custom" config={config} bg={true} />
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
                <Link to="/about" className="nav-link about-me-nav">
                  About Me 
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <GlobalStyle /> */}
          <ThemeProvider theme={lightTheme}>
            <AnimatePresence mode="wait">
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
                  path="/bootstrapExample"
                  element={
                    <Transitions>
                      <BootstrapExample selectedMenuItem="How To Use Bootstrap" />
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
              </Routes>
            </AnimatePresence>
          </ThemeProvider>
        </main>
      </div>
    </Router>
  );
};
