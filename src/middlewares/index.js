import { logger } from "./logger";
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";

export const middleware = applyMiddleware(thunk,logger)