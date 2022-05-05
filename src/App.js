import './App.css';
import CakesContainer from './components/cakesContainer';
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <CakesContainer />
    </Provider>
  );
}

export default App;
