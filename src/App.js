import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

Amplify.configure(config);


function App() {
  return (
    <h1>This is the Homepage!!!</h1>
  );
}

export default App;
