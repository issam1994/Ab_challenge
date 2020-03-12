import { computed, action, thunk } from 'easy-peasy'
import axios from 'axios'

// const searchUrl = "/search/repositories?q=vue.js&sort=stars&order=desc&page=1"
const articlesModel = {
    //state
    items: [],
    currentPage: 0,
    searchResult: [],
    isFetching: false,
    //computed
    getItems: computed(state => state.items),
    //actions
    updateItems: action((state, fetchedItems) => { state.items.push(...fetchedItems) }),
    incrementCurrentPage: action(state => { state.currentPage++ }),
    setIsFetching: action((state, payload) => { state.isFetching = payload }),
    updateSearchResult: action((state, fetchedData) => { state.searchResult = fetchedData }),
    //thunks
    fetchItems: thunk(async (actions, callback, helpers) => {
        try {
            actions.setIsFetching(true)
            const currentPage = helpers.getState().currentPage
            const trendingUrl = `/search/repositories?q=created:>2020-01-01&sort=stars&order=desc&page=${currentPage + 1}`
            const { items } = (await axios.get(trendingUrl)).data
            console.log("fetched items: ", items)
            actions.updateItems(items)
            actions.incrementCurrentPage()
            actions.setIsFetching(false)
            //the callback is going to be about re attaching the scroll listener
            callback()
        } catch (e) {
            console.log("error at fetchItems: ", e)
        }
    }),
    //

}

export default articlesModel