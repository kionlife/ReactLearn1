import logo from './logo.svg';
import './App.css';
import List from './components/usersList';

function App(props) {
 
  return <div>
    <List list = {props} />
  </div>
}

export default App;