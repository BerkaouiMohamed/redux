import { Provider } from 'react-redux';
import Product from './Product';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Product />
      </div>
      </Provider>
  );
}

export default App;
