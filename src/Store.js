import {createStore} from 'react'
import { initialState, stateReducer } from './reducer'

export const store=createStore(stateReducer,initialState)