
import './App.css';
import Greet from './component/Greet';
import Heading from './component/Heading';
import { Oscar } from './component/Oscar';
import PersonList from './component/PersonList';
import  {Status}  from './component/Status';
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
      <Greet name="Ramesh"  isLoggedIn={true}/>
      <PersonList name={listPerson}/>
      <Status status="success"/>
      <Oscar>
        <Heading>hello from heading</Heading>
      </Oscar>
     
    </div>
  );
}

export default App;
