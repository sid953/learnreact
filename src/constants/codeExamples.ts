export const reactCode: string =   
`import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-clock/dist/Clock.css';
import "animate.css/animate.min.css";
import { App } from './App';

const root = createRoot(document.getElementById('app'));
root.render(
<StrictMode>
    <App/>
</StrictMode>
);
`
export const styles = `
h1 {
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
  }
  /* Image.css */
  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  
  .image-container img {
    width: 100px;
    height: 100px;
  }
  
  /* Login Form */
  .login-container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .logInBtn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
  }
  
  .alert {
    margin-top: 10px;
    padding: 10px;
    background-color: #4CAF50;
    color: #fff;
    border-radius: 5px;
  }
  
  /* CustomSidebar.css */
  .sidebar {
    height: 600px;
    position: sticky;
    top: 0;
    overflow-y: scroll;
    padding: 1rem;
    background-color: #333 !important; /* Sidebar background color */
    color: #fff; /* Text color */
  }
  
  .sidebar .nav-link {
    color: #fff; /* Link text color */
  }
  
  .sidebar .nav-link:hover {
    background-color: #555; /* Hover background color */
  }
  
  .sidebar .position-sticky {
    top: 1rem;
  }
  .table-bordered td, .table-bordered th {
    border: 1px solid white;
    color:white
  }

  .animation{
    background: linear-gradient(45deg, #ffc107, transparent);
    height: 100vh;

  }
  `
export const axiosExample: string = `import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import './style.css';

export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress)",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100%'
  }
  const [users, setUsers] :any= useState([]);
  const [editedUser, setEditedUser] = useState({ id: null, name: '', email: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response:any) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const resetEditedUser = () => {
    setEditedUser({ id: null, name: '', email: '' });
  };

  const handleEditClick = (user:any) => {
    setEditedUser(user);
    setShowModal(true);
  };

  const handleAddClick = () => {
    resetEditedUser();
    setShowModal(true);
  };

  const handleModalClose = () => {
    resetEditedUser();
    setShowModal(false);
  };

  const handleSaveUser = () => {
    if (editedUser.id) {
      // Update an existing user
      axios
        .put("https://jsonplaceholder.typicode.com/users/"+editedUser.id, editedUser)
        .then(() => {
          const updatedUsers:any = users.map((user:any) =>
            user.id === editedUser.id ? editedUser : user
          );
          setUsers(updatedUsers);
          handleModalClose();
        })
        .catch((error) => {
          console.error('Error updating user:', error);
        });
    } else {
      // Create a new user
      axios
        .post('https://jsonplaceholder.typicode.com/users', editedUser)
        .then((response) => {
          setUsers([...users, response.data]);
          handleModalClose();
        })
        .catch((error) => {
          console.error('Error creating user:', error);
        });
    }
  };

  const handleDeleteUser = (userId:any) => {
    // Delete a user and update the state
    axios.delete('https://jsonplaceholder.typicode.com/users/'+userId)
      .then(() => {
        const updatedUsers = users.filter((user:any) => user.id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div style={containerStyle}>
      <h1>User Management</h1>
      <Button onClick={handleAddClick}>Add User</Button>

      <Modal show={showModal} onHide={handleModalClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{editedUser.id ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={editedUser.name}
                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={editedUser.email}
                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user:any) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditClick(user)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};`
export const analogClock: string = `
import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  };
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="text-center" style={containerStyle}>
      <h1>Analog Clock</h1>
    <Clock value={value} />
  </div>
  );
};
`
export const backgroundImage: string =`import React from 'react';
const MyData: React.FC<{ name: string }> = ({ name }) => {
  return(
    <div className="text-center">
    <h1>Hello my name is {name}!</h1>
    <p>I'm frontend developer</p>
  </div>
  )
}
export const App: React.FC = () => { 
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  return (
    <div style={containerStyle}>
     <MyData name='siddhesh'/>
    </div>
  );
};
`
export const counter: string = `import React, { useState } from 'react';
export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://img.freepik.com/free-photo/mobile-phone-glowing-blue-reflection-glass-generated-by-ai_188544-16845.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'yellow',
    height:'100vh'
  }
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="text-center" style={containerStyle}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
`
export const digitalClock: string = `import React, { useState, useEffect } from 'react';
export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.freeimages.com/images/large-previews/115/wolf-creek-dam-1527124.jpg?fmt=webp')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the current time as a string (HH:MM:SS)
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="text-center" style={containerStyle}>
      <h1>Digital Clock</h1>
      <p>Current Time: {formattedTime}</p>
    </div>
  );
};
`
export const displayAnchorCode: string = `
import React from 'react';
import './style.css';

export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height: '100vh',
  };
  return (
    <div style={containerStyle} className="text-center">
      <h1>My Anchor Example</h1>
      <a href="https://example.com" target="_blank">Visit Example.com</a>
    </div>
)
};`

