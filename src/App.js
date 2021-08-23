
import './App.css';
import Front from "./components/front"
import Miguel from "./components/Miguel"
import Naive from "./components/naive"
import Hope from "./components/hope"
import Dave from "./components/dave"
import Joy from "./components/joy"
import {BrowserRouter as Router , Route} from "react-router-dom"
import Art from "./components/artworks"
import Artists from "./components/artists"
import Up from "./components/upcoming"
import Add from "./components/address"


function App() {
  return (

    <Router> 
    <div className="App">
         
    <Route path="/" exact component={Art}></Route>
    <Route path="/" exact component={Front}></Route>
    <Route path="/artists" component={Artists}></Route>
    <Route path="/upcoming" component={Up}></Route>
    <Route path="/addresss" component={Add}></Route>
      <Route path="/miguel" component={Miguel}></Route>
      <Route path="/naive" component={Naive}></Route>
      <Route path="/hope" component={Hope}></Route>
      <Route path="/dave" component={Dave}></Route>
      <Route path="/joy" component={Joy}></Route>
      
      
      </div>
    </Router>
    
    
  );
}

export default App;