import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from 'react';
import UserStore from './store/userStore';
import DeviceStore from './store/deviceStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null);

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>,
);
