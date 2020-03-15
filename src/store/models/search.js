import {action, thunk } from 'easy-peasy'
import axios from 'axios'

const searchModel = {
    //state
    searchQuery: '',
    searchResult: [],
    //actions
    setSearchQuery: action((state, query) => {state.searchQuery = query}),
    updateSearchResult: action((state, fetchedData) => { state.searchResult = fetchedData }),
    reset: action((state) => {
        state.searchResult = []
    }),
    //thunks
    fetchResult: thunk(async (actions, callback, helpers) => {
        try {
            const {searchQuery} = helpers.getState()
            if(searchQuery === "") return;
            helpers.getStoreActions().trending.setIsFetching(true)
            actions.updateSearchResult([])
            const searchUrl = `/search/repositories?q=${searchQuery}&sort=stars&order=desc&page=1`
            const { items } = (await axios.get(searchUrl)).data
            actions.updateSearchResult(items)
            helpers.getStoreActions().trending.setIsFetching(false)
            //the callback is going to be about re attaching the scroll listener
            if(callback) callback();
        } catch (e) {
            console.log("error at fetchItems: ", e)
        }
    }),
    //

}

export default searchModel