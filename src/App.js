import React from 'react';
import Header from './components/Header';
import ReactDOM from 'react-dom'
// import Home from './pages/Home';

// State Context
const StateContext = React.createContext();

const initialState = {
  screen: 'Home'
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, screen: action.payload };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Example Component
const Home = () => {
  const { state, dispatch } = React.useContext(StateContext);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch({ type: 'SET_SCREEN', payload: 'About' })}>
        Go to About
      </button>
    </div>
  );
};

const About = () => {
  const { state, dispatch } = React.useContext(StateContext);
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => dispatch({ type: 'SET_SCREEN', payload: 'Projects' })}>
        Go to Projects
      </button>
    </div>
  );
};
const Projects = () => {
  const { state, dispatch } = React.useContext(StateContext);
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => dispatch({ type: 'SET_SCREEN', payload: 'Projects' })}>
        Go to Projects
      </button>
    </div>
  );
};

const Contact = () => {
  const { state, dispatch } = React.useContext(StateContext);
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => dispatch({ type: 'SET_SCREEN', payload: 'Projects' })}>
        Go to Projects
      </button>
    </div>
  );
};
// Main App
const App = () => {
  const { state } = React.useContext(StateContext);

  return (
    <div>
      {state.screen === 'Home' && <Home />}
      {state.screen === 'Projects' && <Projects />}
    </div>
  );
};

// Usage
ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

export default App;