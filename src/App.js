import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import MyNotes from './MyNotes';
import CreateNotes from './CreateNotes';

import "./style.css"
import Navbar from './Navbar';
function App() {
  return (
    <div>
    {/* <div className='NoteKeepcontainer'><h1 className='NoteKeeplogo'> KeepNotes</h1></div> */}
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/"  element={<MyNotes/>}></Route>
       <Route path="/mynotes" exact element={<MyNotes/>}></Route>
       <Route path="/createnotes" element={<CreateNotes/>}></Route>
     </Routes>
     </BrowserRouter>
   
   </div>
  );
}

export default App;
