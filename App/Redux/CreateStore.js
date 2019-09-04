import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'

export default (rootReducer) => {
  const middleware = []
  const enhancers = []

  middleware.push(promise);
  middleware.push(thunk)
  middleware.push(logger);

  enhancers.push(applyMiddleware(...middleware))
  
  const store = createStore(
    rootReducer, compose(...enhancers)    
  );

  return { store }
}