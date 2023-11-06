export const errorHandler: string =   
`import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  return (
    <div>
      <h2>Something went wrong.</h2>
      {/* You can add custom error handling UI here. */}
    </div>
  );
}

function BuggyComponent() {
  const [shouldThrow, setShouldThrow] = useState(false);

  const handleButtonClick = () => {
    setShouldThrow(true);
  };

  if (shouldThrow) {
    throw new Error('Simulated error');
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Throw an error</button>
    </div>
  );
}

export const App: React.FC  = () =>{
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1618477247222-acbdb0e159b3')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <div style={containerStyle}>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
`
export const memoization = `
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation(props) {
  // Simulate an expensive calculation (e.g., factorial)
  const calculateFactorial = (n) => {
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  // Use useMemo to memoize the result of the calculation
  const result = useMemo(() => calculateFactorial(props.value), [props.value]);

  return (
    <div>
      <p>Factorial of {props.value} is: {result}</p>
    </div>
  );
}

export const App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://img.freepik.com/free-photo/atom-science-biotechnology-blue-neon-graphic_53876-167297.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  const [count, setCount] = useState(5);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={containerStyle}>
      <h1>Memoization and useMemo Example</h1>
      <p>Click the button to increment the value:</p>
      <button onClick={incrementCount}>Increment Value</button>
      <p>Current Value: {count}</p>

      <ExpensiveCalculation value={count} />
    </div>
  );
}
`
export const useRef = `
import React, { useRef, useEffect, useState } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Focus on Input Using useRef</h1>
      <input ref={inputRef} placeholder="Type here" />
    </div>
  );
}

function Counter() {
  const countRef = useRef(0); // Initialize with an initial value
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    countRef.current += 1; // Modify the ref without causing a re-render
    setCount(countRef.current); // Also update state to see the value in the component
  }

  return (
    <div>
      <h1>Counter Using useRef</h1>
      <p>Count (from state): {count}</p>
      <p>Count (from useRef): {countRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export const App = () =>{
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100%'
  }
  return (
    <div style={containerStyle}>
      <FocusInput />
      <Counter />
    </div>
  );
}

`

export const useContext = `
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const MyContext = createContext(null);

// Step 2: Create a Provider Component
function MyProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
}

// Step 3: Create Consumer Components
function Counter() {
  const { count, increment } = useContext(MyContext);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function Display() {
  const { count } = useContext(MyContext);

  return (
    <div>
      <h2>Display</h2>
      <p>Count from Context: {count}</p>
    </div>
  );
}

export const App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100%'
  }
  return (
    <MyProvider>
      <div style={containerStyle}>
        <h1>Context and useContext Example</h1>
        <Counter />
        <Display />
      </div>
    </MyProvider>
  );
}
`
export const HOC = `
import React, { useState, useEffect } from 'react';

// Step 1: Create a Higher Order Component (HOC)
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ ...props }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate an async operation
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

// Step 2: Create a Component to be Wrapped
function MyComponent() {
  return (
    <div>
      <h1>Higher Order Component Example</h1>
      <p>Component Content Goes Here</p>
    </div>
  );
}

// Step 3: Apply the HOC to the Component
const MyComponentWithLoading = withLoading(MyComponent);

// Step 4: Render the Wrapped Component
export const App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1607964969051-988be31393fd')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <div style={containerStyle}>
      <MyComponentWithLoading />
    </div>
  );
}

`

export const renderProps = `
import React from 'react';

// Step 1: Create a Component with Render Props
function RenderPropsExample({ render }) {
  const data = "Data from Render Props Component";
  
  // Call the render function and pass data to it
  return render(data);
}

// Step 2: Use the Component with Render Props
export const App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1696859172759-e0bd77088505')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <div style={containerStyle}>
      <h1>Render Props Example</h1>
      <RenderPropsExample
        render={(data) => (
          <div>
            <p>Data Received: {data}</p>
          </div>
        )}
      />
    </div>
  );
}
`
export const customHook = `
import React, { useState } from 'react';

// Step 1: Create a Custom Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

// Step 2: Use the Custom Hook in Components
function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Custom Hook Example: Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function AnotherComponent() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <h1>Another Component Using Custom Hook</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export const App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1697207723387-5b0ef107a756')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'black',
    height:'100vh'
  }
  return (
    <div style={containerStyle}>
      <CounterComponent />
      <AnotherComponent />
    </div>
  );
}
`
export const reduxExample = `
// app.tsx
import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Step 1: Define the Redux store
const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

// Step 2: Create your functional components
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Step 3: Integrate the components with the Redux store
export const App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://wallpapercave.com/dwp2x/wp4923979.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <Provider store={store}>
      <div style={containerStyle}>
        <h1>Redux Example in Functional React</h1>
        <Counter />
      </div>
    </Provider>
  );
}

`
export const unitTesting1 = `
// Counter.tsx
import React, { useState } from 'react';

export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1697207723387-5b0ef107a756')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'black',
    height:'100vh'
  }
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={containerStyle}>
      <h1>Counter</h1>
      <p data-testid="count">{count}</p>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

`
export const unitTesting2 = `
// Counter.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

test('renders counter component', () => {
  const { getByText, getByTestId } = render(<App />);

  // Ensure that the component renders the initial count value of 0
  const countElement = getByTestId('count');
  expect(countElement).toBe('0');

  // Find the buttons
  const incrementButton = getByTestId('increment');
  const decrementButton = getByTestId('decrement');

  // Simulate clicking the increment button and check if count increases
  userEvent.click(incrementButton);
  expect(countElement).toBe('1');

  // Simulate clicking the decrement button and check if count decreases
  userEvent.click(decrementButton);
  expect(countElement).toBe('0');
});

`

