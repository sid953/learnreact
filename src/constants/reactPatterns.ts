export const reactPatterns = {
  expressions: {
    code: `
      import React from "react";
      export const App = () =>{
        const containerStyle: React.CSSProperties = {
          backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '50px',
          color: 'white',
          height:'100vh'
        }
        let name = "chantastic";
        return (
          <div  style={containerStyle} className="App">
            <p>Hi {name}!</p>
          </div>
        );
      }`,
    description: `this React component, when rendered, will show a greeting message in the format "Hi {name}!" with "chantastic" (or the value of the name variable) as the name in the greeting. It demonstrates how to include dynamic content within JSX by wrapping expressions with curly braces..`,
    explanation: `
      In the given React code, we have a functional component named Greeting. This component renders a simple greeting message with a dynamic part that uses the variable name.
    let name = "chantastic";: Here, a variable name is declared and initialized with the string "chantastic." This variable stores the name you want to display in the greeting message.
    return <div>Hi {name}!</div>;: This line is the JSX (JavaScript XML) part of the component's return statement. It renders a <div> element with the content "Hi {name}!" where {name} is enclosed in curly braces. The curly braces are used to insert a JavaScript expression (in this case, the value of the name variable) into the JSX. So, when the component is rendered, it will display "Hi chantastic!" where "chantastic" is replaced with the value of the name variable.`,
  },
  destructuringProps: {
    code: `
    import React from 'react';

    interface Person {
      name: string;
      age: number;
    }
    
    export const App = () =>{
      const personData: Person = {
        name: 'Alice',
        age: 30,
      };
      const containerStyle: React.CSSProperties = {
        backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '50px',
        color: 'white',
        height:'100vh'
      }
    
      const ChildComponent: React.FC<{ person: Person }> = ({ person }) => {
        const { name, age } = person; // Destructure properties from the "person" object
    
        return (
          <div>
            <h2>Child Component</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
          </div>
        );
      };
    
      return (
       <div style={containerStyle} className="App">
          <h1>Parent Component</h1>
          <ChildComponent person={personData} />
        </div>
      );
    }
    `,
    description: `This code defines a React component named ParentChildComponent that demonstrates the concept of destructuring props and how to use child components within a parent component.`,
    explanation: `
    We define a Person interface specifying the shape of the data (name and age).
    We have a parent component ParentChildComponent that holds data for a person named Alice.
    Inside ParentChildComponent, there's a child component ChildComponent.
    ChildComponent receives the person prop and uses destructuring to access name and age from it.
    When rendered, ParentChildComponent displays "Parent Component," and within it, ChildComponent displays "Child Component," along with the person's name and age.`,
  },
  JSXSpreadAttributes: {
    code: `
    import React from 'react';

    const PersonDetails = ({ name, age, city }) => {
      return (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>City: {city}</p>
        </div>
      );
    };
    
    const containerStyle: React.CSSProperties = {
      backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '50px',
      color: 'white',
      height:'100vh'
    }
    
    const person = {
      name: 'Alice',
      age: 30,
      city: 'New York',
    };
    
    export const App = () => {
      return (
         <div style={containerStyle} className="App">
          <h1>Person Details</h1>
          <PersonDetails {...person} />
        </div>
      );
    }
    
    `,
    description: `JSX spread attributes, also known as object spread, allow you to pass all properties of an object as individual attributes to a JSX element. This is useful when you have an object with properties, and you want to pass all of them as props to a component without specifying each one manually.`,
    explanation: `
    We have a functional component PersonDetails that receives name, age, and city as props.
We define a person object with these properties.
In the App component, we render PersonDetails and use {...person} to spread all properties from the person object as individual props to the PersonDetails component.
When PersonDetails is rendered, it displays the person's name, age, and city without having to manually pass each prop.
This makes the code cleaner and more maintainable, especially when dealing with objects containing multiple properties.
`,
  },

  mergeDestructuredProps: {
    code: `
    import React from 'react';

const PersonDetails = ({ name, age }) => {
  const birthYear = new Date().getFullYear() - age; // Calculate birth year

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Birth Year: {birthYear}</p>
    </div>
  );
};

export const  App =() =>{
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  const person = {
    name: 'Alice',
    age: 30,
  };

  return (
   <div style={containerStyle} className="App">
      <h1>Person Details</h1>
      <PersonDetails {...person} />
    </div>
  );
}


    `,
    description: `Merging destructured props with other values in a component allows you to combine both props received from parent components and local values in your component. This can be useful for applying dynamic changes or calculations to the props before rendering them in your component.`,
    explanation: `
    In this example, we receive name and age as props in the PersonDetails component. Within the component, we calculate the birth year by subtracting the age from the current year, and then we render the name, age, and the calculated birth year. This demonstrates how you can merge destructured props (name and age) with local values (birthYear) to provide additional information.

    By merging props with other values, you can perform various operations, such as calculations, formatting, or conditional rendering, to enhance the data passed to your component.
`,
  },
  conditionalRendering: {
    code: `
    import React, { useState } from 'react';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <div style={containerStyle} className="App">
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <p>Welcome, User! You are logged in.</p>
      ) : (
        <p>Please log in to access your account.</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}
`,
    description: `
    Conditional rendering in React allows you to conditionally display components or content based on certain conditions or expressions. You can use conditional statements or ternary operators to control what is rendered in your React components.`,
    explanation: `
    In this example, we use a state variable isLoggedIn to control the conditional rendering. Here's how it works:

    We initialize the isLoggedIn state to false using the useState hook.
    
    Inside the component's JSX, we use curly braces to enclose JavaScript expressions for conditional rendering.
    
    We use a ternary operator to conditionally render different messages and buttons based on the isLoggedIn state. If the user is logged in, it displays a welcome message and a "Log Out" button. If the user is not logged in, it displays a login prompt and a "Log In" button.
    
    The onClick event handler on the button toggles the isLoggedIn state, which simulates the login/logout action.
    
    This example demonstrates how you can conditionally render content based on the state of your React component. Conditional rendering is useful for creating dynamic and interactive user interfaces based on different conditions, such as user authentication, data availability, or user interactions.
    `,
  },
  arrayAsChildren: {
    code: `
    import React from 'react';

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export const App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  const data = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div style={containerStyle} className="App">
      <h1>List of Items</h1>
      <List items={data} />
    </div>
  );
}

    `,
    description: `
    In React, the concept of "Array as Children" or "Children as a Function" allows you to pass an array of elements or data as children to a React component. This pattern is often used for more advanced customization and rendering flexibility. Instead of directly passing JSX elements as children, you pass an array, and then you map over that array inside the component's render method.`,
    explanation: `
    In this example:

We have a List component that receives an items prop, which is an array of strings.

Inside the List component, we use the map method to iterate over the items array and render each item as an <li> element within a <ul> list. We use the key prop to help React efficiently update the list.

In the App component, we define an array called data with some sample items and render the List component, passing data as the items prop.

By using "Array as Children," we can customize how the items are rendered within the list without modifying the List component itself. This approach is particularly useful when you want to apply conditional rendering or perform more complex transformations on the items before rendering them. It provides greater flexibility for rendering components based on data. `,
  },
  childrenPassThrough: {
    code: `
    import React from 'react';

// A simple component that wraps its children with a div container
function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="wrapper">{children}</div>;
}

export const App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <div style={containerStyle} className="App">
      <h1>Children Pass-through Example</h1>

      {/* Using the Wrapper component to wrap the children */}
      <Wrapper>
        <p>This is a paragraph inside the wrapper.</p>
      </Wrapper>
    </div>
  );
}

export default App;
`,
    description: `
    "Children pass-through" is a technique in React where you pass children (JSX elements) to a component and then render those children within the component's JSX. This is useful when you want to wrap a group of JSX elements inside another component.`,
    explanation: `
    In this example:

We create a Wrapper component that accepts a children prop, which is of type React.ReactNode. This prop represents the children JSX elements that we want to wrap.

Inside the Wrapper component, we render a <div> element with the CSS class "wrapper" and place the {children} within it. This effectively renders the children passed to the Wrapper component.

In the App component, we use the Wrapper component to wrap a paragraph (<p>) and a button (<button>).

When you run this code, the Wrapper component wraps the children (paragraph and button) inside a <div> with the class "wrapper." This allows you to create reusable components that can wrap and manipulate their children while maintaining a clean and organized structure in your JSX.

The children pass-through technique is commonly used in higher-order components and component composition to create more flexible and reusable UI components in React.`,
  },
  proxyComponent: {
    code: `
    import React from 'react';

const Button = (props) => {
  const buttonProps = { type: 'button', ...props };
  return <button {...buttonProps} />;
};

export const  App = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={containerStyle} className="App">
      <h1>Custom Buttons</h1>

      <Button onClick={handleClick}>Click me</Button>

      <Button className="CTA" onClick={handleClick}>
        Send Money
      </Button>
    </div>
  );
}


    `,
    description: `
    A "Proxy component" is not a standard term in React. However, it can refer to a common pattern in React where you create a new component to wrap or enhance another component without modifying the original component's behavior or rendering. This can be useful for adding extra functionality or props to a component, and it's often used in higher-order components (HOCs) or when you want to isolate changes to a component.`,
    explanation: `
    In the provided example, the concept of a "Proxy component" is illustrated. The purpose of this Proxy component, named Button, is to simplify the creation of buttons in a web app by consistently setting the type attribute to "button" and proxying other props to the lower-level button component.

Here's an explanation of the example:

Original HTML buttons need to have the type attribute set to "button." This is often considered best practice for ensuring consistent behavior.

The Button component is created. It takes props as its argument.

Inside the Button component, it renders a lower-level <button> element with the type attribute set to "button" and uses the JSX spread operator {...props} to pass all other props to the button. This allows you to pass additional attributes like className, onClick, or any other valid button attributes.

By using the Button component, you ensure that the type="button" is consistently applied to every button you create with it.
    .`,
  },
  styleComponent: {
    code: `
    import React from 'react';

const Btn = ({ className, primary, ...props }) => (
    <button
    type="button"
    className={\`btn \${primary ? 'btn-primary' : ''} \${className || ''}\`}
    {...props}
  />
);

const PrimaryBtn = (props) => <Btn {...props} primary />;

export const App = ()  =>{
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <div style={containerStyle} className="App">
      <h1>Proxy Component for Styling</h1>

      <h2>Using Primary Button</h2>
      <PrimaryBtn>Primary Button</PrimaryBtn>
      <h2>Using Primary Button with Custom Class</h2>
      <PrimaryBtn className="custom-class">Primary Button with Custom Class</PrimaryBtn>
    </div>
  );
}

    `,
    description: `
    This code defines a simple React component called Btn and a related component called PrimaryBtn that acts as a proxy component. It also includes a parent component named App. The purpose of these components is to provide a way to style buttons and demonstrate how a proxy component can be used for styling.`,
    explanation: `
    Here's a breakdown of the code:

    Btn Component:
    
    The Btn component is a button that accepts props, including className and primary.
    It uses a template literal to set the className attribute of the button. The primary prop is used to conditionally add the "btn-primary" class if primary is true. Any additional class passed via the className prop is also included.
    The component spreads any other props passed to it onto the button element using the ...props syntax.
    PrimaryBtn Component:
    
    The PrimaryBtn component is a wrapper around the Btn component, and its purpose is to create a primary-styled button.
    It passes the primary prop with a value of true to the Btn component to indicate that it should be styled as a primary button. All other props are passed through to the Btn component.
    App Component:
    
    The App component is the main application component.
    It renders a series of buttons with different styles to demonstrate the usage of the Btn and PrimaryBtn components.
    There are three sections, each containing a header (h2) and a button:
    "Using Primary Button": Demonstrates a primary button created using the PrimaryBtn component.
    "Using Generic Button": Demonstrates a generic button created using the Btn component.
    "Using Primary Button with Custom Class": Demonstrates a primary button with a custom class by passing the "custom-class" as a prop to the PrimaryBtn component.
    The App component is exported as the default export.
    This code showcases how you can create a proxy component (PrimaryBtn) to apply consistent styling to elements like buttons while allowing customization through props. The Btn component defines the core behavior for rendering buttons with flexible styling`,
  },
  eventSwitch: {
    code: `
    import React from 'react';

export const App = ()  =>{
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  const handleEvent = (eventType) => {
    // Handle the event based on the provided eventType
    switch (eventType) {
      case 'click':
        // Handle click event
        console.log('Click event handled');
        break;
      case 'hover':
        // Handle hover event
        console.log('Hover event handled');
        break;
      default:
        console.log('Unknown event type');
    }
  };

  return (
    <div style={containerStyle} className="App">
      <p> Please Check console for better understanding</p>
      <button onClick={() => handleEvent('click')}>Click Me</button>
      <div onMouseEnter={() => handleEvent('hover')}>Hover Over Me</div>
    </div>
  );
}

    `,
    description: `
    When dealing with components that handle multiple event types, you may find that the function names responsible for handling these events become repetitive and don't provide much value, as they essentially proxy or delegate to other actions or functions. In such cases, you can employ a more dynamic and concise approach to handle these events by using a generic event handling function and passing the event type or other parameters as needed..`,
    explanation: `
    In this example, we've defined a single handleEvent function that accepts an eventType parameter. The component's elements invoke this function with the appropriate event type. This way, you can handle different events more dynamically without having to create separate event handling functions for each event type.

This approach can help reduce repetitive code and improve maintainability when dealing with components that handle multiple event types. It also makes your code more concise and flexible, allowing you to easily add new event types or customize the handling logic as needed.`,
  },
  layoutComponent: {
    code: `
    import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; 2023 My App</p>
    </footer>
  );
};

export const App: React.FC = ({ children }) => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <div style={containerStyle} className="App">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
 `,
    description: `
    A "Layout" component in React is a higher-level component that is responsible for structuring the layout and appearance of your web application. It often includes common elements like headers, footers, sidebars, and containers to maintain a consistent look and feel across different pages or sections of your application. Layout components are particularly useful for keeping your application organized and DRY (Don't Repeat Yourself).`,
    explanation: `
    In this example, we have three components:

    Header: This component represents the header section of your application and typically contains the app's name and navigation links.
    
    Footer: This component represents the footer section, typically showing copyright information.
    
    Layout: The core layout component that wraps around the main content (passed as children). It renders the header, main content area, and footer.
    
    The Layout component acts as a container that maintains the overall structure of your application. By using this layout component, you can ensure a consistent structure across various pages while keeping your code organized and easy to maintain.`,
  },
  containerComponent: {
    code: `
    import React, { useState } from 'react';

const containerStyle: React.CSSProperties = {
  backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '50px',
  color: 'white',
  height:'100vh'
}

// Presentational Component (Functional Component)
const UserProfile: React.FC<{ username: string; email: string }> = ({ username, email }) => (
  <div style={containerStyle} className="App">
    <h2>User Profile</h2>
    <p>Username: {username}</p>
    <p>Email: {email}</p>
  </div>
);

// Container Component (Functional Component)
export const App: React.FC = () => {
 
  const [user, setUser] = useState({ username: 'john_doe', email: 'john@example.com' });

  return <UserProfile  username={user.username} email={user.email} />;
};

    `,
    description: `
    A Container component in React typically refers to a component that holds the state and behavior logic and doesn't have much concern with the presentation or appearance. It is often used as a higher-level component to manage the data and provide it to presentational or functional components.`,
    explanation: `
    In this example, UserProfile is a presentational functional component that receives props and displays user information. App is the container component that manages the state (in this case, user data) and passes it down to the UserProfile component as props.

This separation of concerns allows you to keep your presentation and business logic separate. The container component handles data management, interactions with APIs, and other logic, while the presentational component focuses on rendering the UI.

In more complex applications, you can also use libraries like Redux to manage application state in a centralized way, further separating the concerns of state management from presentational components.`,
  },
  stateHoisting: {
    code: `
    import React, { useState } from 'react';

export const App = () =>{
  const [count, setCount] = useState(0);
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={containerStyle} className="App">
      <ChildComponent count={count} onIncrement={handleIncrement} />
    </div>
  );
}

function ChildComponent({ count, onIncrement }: { count: number; onIncrement: () => void }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

    `,
    description: `
    In this pattern, stateful container components pass callback functions down to child components. These callback functions are used to handle events in the child components, and when the events occur, they trigger changes in the state of the parent component. This allows for the management of state in the parent component while keeping the child components stateless.`,
    explanation: `
    ParentComponent holds the state count and the handleIncrement function for modifying the count state. It passes the count state and the handleIncrement function as props to ChildComponent.

ChildComponent receives the count prop and the onIncrement callback function as props. When the button is clicked in ChildComponent, it invokes the onIncrement callback passed from the parent, which updates the state in the parent component.
This "state hoisting" pattern allows you to manage and modify the state in the parent component, while the child component remains stateless and focused on rendering and handling specific interactions.`,
  },
  controlledInput: {
    code: `
    import React, { useState } from 'react';

export const App = () => {
  // Create a state variable to hold the input value
  const [inputValue, setInputValue] = useState('');
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }

  // Event handler to update the state when the input value changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={containerStyle} className="App">
      <label htmlFor="controlledInput">Enter Text: </label>
      <input
        type="text"
        id="controlledInput"
        value={inputValue} // The value is controlled by the state
        onChange={handleInputChange} // Handle changes via the event handler
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

    `,
    description: `
    In React, a controlled input is an input element (e.g., text input, checkbox, select) whose value is controlled by the component's state. This means that the component's state is the single source of truth for the input's value, and any changes to the input value are controlled and updated via the component's state and event handlers.
   `,
    explanation: `
    We initialize a state variable inputValue using the useState hook to hold the value of the input.

The handleInputChange function is an event handler that updates the inputValue state whenever the input value changes. It is attached to the onChange event of the input element.

The input element is controlled because it has the value attribute set to inputValue. This means that the input's value is always synchronized with the inputValue state.

The input element's changes are handled by the handleInputChange event handler, which updates the state, and the updated value is then reflected in the <p> element below the input.

Using controlled inputs ensures that the component's state and the input element's value are always in sync. This is useful for scenarios where you need to perform actions or validation based on the input value and maintain a single source of truth for the data.
    `,
  },
  childrenTypes: {
    code: `
    import React from 'react';
    export const App = () => {
      const containerStyle: React.CSSProperties = {
        backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '50px',
        color: 'white',
        height:'100vh'
      }
      return (
        <div style={containerStyle} className="App">
    
        <div>Children Type as String: Hello World!</div>
        <div>Children Type as Array:
          {[
            ["Hello ", <span>World</span>, "!"]
          ]}
        </div>
        </div>
      );
    }    
    `,
    description: `
    React can render children from most types.
    In most cases it's either an array or a string.
   `,
    explanation: `
    Children Type as String:

The first <div> element contains a simple text string: "Hello World!".
This demonstrates that you can directly include plain text or strings as children within JSX elements.
Children Type as Array:

The second <div> element shows an example of using an array as children.
The array contains multiple elements, which include strings and a React element (a <span> containing the text "World").
The array is enclosed within curly braces {} to indicate that it is JavaScript code to be evaluated.
The elements within the array are enclosed in square brackets [], which is a common way to group elements in an array.
This example illustrates that you can use arrays to structure and group children elements within your JSX.`,
  },
  defaultProps: {
    code: `
    import React from 'react';
    export const App = () => {
      const containerStyle: React.CSSProperties = {
        backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '50px',
        color: 'white',
        height:'100vh'
      }
      return (
        <div style={containerStyle} className="App">
    
        <div>Children Type as String: Hello World!</div>
        <div>Children Type as Array:
          {[
            ["Hello ", <span>World</span>, "!"]
          ]}
        </div>
        </div>
      );
    }    
    `,
    description: `
    Default props are useful for providing fallback values for props when they are not explicitly provided. This ensures that your components work as expected, even if certain props are omitted.
   `,
    explanation: `
    In this example, you are rendering the Greeting component with a name prop of "John." If no name prop is provided, it defaults to "Guest" as specified in Greeting.defaultProps. The rendered output will be a <div> element with the greeting message "Hi John!" (or "Hi Guest!" if no name prop is provided).`,
  },
};
