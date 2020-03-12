import React from 'react'
import { useStoreState } from 'easy-peasy'
import ArticlesList from '../articles/ArticlesList'


export default function () {
    // store data
    const searchResult = useStoreState(state => state.articles.searchResult)

    return (<ArticlesList items={searchResult} />)
}