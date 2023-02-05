import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import Color from './component/Color';


//import Navlink from './component/Navlink';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Basicform from './component/Basicform';
import City from './component/City';
import Channel from './component/Channel';
import Own from './component/Own';
import Other from './component/Other';
import More from './component/More';
import Resume from './component/Resume';


function App() {
  return (
    <div className="App">

   
    <BrowserRouter>
   
    <Color/>
    <Navbar/>
   
    
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Stopwatch/>}/>
        <Route path='/form' element={<Basicform/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/city' element={<City/>}/>
        <Route path='/channel' element={<Channel/>}/>
        <Route path='/own' element={<Own/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/resume' element={<Resume/>}/>
        
    
        
      </Routes>
     
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
