
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDO from "./pages/todo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  /*   const [adet, adediAta] = useState(0);
    
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${adet} times`;
      return console.log("hello")
    }); */
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header" style={{height:300, minHeight:300, maxHeight:300}}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ToDo Redux app</h1>
          </header>
          <ToDO />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
