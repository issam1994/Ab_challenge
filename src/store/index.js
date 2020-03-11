import {createStore} from 'easy-peasy'
import articles from './models/articles'

const rootModel = {
    articles
}
const store = createStore(rootModel);

export default store;