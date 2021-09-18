import {combineReducers} from 'redux'
import { questions } from './ques'
import { users } from './user'
import { authedUser } from './authedUser'

export const reducer= combineReducers({questions,users,authedUser})