import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <hr/>
      <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
