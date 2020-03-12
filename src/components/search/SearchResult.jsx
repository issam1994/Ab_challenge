import React from 'react'
import { useStoreState } from 'easy-peasy'
import ArticlesList from '../articles/ArticlesList'


export default function () {
    // store data
    const searchResult = useStoreState(state => state.search.searchResult)

    return (<ArticlesList items={searchResult} />)
}