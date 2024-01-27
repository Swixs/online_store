import ReactDOM from 'react-dom/client'
import App from './App'
import { createContext } from 'react'

export const Context = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Context.Provider>
        <App />
    </Context.Provider>,
)