export const securityExample = `
// 
import React, { useState } from 'react';
import DOMPurify from 'dompurify';

export const App: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  
  // Function to sanitize and set the user input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedInput = DOMPurify.sanitize(e.target.value);
    setUserInput(sanitizedInput);
  };

  return (
    <div>
      <h2>React Security Example - XSS Mitigation</h2>
      <div>
        <label htmlFor="userInput">Enter some text:</label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={handleInput}
        />
      </div>
      <div>
        <strong>Sanitized User Input:</strong>
        <div dangerouslySetInnerHTML={{ __html: userInput }} />
      </div>
    </div>
  );
};

`

export const bootstrapExample = `
// app.tsx
import React from 'react';
import { Navbar, Nav, Container, Carousel, Card } from 'react-bootstrap';

export const App: React.FC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>React Bootstrap App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-4">
        <h1>Welcome to React Bootstrap App</h1>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1696435731181_palmtreeoctdesktop.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1697465589083_luckyalimumbaidesktop.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>

        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1607964969051-988be31393fd" />
              <Card.Body>
                <Card.Title>Night Sky</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7" />
              <Card.Body>
                <Card.Title>Software Developer</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb" />
              <Card.Body>
                <Card.Title>Mobile</Card.Title>
              </Card.Body>
            </Card>
          </div>
          {/* Add more Card components as needed */}
        </div>
      </div>

      <footer className="bg-dark text-light text-center py-3">
        &copy; 2023 Your App Name
      </footer>
    </div>
  );
};

`

export const ssrIndex = `
// server/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server is listening on port \${PORT}");
});`

export const ssrAppServer = `
// src/AppServer.js
import React from 'react';

const AppServer = () => {
  return (
    <div>
      <h1>Hello from Server-Side Rendered React App!</h1>
    </div>
  );
};

export default AppServer;`

export const webpackServerConfig = `
// webpack.server.js
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: './server/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
`;

export const packageSSR = `
"scripts": {
  ...
  "build:server": "webpack --config webpack.server.js"
}
`;

export const ssrIndexUpdate = `
// server/index.js
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const AppServer = require('../src/AppServer').default;

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<AppServer />);
  const html = \`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">\${content}</div>
      </body>
    </html>
  \`;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(\`Server is listening on port \${PORT}\`);
});
`

export const packageNewSSR = `
"scripts": {
  ...
  "start:server": "node build/server.js"
}
`;

export const reactAnimation = `
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ParticlesBg from 'particles-bg';
import './style.css'

export const App = () => {
  const [showContact, setShowContact] = useState(false);
  const config = {
    num: [4, 7],
    rps: 0.4,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.7],
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    random: 15,
  };

  return (
    <div className="animation">
      <ParticlesBg type="custom" config={config} bg={true} />
      <Header />
      <About />
      <Portfolio />
      <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
      <h2>Look what i am doing</h2>
   </AnimationOnScroll>
    </div>
  );
};


`
export const animateHeader = `

import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Header = () => {
  return (
    <section id="header">
      <ParallaxProvider>
      <Parallax className="header-parallax" y={[-20, 20]}>
        <h1 className="header-title">Welcome to My Website</h1>
      </Parallax>
      </ParallaxProvider>
    </section>
  );
};

export default Header;



`
export const animateAbout = `
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="about-text"
        >
          <h2>About Me</h2>
          <p>Learn more about me here.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

`
export const animatePortfolio = `
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-content">
        <h2>My Portfolio</h2>
        <p>View my work here.</p>
      </div>
    </section>
  );
};

export default Portfolio;

`
export const animateContact = `
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Contact = ({ showContact }) => {
  return (
    <section id="contact">
      <CSSTransition
        in={showContact}
        timeout={1000}
        classNames="contact"
        unmountOnExit
      >
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>Get in touch with me here.</p>
        </div>
      </CSSTransition>
    </section>
  );
};

export default Contact;

`
