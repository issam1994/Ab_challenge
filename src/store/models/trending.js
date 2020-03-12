import { action, thunk } from 'easy-peasy'
import axios from 'axios'

// const searchUrl = ""
const trendingModel = {
    //state
    isFetching: false,
    items: [],
    currentPage: 0,
    //actions
    updateItems: action((state, fetchedItems) => { state.items.push(...fetchedItems) }),
    incrementCurrentPage: action(state => { state.currentPage++ }),
    setIsFetching: action((state, payload) => { state.isFetching = payload }),
    reset: action((state) => {
        state.currentPage = 0
        state.items = []
        state.isFetching = false
    }),
    //thunks
    fetchItems: thunk(async (actions, callback, helpers) => {
        try {
            actions.setIsFetching(true)
            const { currentPage } = helpers.getState()
            const trendingUrl = `/search/repositories?q=created:>2020-01-01&sort=stars&order=desc&page=${currentPage + 1}`
            const { items } = (await axios.get(trendingUrl)).data
            actions.updateItems(items)
            actions.incrementCurrentPage()
            actions.setIsFetching(false)
            //the callback is going to be about re attaching the scroll listener
            if (callback) callback();
        } catch (e) {
            console.log("error at fetchItems: ", e)
        }
    }),
    //

}

export default trendingModel