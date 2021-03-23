import './App.css';
import CakeContainer from './Components/CakeContainer';

//providing store to react application
import {Provider} from 'react-redux';
import store from './redux/Cakes/Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
