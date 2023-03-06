import {Outlet} from "react-router-dom"

import './App.css';
import Header from './components/Header';
import {StoreContextProvider} from "./storeContext";

function App() {


  return (
      <StoreContextProvider>
          <div className="App">
            <Header />
            <Outlet />
          </div>
          
      </StoreContextProvider>
      
    
    
  );
}

export default App;
