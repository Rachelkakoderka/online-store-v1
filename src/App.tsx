import {Outlet} from "react-router-dom"

import './App.css';
import Header from './components/Header';
import { Provider } from "react-redux"
import store from "./redux"

function App() {


  return (
      <Provider store={store}>
          <div className="App">
            <Header />
            <Outlet />
          </div>
      </Provider>
  );
}

export default App;
