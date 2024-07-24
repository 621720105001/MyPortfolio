// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes}from'react-router-dom';
import Portfolio from './Portfolio';

function App() {
  return (
   <div className='App'>
    <Router>
      <Routes>
      <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </Router>

   </div>
  
    
    
   
     
  
  );
}

export default App;