export const displayButton: string = `
import React from 'react';

export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://img.freepik.com/free-photo/atom-science-biotechnology-blue-neon-graphic_53876-167297.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  }
  const handleClick = () => {
    alert("Button Clicked!"); // Replace with your desired action
  };

  return (
    <div className="text-center" style={containerStyle}>
      <h1>Button Example</h1>
      <p>Click the button below:</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
`
export const displayHeaderCode: string = 
`import React from 'react';
import './style.css';

export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height: '100vh',
  };
  return (
    <div style={containerStyle}>
      <h1>Hello React!</h1>
    </div>
  );
};
`

export const displayImages: string = `
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';

const imageUrls = [
  'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb',
];
export const App: React.FC = () => {
  const customStyle: React.CSSProperties = {
    height: "500px",
    width: "96%",
  };
  return (
    <div className="text-center">
    <h1>My Image Gallery</h1>
    <Carousel>
      {imageUrls.map((imageUrl, index) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            key={index}
            src={imageUrl}
            alt="Image 1"
          />
        </Carousel.Item>
      ))}</Carousel>
  </div>
  );
};
;
`
export const editInput: string = `
import React, { useState } from 'react';

export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.freeimages.com/images/large-previews/115/wolf-creek-dam-1527124.jpg?fmt=webp')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'

  }
  // Define a state variable to store the input value
  const [inputValue, setInputValue] = useState<string>(''); // Initialize with an empty string

  // Event handler to update the inputValue state when the input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="text-center" style={containerStyle}>
      <h1>Edit Box Example</h1>
      <p>Input Value: {inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};
`
export const fcCallExample: string = `
import React from 'react';

const MyComponent: React.FC<{name:string}> = ({name}) => {
  const containerStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150323506.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'yellow',
    height: '100vh',
  };
    return (
      <div style={containerStyle} className="text-center">
        <h1>Hello my name is {name}!</h1>
        <p>I'm frontend developer</p>
      </div>
    );
}

export const App: FC = () => {
  return (
    <div className="text-center">
      <MyComponent name='siddhesh'/>
    </div>
  );
};
`
export const loginForm: string = `
import React, { useState } from 'react';
import './style.css';
export const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.freeimages.com/images/large-previews/48e/brooklyn-bridge-1566599.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    height:'100vh'
  };
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Submitted Data:', formData);
    setShowAlert(true);
  };

  return (
    <div style={containerStyle} className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button className='logInBtn' type="submit">Log In</button>
      </form>
      {showAlert && <div className="alert">Login Successful!</div>}
    </div>
  );
};
`
export const propExample: string = `
import React from 'react';

// Define the ChildComponent that receives multiple props
const ChildComponent: React.FC<{ name: string; description: string; imageSrc: string }> = (props) => {
  const containerStyle: React.CSSProperties = {
    height:'100%',
    width:'100%'
  }
  return (
    <div>
      <h2>Display Image & its details through props</h2>
      <p>Name: {props.name}</p>
      <p>Description: {props.description}</p>
      <img  style={containerStyle} src={props.imageSrc} alt="Child Image" />
    </div>
  );
};

// Define the Component and pass multiple arguments as props
export const App: React.FC = () => {
  const childProps = {
    name: "Nature scenary",
    description: "This is an example description.",
    imageSrc: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
  };

  return (
    <div className="text-center">
      {/* Pass multiple arguments as props to ChildComponent */}
      <ChildComponent {...childProps} />
    </div>
  );
};`


  