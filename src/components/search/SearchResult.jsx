import React from 'react'
import { useStoreState } from 'easy-peasy'
import ReposList from '../repos/ReposList'


export default function () {
    // store data
    const searchResult = useStoreState(state => state.search.searchResult)

    return (<ReposList items={searchResult} />)
}