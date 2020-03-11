import { computed, action, thunk } from 'easy-peasy'
import axios from 'axios'

const articlesModel = {
    //state
    items: [],
    searchResult: [],
    isFetching: false,
    //computed
    getItems: computed(state => state.items),
    //actions
    updateItems: action((state, fetchedData) => state.items = fetchedData),
    //thunks
    fetchData: thunk (async (actions, payload) => {
        try{
            axios.get('/posts')
        } catch(e) {

        }
    })

}

export default articlesModel