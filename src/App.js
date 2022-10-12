
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Main from "../src/components/Main"



function App() {



  

  return (
    <Router>
    <div className="App">
 

        <div>
              
             
              <Routes >
                <Route exact path = "/" element={<Main />}>
                  
                  </Route>
                
             
    
              </Routes>
              
         </div>

     
  
   
    </div>
    </Router>
  );
}

export default App;
