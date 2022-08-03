import React from 'react'
import Home from './Home'
import Profile from './Profile'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './Store'
// import {stateReducer,initialState} from './reducer'
function App() {
  // const [state, dispatch] = useReducer(stateReducer, initialState)
// console.log(state);
  return (
    <div>
    <Provider store={store}>
    <BrowserRouter>
    <ul>
    <li><Link to='/Home'>Home</Link></li>
    <li><Link to='/Profile'>Profile</Link></li>
    </ul>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  )
}

export default App