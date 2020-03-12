import {createStore} from 'easy-peasy'
import trending from './models/trending'
import search from './models/search'

const rootModel = {
    trending,
    search
}
const store = createStore(rootModel);

export default store;