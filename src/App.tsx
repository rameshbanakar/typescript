
import './App.css';
import Button from './component/Button';
import Greet from './component/Greet';
import Heading from './component/Heading';
import Input from './component/Input';
import { Oscar } from './component/Oscar';
import PersonList from './component/PersonList';
import  {Status}  from './component/Status';
import Style from './component/Style';
import Counter from './component/state/Counter';
import LoggedIn from './component/state/LoggedIn';
import User from './component/state/User';
function App() {
  // const listPerson=[
  //   {
  //     firstName:"Ramesh",
  //     lastName:"Banakar"
  //   },{
  //     firstName: "Veeresh",
  //     lastName: "Banakar"
      
  //   },{
  //     firstName: "kiran",
  //     lastName: "mane"
  //   }
  // ]

  
  return (
    // <div className="App">
    //   <Greet name="Ramesh"  isLoggedIn={true}/>
    //   <PersonList name={listPerson}/>
    //   <Status status="success"/>
    //   <Oscar>
    //     <Heading>hello from heading</Heading>
    //   </Oscar>
     
    // </div>

    // <div>
    //   <Button handleClick={(event,id)=>console.log("button clicked",event,id)}/>
    //   <Input value="" handleChange={(event)=>console.log("from app component")}/>
    //   <Style style={{height:"10px",width:"20px",border:"1px solid black"}}/>
    // </div>
    <div>
      {/* <LoggedIn/> */}
      {/* <User/> */}
      <Counter/>
    </div>
  );
}

export default App;
