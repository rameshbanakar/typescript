
import './App.css';
import Greet from './component/Greet';
import PersonList from './component/PersonList';

function App() {
  const listPerson=[
    {
      firstName:"Ramesh",
      lastName:"Banakar"
    },{
      firstName: "Veeresh",
      lastName: "Banakar"
      
    },{
      firstName: "kiran",
      lastName: "mane"
    }
  ]

  
  return (
    <div className="App">
      <Greet name="Ramesh" messageCount={20} isLoggedIn={true}/>
      <PersonList name={listPerson}/>
    </div>
  );
}

export default App;
