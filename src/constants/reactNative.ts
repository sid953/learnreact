export const reactNative = {
  helloWorldNative: {
    code: `
    import React from 'react';
    import { View, Text,StyleSheet } from 'react-native-web';
    
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
        <View>
          <Text style={styles.text}>Hello, World!</Text>
        </View>
        </div>
      );
    };
      const styles = StyleSheet.create({
        text: {
          color:'white'
        },
      }); 
`,
    description: `This is a simple example of a React Native application.React Native is a framework that allows you to build mobile applications for iOS and Android using JavaScript and React, a popular JavaScript library for building user interfaces.`,
    explanation: `
      import React from 'react';: This line imports the React object from the 'react' module. In React and React Native, you typically use the React object to create and define React components.

      { View, Text } from 'react-native';: This line imports the View and Text components from the 'react-native' module. In React Native, you use these components to build the user interface of your mobile application. View is a container for other UI components, and Text is used to display text.
      
      function HelloWorldApp() { ... }: This code defines a JavaScript function called HelloWorldApp. This function is a React component and is written in the form of a JavaScript function. React components are the building blocks of React and React Native applications. In this case, it's a functional component because it's a simple function that returns JSX.
      
      Inside the HelloWorldApp function, there is a return statement that returns JSX. JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to describe the structure and layout of your user interface. In this case, it's returning a View component that contains a Text component.
      
      <View> and <Text>: These JSX elements represent React Native components. <View> is a container that can hold other UI components, and <Text> is used to display text on the screen.
      
      <Text>Hello, World!</Text>: This is the text that will be displayed within the Text component. It simply says "Hello, World!"`,
  },
  statePropsNative: {
    code: `
    import React, { useState } from 'react';
    import { View, Text, Button,StyleSheet } from 'react-native-web';
    
    const Greeting = (props) => {
      return (
        <View>
          <Text style={styles.text}>Hello, {props.name}!</Text>
        </View>
      );
    };
    
    const Counter = () => {
      const [count, setCount] = useState(0);
    
      const increment = () => {
        setCount(count + 1);
      };
    
      return (
        <View>
          <Text style={styles.text}>Count: {count}</Text>
          <Button title="Increment" onPress={increment} />
        </View>
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
        <View>
          <Greeting name="John" />
          <Greeting name="Alice" />
          <Counter />
        </View>
        </div>
      );
    };
    const styles = StyleSheet.create({
        text: {
          color:'white'
        },
      }); 
    
`,
    description: `In React Native, just like in standard React, components can receive data through two main mechanisms: props and state. Both props and state are essential for building dynamic and interactive applications`,
    explanation: `
    Props (short for "properties") are a way to pass data from a parent component to a child component. They are immutable and are used to provide configuration and data to a component.
    In this example, the Greeting component receives a name prop, which is a string. The App component then uses Greeting twice, passing different names as props. The Greeting component displays a personalized greeting based on the value of the name prop.
    State is used to manage and track data that can change within a component. Unlike props, which are passed from parent to child, state is managed within a component itself.
    In this example, the Counter component uses the useState hook to manage its internal state. It keeps track of the count value, and when the "Increment" button is clicked, it updates the state using the setCount function. The count value is then displayed within the component.
    In summary, props are used to pass data from parent to child components, while state is used to manage and track data that can change within a component itself. Combining these two concepts allows you to create interactive and data-driven React Native app.
    `,
  },
  stylingReactNative: {
    code: `
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native-web';
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 20,
        color: 'blue',
      },
    });
    
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
        <View style={styles.container}>
          <Text style={styles.text}>Hello, StyleSheet!</Text>
        </View>
        </div>
      );
    };
`,
    description: `In React Native, StyleSheet is a built-in utility that provides a way to create reusable style objects for your components. Using StyleSheet can improve performance by optimizing the way styles are applied and reduce the risk of runtime errors. Here's an example of how to use StyleSheet:`,
    explanation: `
    First, import StyleSheet from react-native.
    Define your styles using the StyleSheet.create() method. This method takes an object where each key is a style name, and each value is an object containing the style properties.
    In this example, we use the styles.container and styles.text objects to style a View and a Text component.
    The primary advantage of using StyleSheet is that it optimizes the styles, ensuring that the styles are only updated when necessary. It also helps to catch potential styling errors at compile time rather than at runtime, which can lead to better performance and a smoother user experience.
    `,
  },
  handlingUserInput: {
    code: `
    import React, { useState } from 'react';
    import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native-web';
    
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
      const [text, setText] = useState('');
      const [message, setMessage] = useState('');
    
      const handleTextChange = (newText) => {
        setText(newText);
      };
    
      const handleButtonPress = () => {
        if (text === '') {
          setMessage('Please enter some text.');
        } else {
          Alert.alert('Button Pressed', \`You entered: \${text}\`);
        }
      };
    
      return (
        <div style={containerStyle} className="App">
        <View style={styles.container}>
          <Text style={styles.message}>{message}</Text>
          <TextInput
            placeholder="Type something"
            value={text}
            onChangeText={handleTextChange}
            style={styles.input}
          />
          <Button title="Submit" onPress={handleButtonPress} />
        </View>
        </div>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      message: {
        color: 'red',
      },
      input: {
        width: 200,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 8,
        color:'white',
        margin: 10,
      },
    });
`,
    description: `In React Native, the TextInput and Button components are essential for capturing user input and creating interactive buttons. `,
    explanation: `
    The TextInput component in React Native is used to create an input field where users can enter text. 
    The Button component in React Native is used to create a standard, platform-specific button that users can interact with. It provides a simple way to trigger an action when the button is pressed. 
    The TextInput captures user input, and the Button is used to trigger an action when pressed. The component includes some basic validation to display a message if the user tries to submit without entering any text. Styling is also applied using the StyleSheet object.
    You can use this component in your React Native application to allow users to input text and submit it by pressing the button.
    `,
  },
  useFnHooks: {
    code: `
    import React, { useState, useEffect } from 'react';
    import { View, Text, Button, StyleSheet } from 'react-native-web';
    
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
    
      // useEffect to update the document title when count changes
      useEffect(() => {
        document.title = \`Count: \${count}\`;
      }, [count]);
    
      return (
        <div style={containerStyle} className="App">
        <View style={styles.container}>
          <Text style={styles.text}>Count: {count}</Text>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
          <Button title="Reset" onPress={() => setCount(0)} />
        </View>
        </div>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
        color:'white'
      },
    }); 
`,
    description: `Functional components are a fundamental part of React Native (and React) that allow you to create UI elements and encapsulate logic in a more concise and easy-to-understand manner compared to class components. They are essentially JavaScript functions that return JSX to describe the user interface.`,
    explanation: `
    We use the useState hook to manage the count state, which starts at 0.
    We use the useEffect hook to update the document title whenever the count changes. The effect only runs when the count dependency changes, ensuring that we don't set the title unnecessarily.
    The component renders the current count and three buttons: "Increment," "Decrement," and "Reset." These buttons call functions that update the count state using setCount.
    This example creates a simple counter app with a changing document title to illustrate the use of useState for state management and useEffect for handling side effects in React Native.
    `,
  },
  axiosNative: {
    code: `
    import React, { useState, useEffect } from 'react';
    import { View, Text, Button, StyleSheet } from 'react-native-web';
    import axios from 'axios';
    
    export const App = () => {
    const containerStyle: React.CSSProperties = {
        backgroundImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '50px',
        color: 'white',
        height:'100%'
        }
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
        // Make a GET request using Axios
        axios
          .get(apiUrl)
          .then((response) => {
            // Handle a successful response
            setData(response.data);
            setLoading(false);
          })
          .catch((err) => {
            // Handle errors
            setError(err);
            setLoading(false);
          });
      }, []);
    
      return (
        <div style={containerStyle} className="App">
        <View style={styles.container}>
          <Text style={styles.title}>API Call Example</Text>
    
          {loading ? (
            <Text>Loading data...</Text>
          ) : error ? (
            <Text>Error: {error.message}</Text>
          ) : (
            <View>
              <Text style={styles.text}>Data from API:</Text>
              {data.map((item) => (
                <Text key={item.id} style={styles.text}>{item.title}</Text>
              ))}
            </View>
          )}
    
          <Button title="Reload Data" onPress={() => window.location.reload()} />
        </View>
        </div>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
      },
      text: {
        color: 'white'
      }
    });
`,
    description: `Making API calls in a React Native application is a common task, and Axios is a popular library for handling HTTP requests. Axios simplifies the process of sending requests and handling responses in React Native. `,
    explanation: `
    First, you need to install Axios in your project- npm install axios & import it.
    Inside the ApiCallExample functional component, we define three state variables: data to store the API response, loading to indicate if the request is in progress, and error to handle errors.
    In the useEffect hook, we make a GET request to the JSONPlaceholder API (a mock API) to fetch a list of posts. When the request is successful, we update the data state with the response data. If there's an error, we handle it and set the error state.
    In the return section, we render the appropriate UI based on the state variables. If data is still loading, we display a loading message. If there's an error, we show the error message. If the data is successfully fetched, we display the list of post titles.
    Finally, we have a "Reload Data" button that allows you to trigger a page refresh, which essentially re-fetches the data from the API.
    `,
  },

  guessTheNumber: {
    code: `
    import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [highScore, setHighScore] = useState(null);
  const [seconds, setSeconds] = useState(60);
  const [isGameActive, setIsGameActive] = useState(false);

  useEffect(() => {
    if (isGameActive && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0) {
      endGame();
    }
  }, [isGameActive, seconds]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const startGame = () => {
    setNumberToGuess(generateRandomNumber());
    setAttempts(0);
    setMessage('');
    setSeconds(60);
    setIsGameActive(true);
  };

  const endGame = () => {
    if (attempts < highScore || highScore === null) {
      setHighScore(attempts);
    }
    setIsGameActive(false);
  };

  const handleGuess = () => {
    const guess = parseInt(userGuess, 10);
    setAttempts(attempts + 1);

    if (guess === numberToGuess) {
      setMessage(\`Congratulations! You guessed the number in \${attempts} attempts.\`);
      endGame();
    } else if (guess < numberToGuess) {
      setMessage('Try a higher number');
    } else {
      setMessage('Try a lower number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number</Text>
      <Text style={styles.message}>{message}</Text>
      {isGameActive ? (
        <Text style={styles.timer}>Time left: {seconds} seconds</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        keyboardType="numeric"
        onChangeText={(text) => setUserGuess(text)}
        value={userGuess}
        editable={isGameActive}
      />
      <Button
        title={isGameActive ? 'Guess' : 'Start Game'}
        onPress={isGameActive ? handleGuess : startGame}
      />
      {highScore !== null ? (
        <Text style={styles.highScore}>High Score: {highScore} attempts</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  animation: {
    width: 50,
    height: 50,
  },
  message: {
    marginVertical: 20,
    fontSize: 18,
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  timer: {
    fontSize: 16,
  },
  highScore: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default App;

`,
    description: `This code represents a simple number-guessing game built in React Native, where players attempt to guess a randomly generated number while racing against a timer. The game's state is managed through hooks like useState and useEffect, and the user interface is created using React Native's UI components. `,
    explanation: `
    The code starts with import statements, bringing in necessary libraries and components for building a React Native app.
    The component uses the useState hook to manage various pieces of state.
    numberToGuess: The random number the player needs to guess.
    userGuess: The user's input for guessing the number.
message: A message displayed to the player based on their guess.
attempts: The number of attempts the player has made.
highScore: The player's high score (fewest attempts to guess correctly).
seconds: A timer that counts down from 60 seconds.
isGameActive: A flag to determine whether the game is currently active.
generateRandomNumber function generates a random number between 1 and 100, which the player must guess.

startGame function initializes the game by generating a new random number, resetting the number of attempts, clearing the message, resetting the timer, and setting the game to active.

endGame function is called when the game ends. It updates the high score if the player's attempts are less than the previous high score or if there's no previous high score. It then sets the game to inactive.

handleGuess function is called when the player makes a guess. It checks whether the guess is correct, too low, or too high and updates the message accordingly. If the guess is correct, it ends the game.
    `,
  },
};
