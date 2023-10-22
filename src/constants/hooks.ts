export const hooks = {
  useEffect: {
    code: `
    import React from "react";
    import { useEffect, useRef, useState } from "react";
    
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
      const [fruit, setFruit] = useState();
      const ref=useRef()
    
      // Defining useEffect, input box will be focues after first render. 
    
      useEffect(()=>{
        ref.current.focus()
      },[])
      return (
        <div  style={containerStyle} className="App">
          <p>State fruit is getting changes and printed</p>
          <input
          ref={ref}
            type="text"
            value={fruit}
            placeholder="type fruit name"
            onChange={(e) => setFruit(e.target.value)}
          />
          {fruit && <h4>Typed fruit is: {fruit}</h4>}
        </div>
      );
    }`,
    description: `The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.`,
    explanation: `The function passed to useEffect is a callback function. This will be called after the component renders. In this function, we can perform our side effects or multiple side effects if we want. The second argument is an array, called the dependencies array. This array should include all of the values that our side effect relies upon. []->callback function will be called only after first rendered . [dependencies]-> callback function will be called only if the value of dependencies changes . if nothing passed-> callback will be called on every render. In our example , the input box is focused when first rendered .`,
  },
  useID: {
    code: `
    import React from 'react';
    import { useId } from 'react';
    
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
      const id = useId();
      return (
        <div style={containerStyle}>
          <label htmlFor={id}>Email</label>
          <input id={id} type="email" />
        </div>
      );
    };
    `,
    description: `useId is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.`,
    explanation: `Consider the below example, here Email component will have email feild , email feild will have id. but calling the same Email Component again and again will have the same it. With useId hook ,each time the component is called uniuque id will be tagged`,
  },
  useDebug: {
    code: `
    import React from 'react';
    import { useDebugValue, useState } from "react";
    
    export const App = (a) => {
    const containerStyle: React.CSSProperties = {
        backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '50px',
        color: 'white',
        height:'100vh'
        }
      const [value, setValue] = useState("abc");
      useDebugValue(value);
      let sum = a + 3;
      let mul = a * 3;
      useDebugValue(sum);
    
      return [sum, mul];
    };    
    `,
    description: `useDebugValue is a simple inbuilt Hook that provides more information about the internal logic of a custom Hook within the React DevTools. It allows you to display additional, helpful information next to your custom Hooks, with optional formatting.`,
    explanation: `In the above example, custom hook "useCustom " is created, which will take any number, return [sum, multiply] addition and mutiplication by 3. using useDebugValue hook, can debug the cutom hooks from the react dev tool. here the value i.e the number passed and the returned sum, will be shown in debug component.`,
  },
  useContext: {
    code: `
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
        height:'100vh'
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
    
    `,
    description: `The provided code demonstrates the usage of React's Context API and the useContext hook to manage and share global state between components.`,
    explanation: `Step 1: Create a Context
    
    Here, a new context is created using the createContext function.
    This context, MyContext, will serve as a container for shared data
    that can be accessed by components within the component tree where
    it is provided.
    
    Step 2: Create a Provider Component
    In this step, a provider component, MyProvider, is created. This
    component is responsible for managing and providing the shared
    state, count, and the increment function to its descendant
    components.
    count is a piece of state created using useState and initialized to
    0. This represents the shared state value that we want to manage.
    
    increment is a function that allows you to modify the count state
    when called.
    Inside the return statement, the MyContext.Provider component wraps
    its child components, which are passed as children. The value prop
    is set to an object containing count and increment. This object
    represents the data that will be made available to descendant
    components.
    Step 3: Create Consumer Components
    
    Two consumer components, Counter and Display, are created to access
    and utilize the shared state and functions provided by the
    MyProvider component.
    
    The App component wraps the entire application within the MyProvider
    component. By doing this, it makes the shared context and state
    available to its child components, Counter and Display, and any
    other components within its subtree.
    The child components, Counter and Display, are rendered inside the
    App component and have access to the shared context data provided by
    MyProvider.`,
  },
  useDeffered: {
    code: `
    import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';

    const List = ({ input }) => {
      const list_size = 2000;
    
      // Initalising UseDefferedValue, which will be updated if there is some delay in key press.
      const deferredInput = useDeferredValue(input);
    
      const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < list_size; i++) {
          l.push(<div key={i}>{deferredInput}</div>);
        }
        return l;
      }, [deferredInput]);
    
      useEffect(() => {
        console.log(input);
      }, [input, deferredInput]);
      return list;
    };

    function InputBox () {
      const [input, setInput] = useState("");
      const handleChange = (e) => {
        setInput(e.target.value);
      };
      return (
        <>
          <input type="text" value={input} onChange={handleChange} />
          <List input={input} />
        </>
      );
    };
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
          <p>Type without break and check console</p>
          <InputBox/>
        </div>
      );
    } 
    `,
    description: `The useDeferredValue hook allows us to fix this slow render problem by implementing a delay before some information is calculated. This works in a very similar way to debouncing and throttling since our deferred value will only be calculated after the important state updates have finished running`,
    explanation: `Consider the below example,We have maily two compoenet "InputBox" and "List". From "InputBox" compenent, input is being passed as prop to the "List", "List" Compenent is printing the prop recived 200 times by for loop. So On each KeyStrock the loop will be iterated 200 times, making app to render multiple times. So by using the "useDeffered" Hook, this can be solved. As useDefferd will add delay and will be updated if there is a time differnce between the event. const deferredInput = useDeferredValue(input); check the console for the value of Input and the value of deferredInput.`,
  },
  useReducer: {
    code: `
    import React, { useReducer } from "react";

    // Defining the initial state and the reducer
    const initialState = 0;
    const reducer = (state, action) => {
      switch (action) {
        case "add":
          return state + 1;
        case "subtract":
          return state - 1;
        case "reset":
          return 0;
        default:
          throw new Error("Unexpected action");
      }
    };
    
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
      const [count, dispatch] = useReducer(reducer, initialState);
      return (
        <div style={containerStyle}>
          <h2>{count}</h2>
          <button onClick={() => dispatch("add")}>add</button>
          <button onClick={() => dispatch("subtract")}>subtract</button>
          <button onClick={() => dispatch("reset")}>reset</button>
        </div>
      );
    };
    
    `,
    description: `The useReducer Hook is similar to the useState Hook.It allows for custom state logic.If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.`,
    explanation: `You can add a reducer to your component using the useReducer hook. The useReducer method gives you a state variable and a dispatch method to make state changes. const [state, dispatch] = useReducer(reducerMethod, initialValue). The reducer method contains your state logic. You can choose which state logic to call using the dispatch method. The method takes two arguments, the current state value and an action object. The action object contains the type of the action and additional data needed to perform the update. Let's take a simple example where , We'll perform three types of updates – for addition, substraction, and reset. initital sate is keept as 0, By defining reducer function,we'll use switch-case to select the type of operation to be performed based on the action dispatched.
    `,
  },
  useTransition: {
    code: `
    import React,{ useState, useTransition } from "react";
    // allows to make 2 diff state chnges at the samee tym
    // and rank them the order in which wanted to be
    // it makes app>more renders due to delay in excution low P state
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
      const [isPending, startTransition] = useTransition();
      const [input, setInput] = useState("");
      const [list, setList] = useState([]);
      const ListSize = 2000;
    
      const handleChange = (e) => {
        setInput(e.target.value); // high priority, render out imidiatly
        const l = [];
        startTransition(() => {
          for (let i = 0; i < ListSize; i++) {
            l.push(e.target.value);
          }
          setList(l); //low priority
        });
      };
    
      return (
        <div style={containerStyle}>
          <input type="text" value={input} onChange={handleChange} />
          {isPending
            ? "Loading...."
            : list.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
        </div>
      );
    };
    
    `,
    description: `We can use the useTransition hook to tell React that a certain state change will result in an expensive rendering. React will then deprioritize this state change allowing other renderings to take place faster providing a very responsive UI.`,
    explanation: `const [isPending, startTransition] = useTransition(); useTransition returns an array with exactly two items: The isPending flag that tells you whether there is a pending transition. The startTransition function that lets you mark a state update as a transition. The startTransition function returned by useTransition lets you mark a state update as a transition. Consider the below example, here the value of input box is being updadated on keypress as Input state. This value will be printed 200 times and update List state.But using startTransition setList has been set on lower prioprity. Is Pending will update the Transition State. Once the Transition has been completed then isPending will become true.`,
  },
  useInsertionEffect: {
    code: `
    import React,{ useState, useInsertionEffect } from "react";

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
      const [theme, setTheme] = useState("dark");
    
      useInsertionEffect(() => {
        const { color, bgColor } = getsColorsFor(theme);
        let styleRule = null;
        if (color !== buttonColor || bgColor !== buttonBgColor) {
          buttonColor = color;
          buttonBgColor = bgColor;
          styleRule = getStyleRule();
          document.head.appendChild(styleRule);
        }
    
        return () => {
          if (!styleRule) {
            return;
          }
          document.head.removeChild(styleRule);
        };
      }, [theme]);
    
      const onThemeChange = () => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      return (
        <div style={containerStyle}>
        <button onClick={onThemeChange} className="theme-button">
          Change my theme
        </button>
        </div>
      );
    };
    
    let buttonColor = "";
    let buttonBgColor = "";
    
    const getStyleRule = () => {
      const styleElement = document.createElement("style");
      const rule = \`
        .theme-button {
          color: \${buttonColor};
          background-color: \${buttonBgColor};
          padding: 1rem;
          border: 1px solid black;
          border-radius: 0.25rem;
          cursor: pointer;
          margin: auto;
      \`;
      styleElement.innerHTML = rule;
      return styleElement;
    };
    
    const getsColorsFor = (theme) => {
      if (theme === "light") {
        return { color: "black", bgColor: "white" };
      }
      return { color: "white", bgColor: "black" };
    };    
    `,
    description: `It has the same signature as useEffect, but it fires synchronously before all DOM mutations. i.e. it is fired before useLayoutEffect. It is used to inject styles into the DOM before reading layout. useInsertionEffect is intended for CSS-in-JS libraries, such as styled-components. Since this hook is limited in scope, this hook does not have access to refs and cannot schedule updates.`,
    explanation: `In the above example the theme of the button is being toggled. Since useInsertionEffect will be called in parallel to other DOM update. style is applied to button by calling the function "getStyleRule" from useInsertionEffect hook`,
  },
  useImperative: {
    code: `
    import React,{ forwardRef, useImperativeHandle, useRef, useState } from "react";

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
      const ref = useRef();
    
      return (
        <div style={containerStyle}>
          <h3>useImperativeHandle</h3>
          <Child ref={ref} />
          <button onClick={() => ref.current.handleClick()}>Parent Button</button>
        </div>
      );
    };
    
    const Child = forwardRef((props, ref) => {
      const [count, setCount] = useState(0);
      useImperativeHandle(ref, () => ({ handleClick }));
      const handleClick = (e) => {
        setCount(count + 1);
      };
      return (
        <div>
          <h1>{count}</h1>
          <button onClick={handleClick}>Child Button</button>
        </div>
      );
    })
    
    `,
    description: `The useImperativeHandle hook works in the similar phase of useRef hook but only it allows us to modify the instance that is going to be passed with the ref object which provides a reference to any DOM element. Although this hook is used in rare cases, it has some most advanced functionality.`,
    explanation: `Consider the above example, We have 2 Components-Parent and Child. Child Component has State which will be incremented by child button click. Now we want to implement the same increment functionality from parent component. For that Passed ref to child componend using forward ref using useImperativeHandle , attached handleClick function to ref , which can be acces from parent Component`,
  },
  useSyncExternalStore: {
    code: `
    import React,{ useSyncExternalStore } from "react";

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
      const width = useSyncExternalStore(
        (listner) => {
          window.addEventListener("resize", listner);
          return () => {
            window.removeEventListener("resize", listner);
          };
        },
    
        () => window.innerWidth
      );
      // (subcribe,getsnapshot,[getServer SS])
      // subscribe:-fun to register callback, called to store chnges.
      // getSS-fn returns current val of store,
      // get Sercer SS:-return ss during server rendering....optional
      return (
        <div style={containerStyle}>
          <h3>size:{width}</h3>
        </div>
      );
    };
    `,
    description: `useSyncExternalStore is a hook recommended for reading and subscribing from external data sources in a way that’s compatible with concurrent rendering features like selective hydration and time slicing. This method returns the value of the store and accepts three arguments: subscribe: function to register a callback that is called whenever the store changes.getSnapshot: function that returns the current value of the store.getServerSnapshot: function that returns the snapshot used during server rendering.`,
    explanation: `In the above Example "Store" component will print the window size. Here useSyncExternalStore has 2 call back function , subcribtion function that will stoe the window size change and getsnapshot function which will return the value of the window.

    `,
  },
  useCallback: {
    code: `
    import React, { useState, useCallback } from 'react';

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
      const [count, setCount] = useState(0);
    
      // Define a callback function that increments the count state
      const increment = useCallback(() => {
        setCount(count + 1);
      }, [count]); // The dependency array includes 'count'
    
      return (
        <div style={containerStyle}>
          <h1>Count: {count}</h1>
          <button onClick={increment}>Increment Count</button>
        </div>
      );
    }
    `,
    description: `In React, the useCallback hook is used to memoize functions, especially callback functions, to prevent unnecessary re-renders of components.`,
    explanation: `We use the useCallback hook to memoize the increment function. The increment function simply updates the count state by incrementing it.In the dependency array of useCallback, we include count. This means that the increment function will only be recreated if count changes. This optimization prevents unnecessary recreations of the increment function during re-renders.By using useCallback, you ensure that the increment function is stable and doesn't change on each render unless the dependencies specified in the array change. This can be especially helpful when passing callback functions as props to child components to optimize performance.`,
  },
  useMemo: {
    code: `
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
    `,
    description: ` This code is a simple React application that demonstrates the concept
    of memoization using the useMemo hook. Memoization is an
    optimization technique used to cache the results of expensive
    calculations so that they are not re-computed if the same input is
    provided again. In this example, the expensive calculation is
    the factorial of a number, and it's memoized to prevent redundant
    calculations.`,
    explanation: ` There are two components defined in this code: ExpensiveCalculation
    and App.
    ExpensiveCalculation is a functional component that calculates the
    factorial of a number and displays the result. It takes a single
    prop value, which represents the number for which the factorial
    needs to be calculated.
    calculateFactorial is a recursive function that computes the
    factorial of a number using a recursive approach.
    useMemo is used to memoize the result of the calculateFactorial
    function. It means that the calculateFactorial function will only be
    executed when props.value changes.
    The ExpensiveCalculation component is used within the App component.
    It's passed the current value of count as the value prop. As a
    result, whenever you click the "Increment Value" button, the
    factorial of the new count is calculated and displayed.
    The key concept here is that useMemo is used to memoize the result
    of the expensive calculation. It ensures that the factorial is only
    computed when the count prop (representing the value for which the
    factorial is calculated) changes. This optimization can
    significantly improve the performance of your application when
    dealing with costly computations or complex rendering logic.`,
  },
  useState: {
    code: `
    import React,{useState} from 'react';
    
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
    
      // initalising state fruit
      const [fruit,setFruit]=useState();
    
      return (
        <div style={containerStyle} className="App">
          <p>State fruit is getting changes and printed</p>
         <input type="text" value={fruit} 
         placeholder="type fruit name"
    
        // on Event trigger state fruit will be updated using setState method
         onChange={(e)=>setFruit(e.target.value)}/>
         {fruit &&
        <h4>Typed fruit is: {fruit}</h4>}
         
        </div>
      );
    }
    `,
    description: `The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.`,
    explanation: `consider the below example, initally fruit sate is defined using useState and updated based on the Input feild by setFruit method.`,
  },
  useRef: {
    code: `
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
        height:'100vh'
      }
      return (
        <div style={containerStyle}>
          <FocusInput />
          <Counter />
        </div>
      );
    }
    
    `,
    description: ` This example illustrates how you can use ref and useRef in a
    functional React component to interact with the DOM and store mutable
    values.
    By using a useRef to store such values, you prevent the component from
    re-rendering, which can be more efficient.`,
    explanation: ` FocusInput Component
    The inputRef is created using useRef and initialized as null.
    
    In the useEffect, we focus on the inputRef using
    inputRef.current.focus(), ensuring it happens only once when the
    component mounts.
    The FocusInput component renders an input field, and when the
    component loads, the input field will be automatically focused.
    
    Counter Component
    countRef is used to store a mutable value and is initialized with 0
    using useRef. This value does not trigger re-renders when changed.
    
    We also use the useState hook to maintain a stateful count value,
    which allows us to see the difference between state and the value
    stored in countRef.
    Clicking the "Increment" button modifies the value stored in
    countRef, which is displayed alongside the stateful count.`,
  },
};
