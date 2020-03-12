import { computed, action, thunk } from 'easy-peasy'
import axios from 'axios'

// const searchUrl = ""
const articlesModel = {
    //state
    isFetching: false,
    items: [],
    currentPage: 0,
    searchQuery: '',
    searchResult: [],
    //computed
    getItems: computed(state => state.items),
    getIsFetching: computed(state => state.isFetching),
    //actions
    updateItems: action((state, fetchedItems) => { state.items.push(...fetchedItems) }),
    incrementCurrentPage: action(state => { state.currentPage++ }),
    setIsFetching: action((state, payload) => { state.isFetching = payload }),
    reset: action((state) => {
        state.currentPage = 0
        state.items = []
        state.isFetching = false
    }),
    setSearchQuery: action((state, query) => {state.searchQuery = query}),
    updateSearchResult: action((state, fetchedData) => { state.searchResult = fetchedData }),
    //thunks
    fetchItems: thunk(async (actions, callback, helpers) => {
        try {
            actions.setIsFetching(true)
            const {currentPage} = helpers.getState()
            const trendingUrl = `/search/repositories?q=created:>2020-01-01&sort=stars&order=desc&page=${currentPage + 1}`
            const { items } = (await axios.get(trendingUrl)).data
            actions.updateItems(items)
            actions.incrementCurrentPage()
            actions.setIsFetching(false)
            //the callback is going to be about re attaching the scroll listener
            if(callback) callback();
        } catch (e) {
            console.log("error at fetchItems: ", e)
        }
    }),
    fetchResult: thunk(async (actions, callback, helpers) => {
        try {
            const {searchQuery} = helpers.getState()
            if(searchQuery === "") return;
            actions.setIsFetching(true)
            actions.updateSearchResult([])
            const searchUrl = `/search/repositories?q=${searchQuery}&sort=stars&order=desc&page=1`
            const { items } = (await axios.get(searchUrl)).data
            actions.updateSearchResult(items)
            actions.setIsFetching(false)
            //the callback is going to be about re attaching the scroll listener
            if(callback) callback();
        } catch (e) {
            console.log("error at fetchItems: ", e)
        }
    }),
    //

}

export default articlesModel