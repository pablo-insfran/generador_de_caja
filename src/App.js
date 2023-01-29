
import './App.css';
import { useState } from 'react';
import List from './components/List';

function App() {

  const [list, setLista] = useState([
    {
      name: "red",
      size: ""
    },
    {
      name: "blue",
      size: ""
    },
    {
      name: "purple",
      size: ""
    }
  ])

  return (

    <div className="App">
      <List list={list}/>
    </div>

  );
}

export default App;
