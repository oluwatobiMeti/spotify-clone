import './App.css';
import Login from './pages/Login';
import { DataLayer } from './DataLayer';
import { initialState, reducer} from "./reducer"

function App() {
  return (
    
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
