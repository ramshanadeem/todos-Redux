import './App.css';
import { Provider } from 'react-redux'
import store from './store/store'
import AddTodo from './AddTodo';
function App() {
  return (
    <div className="App">
       <Provider store={store}>
    <div className="App">
      <AddTodo/>
     
    </div>
    </Provider>
    </div>
  );
}

export default App;
