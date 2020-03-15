import React, {useEffect} from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import ReposList from '../repos/ReposList'


export default function () {
    // store data
    const searchResult = useStoreState(state => state.search.searchResult)
    const resetSearchResult = useStoreActions(actions => actions.search.reset)
    useEffect(() => {
        //on unmount, rest the the search result
        return resetSearchResult
    }, [])
    return (<ReposList items={searchResult} />)
}