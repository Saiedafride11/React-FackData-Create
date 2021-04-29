import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import dataTata1 from './data/data.json';
import dataTata2 from './data/data2.json';
import {dataTata3} from './data/data3'

function App() {

  console.log(dataTata1);
  console.log(dataTata2);
  console.log(dataTata3);


  const [teams1, setTeams1] = useState([]);
  const [teams2, setTeams2] = useState([]);
  // const [teams3, setTeams3] = useState([]);

  const frist5 = dataTata3.slice(0,5)
  const [teams3, setTeams3] = useState(frist5);


  useEffect( () => {
    setTeams1(dataTata1);
  },[]);

  useEffect( () => {
    setTeams2(dataTata2);
  },0)

  // useEffect( () => {
  //   setTeams3(dataTata3);
  // },0)



  return (
    <div className="App">

            <h2>FackData Create Site</h2>
            <p>https://www.json-generator.com/</p>
            <p>https://www.mockaroo.com/</p>
            <p>https://github.com/marak/Faker.js/</p>

         <p>------------------------------------------------------------------------------</p>

         <ul>
           {
             teams1.map(team => <li>{team.first_name}</li>)
           }
         </ul>

           <p>------------------------------------------------------------------------------</p>

         <ul>
           {
             teams2.map(team => <li>{team.first_name}</li>)
           }
         </ul>

         <p>------------------------------------------------------------------------------</p>


         <ul>
           {
             teams3.map(team => <li>{team.first_name}</li>)
           }
         </ul>
    </div>
  );
}

export default App;
