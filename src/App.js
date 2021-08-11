
import './App.css';

import Movies from "./components/Movies";
import {Provider} from 'react-redux';
import {Store} from "./services/MovieServices"

function App() {
  return (
    <Provider store={Store()}>
      <Movies/>
    </Provider>
  
  );
}

export default App;
