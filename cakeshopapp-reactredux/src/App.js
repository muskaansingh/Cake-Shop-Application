import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import UserContainer from './Components/UserContainer';
// import CakeContainer from './Components/CakeContainer';
// import HooksCakeContainer from './Components/HooksCakeContainer';
// import IceCreamContainer from './Components/IceCreamContainer';
// import NewCakeContainer from './Components/NewCakeContainer';
// import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            {/* <CakeContainer/>
            <HooksCakeContainer/>
            <IceCreamContainer/>
            <hr/>
            <NewCakeContainer/>
          
            <hr/>
            <hr/>
            <ItemContainer cake/>
            <ItemContainer/> */}

          <UserContainer/>
        </div>
    </Provider>
  );
}

export default App;
