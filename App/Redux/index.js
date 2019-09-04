import configureStore from './CreateStore'
import reducers from './Reducers'

export default () => {
    let { store } = configureStore(reducers);  
    return store;
}