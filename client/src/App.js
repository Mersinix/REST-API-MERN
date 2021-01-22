import{BrowserRouter, Link,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { Button } from 'reactstrap';
import ContactList from './components/ContactList';
import "./App.css";
import AddModal from './components/AddModal';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <div className="App">
     <Link to="/list" >
       <Button color="info">contact list</Button>
       </Link>
     <Link to="/form" >
       <Button color="info">add contact</Button>
       </Link>
    </div>
    <Route exact path="/" render={()=><h1>Welcome to your Contact List</h1>}/>
    <Route  path="/list" render={()=> <ContactList/>}/>
    <Route  path="/form" render={()=> <AddModal/>}/>
    
    </BrowserRouter>
  );
}

export default App;
